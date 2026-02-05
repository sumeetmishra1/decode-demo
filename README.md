## 🚀 Tech Stack
- **Frontend:** React, Tailwind CSS
- **Backend:** NestJS
- **Database:** PostgreSQL
- **ORM:** Prisma

## ✨ Features
- Product listing
- Add to cart
- Cart summary (total items & price)
- Backend API with Prisma
- Seeded database

## 🛠 Setup

### Backend
```bash
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
npm run start:dev
Server runs on: http://localhost:5000/api

Frontend
npm install
npm run dev
📦 API Endpoints
GET /api/products

GET /api/cart

POST /api/cart
