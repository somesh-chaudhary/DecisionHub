# DecisionHub – Collaborative Decision-Making Platform

DecisionHub is a full-stack web application designed to make group decision-making easier. Users can create decisions, add options, vote, compare alternatives, and discuss their choices in one place.

## ✨ Features

- 🔐 **User Authentication** – User registration and login.
- 📋 **Decision Management** – Create decisions and manage available options.
- 🗳️ **Voting System** – Vote for preferred options.
- ⚖️ **Option Comparison** – Compare alternatives using different parameters.
- 👥 **Communities** – Create and join communities to make decisions together.
- 💬 **Discussions & Comments** – Share opinions and discuss available options.
- 🔔 **Notifications** – Receive updates about relevant activities.
- ⭐ **Feedback System** – Submit feedback about the platform.
- 🛡️ **Moderation** – Report inappropriate content for review.
- 📊 **Analytics** – View decision-related information and results.

## 🛠️ Tech Stack

### Frontend
- React
- JavaScript
- HTML5
- CSS3

### Backend
- Java
- Spring Boot
- Spring Security
- REST APIs
- JWT Authentication

### Database
- PostgreSQL
- Neon

### Tools & Deployment
- Git and GitHub
- Docker
- Vercel
- Render

## 📁 Project Structure

```text
DecisionHub/
├── backend/
│   ├── src/
│   │   └── main/
│   └── Dockerfile
├── frontend/
│   ├── public/
│   ├── src/
│   └── package.json
└── README.md
```

## 🚀 Getting Started

Follow these steps to run DecisionHub locally.

### Prerequisites

Make sure you have installed:

- Java JDK
- Maven
- Node.js and npm
- Git
- Access to a PostgreSQL database

### 1. Clone the Repository

```bash
git clone https://github.com/somesh-chaudhary/DecisionHub.git
cd DecisionHub
```

### 2. Configure the Backend

Navigate to the backend directory:

```bash
cd backend
```

Configure the required environment variables:

```env
SPRING_DATASOURCE_URL=your_postgresql_jdbc_url
SPRING_DATASOURCE_USERNAME=your_database_username
SPRING_DATASOURCE_PASSWORD=your_database_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION_MS=86400000
```

Replace the example values with your actual configuration. Never commit passwords or secret keys to GitHub.

Start the backend:

```bash
mvn spring-boot:run
```

### 3. Configure the Frontend

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install the dependencies:

```bash
npm install
```

Create a `.env` file in the frontend directory and configure the backend API URL:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Use the port configured for your local backend.

Start the frontend:

```bash
npm run dev
```

Open the local URL displayed in your terminal to access the application.

## 🌐 Live Demo

- **Frontend:** [DecisionHub](https://decision-hub-cyan.vercel.app/)
- **Backend:** [DecisionHub Backend](https://decisionhub-san9.onrender.com)

*Note: The backend may take some time to respond after a period of inactivity because it uses free hosting.*

## 🎯 Project Objective

DecisionHub brings voting, option comparison, and community discussions together in one place.

The goal is to help individuals and groups organize their choices, share opinions, and make decisions through a simple and collaborative process.

## 🔮 Future Improvements

- Real-time voting updates
- Enhanced decision analytics
- Improved comparison tools
- Better notification management
- Enhanced mobile responsiveness

## 🤝 Feedback

Have suggestions or found an issue? Feel free to open an issue in the repository.

---

<p align="center">
  Built to make group decisions simpler.
</p>
