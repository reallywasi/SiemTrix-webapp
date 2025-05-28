"use client"
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function DashboardPage({ params }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div className="p-6 text-xl text-red-500">Not authenticated</div>;
  }

  const { name, email, id } = session.user;

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold text-slate-800">Welcome to your Dashboard</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>ID:</strong> {id}</p>
    </div>
  );
}
