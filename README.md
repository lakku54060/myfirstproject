# Shopix

Shopix is a Vite + React frontend with an Express + MongoDB backend.

## Local setup

1. Copy `.env.example` to `.env`
2. Update the values if needed
3. Run the frontend:

```bash
npm install
npm run dev
```

4. Run the backend in another terminal:

```bash
npm start
```

## Environment variables

- `PORT`: backend port
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: JWT signing secret
- `CORS_ORIGIN`: comma-separated allowed frontend origins
- `PUBLIC_API_BASE_URL`: backend public URL for product image links
- `VITE_API_BASE_URL`: frontend API base URL used at build time

## Deploy for a public link

### Frontend on Vercel

1. Import this GitHub repository into Vercel
2. Framework preset: `Vite`
3. Build command: `npm run build`
4. Output directory: `dist`
5. Add this environment variable:

```bash
VITE_API_BASE_URL=https://your-render-service.onrender.com
```

### Backend on Render

1. Create a new Web Service from this same GitHub repository
2. Build command:

```bash
npm install
```

3. Start command:

```bash
npm start
```

4. Add these environment variables:

```bash
MONGO_URI=your-mongodb-atlas-url
JWT_SECRET=your-secure-secret
CORS_ORIGIN=https://your-vercel-site.vercel.app
PUBLIC_API_BASE_URL=https://your-render-service.onrender.com
```

Once both are deployed, people can open your Vercel URL directly.
