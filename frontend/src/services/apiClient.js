const axios = require('axios');

function createApiClient(req) {
  const client = axios.create({
    baseURL: process.env.API_BASE_URL || 'http://localhost:8080/api',
    timeout: 10000
  });

  client.interceptors.request.use((config) => {
    const token = req?.cookies?.syiar_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  return client;
}

module.exports = { createApiClient };
