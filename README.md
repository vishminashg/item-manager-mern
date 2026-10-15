# Item Manager (MERN)

A MERN stack Item Manager with full CRUD. Each item has a name, category, price,
**discount percentage**, description and image URL.

## Project structure
```
backend/    Express + Mongoose REST API
frontend/   React (Vite) single page application
```

## Run locally
**Backend**
```bash
cd backend
npm install
cp .env.example .env      # then add your own MongoDB connection string
npm run dev               # http://localhost:5000
```

**Frontend**
```bash
cd frontend
npm install
npm run dev               # http://localhost:5173
```
The frontend reads the API address from `VITE_API_URL` (see `frontend/.env.example`).
When it is not set it uses `http://localhost:5000/api`.

## Deployment
- Backend: Render (Web Service, root directory `backend`, start command `npm start`)
- Frontend: Netlify (base directory `frontend`, build command `npm run build`, publish directory `dist`)

Environment variables:
- Backend: `MONGO_URI`
- Frontend: `VITE_API_URL` = `https://<your-backend-url>/api`
