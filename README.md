<div align="center">
  <img src="public/logo.svg" alt="Eventry Logo" width="200"/>
  <h1>Eventry</h1>
  <p>A modern, full-stack event booking platform built with Next.js, MongoDB, and Tailwind CSS.</p>
</div>

---

## 🎥 Live Demo

_Here you can see a live video demo of the project in action._

https://github.com/user-attachments/assets/a3fb678a-fea2-4d21-82bc-8db7484959be

---

## 🌐 Live URL

_Access the deployed application through the link below._

[**I'll place the link later**]

---

## ✨ Features

- **Browse Events:** View a list of upcoming events.
- **Event Details:** See detailed information for each event, including venue and description.
- **User Authentication:** Secure user registration and login functionality.
- **Event Registration:** Users can mark themselves as "Interested" or "Going" to an event.
- **Simple Checkout:** A streamlined payment process for event tickets. it's just a dummy thing.
- **Email Notifications:** Receive confirmation emails upon successful registration, powered by Resend.

---

## 🛠 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Database:** [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Email Service:** [Resend](https://resend.com/)
- **Deployment:** Vercel (or your preferred platform)

---

## 🚀 Getting Started

Follow these instructions to get a local copy of the project up and running.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community) instance (local or cloud-hosted)

### Installation

1.  **Clone the repository:**

    ```sh
    git clone https://github.com/Mahmudulislamshuvo/eventry
    cd eventry
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

### Environment Variables

To run the application, you need to set up the following environment variables. Create a `.env` file in the root of your project and add the following:

```
MONGO_URL=your_mongodb_connection_string
RESEND_API_KEY=your_resend_api_key
```

You can use the `.env.example` file as a template.

### Running the Application

1.  **Start the development server:**

    ```sh
    npm run dev
    ```

2.  Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 📂 Project Structure

```
eventry/
├── app/                  # Next.js App Router pages
├── components/           # React components
├── actions/              # Server-side actions
├── db/                   # Database queries
├── hooks/                # Custom React hooks
├── models/               # Mongoose schemas
├── provider/             # Authentication provider
├── public/               # Public assets (images, logos)
├── services/             # External services (e.g., MongoDB connection)
├── .env                  # Environment variables (ignored by git)
├── next.config.mjs       # Next.js configuration
└── package.json          # Project dependencies and scripts
```

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
