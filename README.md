# TravelMate - Microservices Based Travel Companion Platform

TravelMate is a scalable, distributed, and modular travel planning and management platform built using a **microservices architecture**. It allows users to book flights, hotels, and cabs and admin authentication

---

## 🧩 Features

- ✈️ Flight Booking Microservice
- 🏨 Hotel Reservation Microservice
- 🚖 Cab Booking Microservice
- 📊 Admin Dashboard
- 🔄 Central API Gateway for routing
- 📦 Dockerized services with Docker Compose
- 📈 Scalable architecture using microservices

---

## 🏗️ Tech Stack

| Layer            | Technologies           |
| ---------------- | ---------------------- |
| Backend Services | Node.js, Express.js    |
| Auth             | JWT, Bcrypt            |
| API Gateway      | Express Gateway        |
| Database         | MongoDB                |
| DevOps           | Docker, Docker Compose |
| Others           | Postman (Testing)      |

---

## 📁 Folder Structure

```
TravelMate-Microservices-Platform-
├── flight-service/
├── hotel-service/
├── cab-service/
├── admin-dashboard/
├── docker-compose.yml
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js
- Docker & Docker Compose
- MongoDB (can be dockerized)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/tatuskarjaiwanth/TravelMate-Microservices-Platform-.git
cd TravelMate-Microservices-Platform-
```

2. Setup environment variables in `.env` files for each service (sample provided).

3. Run all services using Docker Compose:

```bash
docker-compose up --build
```

---

## 🧪 Testing

- Use Postman collections to test APIs
- JWT-based routes require authentication headers

---

## 💡 Future Enhancements

- Payment gateway integration (Razorpay/Stripe)
- CI/CD pipeline with GitHub Actions
- Rate limiting and monitoring
- Kubernetes for orchestration

---

## 🤝 Contributions

Pull requests and suggestions are welcome!

---

## 🙋‍♂️ Author

**Tatuskar Jaiwanth**  
GitHub: [@tatuskarjaiwanth](https://github.com/tatuskarjaiwanth)
