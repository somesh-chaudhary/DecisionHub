# DecisionHub – Collaborative Decision-Making Platform

DecisionHub is a full-stack web application that helps people make decisions together. Users can create decisions, add options, vote, compare alternatives, and discuss their choices in one place.

Whether it's a group trying to choose the best option or a community sharing opinions, DecisionHub makes the process simple and organized.

## ✨ Features

- **User Authentication** – Secure user registration and login.
- **Create Decisions** – Create decision boards and add multiple options.
- **Voting System** – Let users vote for the options they prefer.
- **Option Comparison** – Compare different options using parameters.
- **Communities** – Create or join communities and make decisions together.
- **Discussions & Comments** – Share opinions and discuss available options.
- **Notifications** – Keep users updated about relevant activities.
- **Feedback System** – Allow users to share feedback about the platform.
- **Moderation** – Support reporting and management of inappropriate content.

*Note: Features may vary depending on the current implementation.*

## 🛠️ Tech Stack

**Frontend**
- React
- JavaScript
- HTML & CSS

**Backend**
- Java
- Spring Boot
- REST APIs
- Spring Security / JWT Authentication

**Database**
- PostgreSQL
- Neon (cloud-hosted PostgreSQL)

**Tools & Deployment**
- Git & GitHub
- Docker
- Vercel (frontend deployment)
- Render (backend deployment)

## 📁 Project Structure

```text
DecisionHub/
├── backend/
│   ├── Dockerfile
│   └── src/
│       └── main/
├── frontend/
│   ├── src/
│   ├── public/
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
- PostgreSQL, or access to a Neon PostgreSQL database
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/somesh-chaudhary/DecisionHub.git
cd DecisionHub
```

### 2. Set Up the Backend

Open a terminal and navigate to the backend folder:

```bash
cd backend
```

Configure the database connection and other required settings using environment variables.

```env
SPRING_DATASOURCE_URL=jdbc:postgresql://your-host/your-database?sslmode=require
SPRING_DATASOURCE_USERNAME=your_database_username
SPRING_DATASOURCE_PASSWORD=your_database_password
JWT_SECRET=your_secret_key
JWT_EXPIRATION_MS=86400000
```

Replace the example values with your own credentials. Never commit database passwords, JWT secrets, or other sensitive information to GitHub.

Run the backend using Maven:

```bash
mvn spring-boot:run
```

The backend should start on the port configured in the application.

### 3. Set Up the Frontend

Open another terminal:

```bash
cd frontend
npm install
```

Configure the backend API URL in your frontend environment variables:

```env
VITE_API_BASE_URL=http://localhost:8080
```

Use the correct backend URL and port for your setup.

Start the frontend:

```bash
npm run dev
```

Open the local URL shown in your terminal to access the application.

## 🔐 Environment Variables

The application uses environment variables for configuration.

| Variable | Purpose |
|---|---|
| `SPRING_DATASOURCE_URL` | PostgreSQL JDBC connection URL |
| `SPRING_DATASOURCE_USERNAME` | Database username |
| `SPRING_DATASOURCE_PASSWORD` | Database password |
| `JWT_SECRET` | Secret used for JWT authentication |
| `JWT_EXPIRATION_MS` | Token expiration time in milliseconds |
| `VITE_API_BASE_URL` | Backend API base URL used by the frontend |

Keep credentials private and configure them separately for local development and deployment.

## 🌐 Live Demo

- **Frontend:** [DecisionHub](https://decision-hub-cyan.vercel.app/)
- **Backend:** [DecisionHub API](https://decisionhub-san9.onrender.com)

The backend may take a little time to respond after a period of inactivity because it runs on a free hosting plan.

## 🎯 Project Goal

The goal of DecisionHub is to make group decision-making easier by bringing voting, option comparison, and community discussions together in one platform.

Instead of managing opinions across multiple chats or documents, users can organize their choices and make decisions in one place.

## 🔮 Future Improvements

- Real-time voting updates
- Improved analytics and voting summaries
- More advanced decision comparison tools
- Better notification management
- Enhanced mobile responsiveness
- Additional community management features

## 👨‍💻 Contributors

Developed as part of the **Infosys Springboard Internship 7.0**.

Contributions, suggestions, and feedback are welcome.

---

**DecisionHub — Better decisions, made together.**
