# Backend - Item Manager Lab Test

Express + MongoDB (Mongoose) REST API for the Item Manager application.

## Setup
1. Open a terminal inside the backend folder.
2. Run:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and set your own values:
   ```
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   ```
4. Start the server:
   ```bash
   npm run dev
   ```
   For production use `npm start`.

## Item fields
| Field | Type | Notes |
| --- | --- | --- |
| `name` | String | required |
| `category` | String | required |
| `price` | Number | required, min 0 |
| `discountPercentage` | Number | optional, default 0, between 0 and 100 |
| `description` | String | required |
| `imageUrl` | String | optional |

## API Endpoints
- `GET /api/items`
- `GET /api/items/:id`
- `POST /api/items`
- `PUT /api/items/:id`
- `DELETE /api/items/:id`
