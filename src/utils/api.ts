import axios from 'axios';

import { endpoints } from 'config/endpoints';

export const api = axios.create({
  baseURL: endpoints.baseUrl,
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
  },
});
