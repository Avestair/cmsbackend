## CMS (Content Manangment Service)

## 🚀 Project Overview

This is a lightweight and high-performance backend built with **Bun** and **Elysia.js**, utilizing **Drizzle ORM** for database management and **Turso** as the hosted **libSQL** database. The project is written in **TypeScript.**

## 📦 Tech Stack

- **Bun** - Fast JavaScript runtime
- **Elysia.js** - Modern and efficient web framework
- **Drizzle ORM** - TypeScript-first ORM for SQL databases
- **Turso** - libSQL cloud-hosted database
- **TypeScript**

## 🔧 Installation

### Prerequisites

Ensure you have **Bun** installed:

```sh
curl -fsSL https://bun.sh/install | bash
```

### Clone the Repository

```sh
git clone https://github.com/Avestair/cmsbackend.git
cd cmsbackend
```

### Install Dependencies

```sh
bun install
```

## ⚙️ Environment Variables

Create a `.env` file in the root of the project and add your **Turso Database URL**:

```
TURSO_CONNECTION_URL=<your_turso_database_url>
TURSO_AUTH_TOKEN=<your_turso_database_auth_token>
```

## 🔨 Running the Server

Start the development server:

```sh
bun run dev
```

Or run in production mode:

```sh
bun run start
```

## 📂 Project Structure

```
📦 your-repo/
 ┣ 📂 src/
 ┃ ┣ 📂 routes/    # API route handlers
 ┃ ┣ 📂 services/  # Business logic services
 ┃ ┣ 📂 drizzle/   # Drizzle ORM queries and Schemas
 ┃ ┣ 📂 lib/       # Utils and Schemas
 ┃ ┣ 📂 DTOS/      # DTOs 
 ┃ ┣ 📜 index.ts   # Entry point
 ┣ 📜 .env         # Environment variables
 ┣ 📜 bun.lockb    # Bun lock file
 ┣ 📜 README.md    # Project documentation
```

## 🛠 API Endpoints

| Method | Endpoint         | Description         |
| ------ | ---------------- | ------------------- |
| POST   | `/user/register` | Register a new user |
| POST   | `/user/login`    | User login          |
| POST   | `/post/`         | Create a new post   |
| GET    | `/post/`         | Retrieve all posts  |
| GET    | `/post/:id`      | Get a single post   |
| PUT    | `/post/:id`      | Update a post       |
| DELETE | `/post/:id`      | Delete a post       |
