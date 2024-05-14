const API_BASE_URL = process.env.NODE_ENV === 'production'
 ? 'https://your-vercel-deployment-url.vercel.app'
  : 'http://localhost:3001';

export default API_BASE_URL;
