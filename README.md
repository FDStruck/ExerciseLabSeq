# Lab Sequence Project

This project consists of two main components:
1. A Quarkus-based backend service.
2. An Angular-based frontend application served with Node.js and Express.

The Angular frontend interacts with the Quarkus backend to fetch sequence data.

## Prerequisites

- Docker
- Docker Compose

## Project Structure

```
.
├── angular
│   ├── src
│   ├── package.json
│   ├── server.ts
│   └── ...
├── quarkus
│   ├── src
│   ├── pom.xml
│   └── ...
├── Dockerfile.angular
├── Dockerfile.quarkus
├── docker-compose.yml
└── README.md
```

## Setup and Running the Application

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-repository/lab-sequence.git
   cd lab-sequence
   ```

2. **Build and Run the Application Using Docker Compose**

   ```bash
   docker-compose up --build
   ```

   This command will:
   - Build and start the Quarkus backend service on port 8080.
   - Build and start the Angular frontend application.

3. **Access the Application**

   Open your browser and navigate to `http://localhost` to access the frontend application.
