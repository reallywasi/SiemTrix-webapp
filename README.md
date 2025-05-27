SeimTrix is a modern SIEM (Security Information and Event Management) web application designed to collect, analyze, and visualize system and user activity logs across endpoints and networks. It integrates logs from browsers, system events, email clients, and applications to detect suspicious behavior, track access patterns, and provide actionable security insights in real time.

SeimTrix offers:

📊 A unified dashboard to correlate events from Chrome, Outlook, Windows, and other sources

⚠️ Customizable alert rules to flag anomalies and potential breaches

🧠 Lightweight behavioral analytics to identify insider threats or unusual patterns

🛡️ Support for log formats like JSONL, with structured ingestion via a centralized Flask-based server

⏱️ Optional user activity categorization to support security auditing or productivity reviews (e.g., coding vs. entertainment)

With real-time monitoring, historical log search, and modular agent support, SeimTrix empowers cybersecurity analysts, IT admins, and developers to secure their systems and gain full visibility into digital activity — all through a clean, web-accessible interface.



## Features

<div align="center">

| Feature                  | Description                                                                 |
|--------------------------|-----------------------------------------------------------------------------|
| Landing Page             | Clean, minimal UI for first-time visitors.                                 |
| Dashboard                | Dynamic and protected user dashboard after login.                          |
| Auth System              | Secure login using Google and custom credentials (NextAuth).               |
| API Integration          | Next.js API routes for backend business logic.                             |
| MongoDB Storage          | Data persistence using Mongoose schemas.                                   |
| Flask Services           | Flask server handles scraping, parsing, and heavy background jobs.         |
| Chrome Extension         | Collects console logs and DOM data, integrates with backend API.           |
| Scrapper Engine          | Receives URLs from dashboard and returns processed structured data.        |
| Clog Fetcher             | Extension reads browser console logs and sends them to your API.           |
| Modular Architecture     | Built for scalability and separation of concerns.                          |

</div>

---

## Tech Stack

<div align="center">

| Layer            | Technology             | Purpose                                                                 |
|------------------|-------------------------|-------------------------------------------------------------------------|
| Frontend         | Next.js                | Routing, SSR, and page structure.                                       |
| Styling          | Tailwind CSS           | Minimal, responsive styling using utility classes.                      |
| Backend (API)    | Node.js + Next.js API  | Business logic and route handling.                                      |
| Database         | MongoDB + Mongoose     | NoSQL storage for user/session/task data.                               |
| Auth             | NextAuth.js            | Secure OAuth and credential-based login.                                |
| Backend Services | Flask (Python)         | Handles scraping, PDF parsing, or ML-related microtasks.                |
| Chrome Tools     | Chrome Extension       | Clog Fetcher and DOM Scrapper – sends data to backend from browser.     |
| Deployment       | Vercel / Render / Railway | Hosting for frontend/backend; DB on MongoDB Atlas or Render.        |

</div>

---

## Project Structure

<div align="center">

| Folder / File          | Description                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| `/pages`                | All main routes: landing, login, dashboard, etc.                           |
| `/pages/api`            | Serverless backend routes (Next.js API).                                   |
| `/components`           | UI components like Navbar, Footer, Cards, etc.                             |
| `/models`               | Mongoose models (e.g., User, Session, Tasks).                              |
| `/lib`                  | Utility functions like DB connection and auth config.                      |
| `/styles`               | Tailwind global styles and optional custom CSS.                            |
| `/flask/`               | Python Flask microservice folder (run independently via Docker/localhost). |
| `/chrome-extension/`    | Chrome extension source – interacts with DOM and console logs.              |
| `/public`               | Static files like logos, favicons, etc.                                    |
| `.env.local`            | Local environment variable definitions.                                    |
| `next.config.js`        | Next.js specific configurations.                                           |
| `README.md`             | Documentation for setting up and understanding the project.                |

</div>
