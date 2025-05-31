import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        try {
          await connectMongoDB();
          let userDoc = await User.findOne({ email });

          if (!userDoc) {
            const res = await fetch("http://localhost:3000/api/user", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                email,
              }),
            });

            if (res.ok) {
              // Fetch the newly created user to get the _id
              userDoc = await User.findOne({ email });
            } else {
              throw new Error("Failed to create user");
            }
          }

          // Attach the MongoDB _id to the user object for use in redirect
          user.id = userDoc._id.toString();
          return true; // Allow sign-in
        } catch (error) {
          console.error("Error in signIn callback:", error);
          return false; // Deny sign-in on error
        }
      }

      return true; // Allow sign-in for other providers
    },
    async redirect({ url, baseUrl }) {
      // If the user object has an id (from MongoDB), redirect to [id]/dashboard
      if (url.includes("/api/auth/callback") && url.includes("provider=google")) {
        const userDoc = await User.findOne({ email: url.split("email=")[1]?.split("&")[0] });
        if (userDoc?._id) {
          return `${baseUrl}/${userDoc._id}/dashboard`;
        }
      }
      // Fallback to the default callback URL or home page
      return url.startsWith("/") ? `${baseUrl}${url}` : baseUrl;
    },
    async session({ session, user }) {
      // Attach MongoDB _id to the session object
      if (session.user) {
        const userDoc = await User.findOne({ email: session.user.email });
        if (userDoc) {
          session.user.id = userDoc._id.toString();
        }
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };