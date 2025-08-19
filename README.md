# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# 💬 Chat Application

A real-time chat application built with **React (Vite)** and **Firebase** for authentication, database, and hosting.  
This app allows users to sign up, log in, and chat seamlessly in a modern UI.  

🌐 **Live Demo:** [Chat Application](https://chat-application-blush-six.vercel.app)

---

## ✨ Features
- 🔐 User Authentication (Signup, Login, Logout, Reset Password)
- 💬 Real-time Chat using Firebase Firestore
- 🖼️ Profile avatars support
- ⚡ Fast and optimized with Vite + React
- 🎨 Responsive UI with modern CSS styling

---

## 🖼️ Screenshots

### 🔑 Login / Signup Page
![Login Screenshot](./screenshots/login.png)

### 💬 Chat Window
![Chat Screenshot](./screenshots/chat.png)

---

## 🛠️ Tech Stack
- **Frontend:** React (Vite)
- **Backend:** Firebase (Authentication, Firestore, Storage)
- **Hosting:** Vercel
- **Styling:** CSS

---

## 📂 Project Structure

├── public/ # Static assets
├── src/ # Main source code
│ ├── components/ # React components
│ ├── config/ # Firebase config
│ ├── pages/ # Login, Signup, Chat pages
│ ├── assets/ # Images, logos
│ ├── App.jsx # Root component
│ ├── main.jsx # Entry point
├── screenshots/ # App screenshots
├── package.json # Dependencies
├── vite.config.js # Vite configuration
└── README.md


---

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/chat-application.git
   cd chat-application


 2. Install dependencies
npm install


3. Setup Firebase

Go to Firebase Console.

Create a new project.

Enable Authentication (Email/Password).

Enable Cloud Firestore.

Create a Firebase Web App and copy the config.

Paste the config inside src/config/firebase.js.


4. Run locally
npm run dev


🚀 Deployment on Vercel

Push your project to GitHub.

Go to Vercel → Import Project → Select GitHub repo.

Configure:

Framework Preset: Vite

Root Directory: /

Add Firebase environment variables in Vercel → Project → Settings → Environment Variables.

Deploy 🚀

Your app will be live at: