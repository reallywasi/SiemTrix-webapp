**SeimTrix** is an innovative **SIEM log analyzer** and **cybersecurity tool** designed to monitor, analyze, and visualize user activity from **browser histories**, **Windows logs**, and application usage. It delivers a powerful, **beautifully designed dashboard** that tracks **productivity** by measuring time spent on coding platforms like **LeetCode**, **GitHub**, and **VS Code**, while also monitoring distractions such as **Netflix** and social media. With advanced **security insights**, real-time alerts, and behavioral analysis, SeimTrix helps users improve focus, identify potential security risks, and optimize time management through clear, actionable reports and personalized recommendations.



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
