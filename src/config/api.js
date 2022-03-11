import axios from 'axios';

//* Global instance
// axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL;
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//* Custom instance
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: { 'app-id': process.env.NEXT_PUBLIC_DUMMY_API_APP_ID },
  withCredentials: true,
  credentials: 'include',
});

export default api;
