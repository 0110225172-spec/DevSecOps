const request = require('supertest');
const app = require('../src/app');

describe('API Endpoints Test Suite', () => {
  test('GET / should return status OK', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.status).toEqual('OK');
  });

  test('POST /api/login should authenticate valid user', async () => {
    const res = await request(app)
      .post('/api/login')
      .send({ username: 'admin', password: 'admin123' });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('token');
  });

  test('GET /api/data should return query result', async () => {
    const res = await request(app).get('/api/data?q=test');
    expect(res.statusCode).toEqual(200);
  });
});