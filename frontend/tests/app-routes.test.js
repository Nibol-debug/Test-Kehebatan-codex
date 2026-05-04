const test = require('node:test');
const request = require('supertest');
const app = require('../server');

test('GET /login returns 200', async () => {
  await request(app).get('/login').expect(200);
});

test('GET /dashboard redirects when unauthenticated', async () => {
  await request(app).get('/dashboard').expect(302);
});
