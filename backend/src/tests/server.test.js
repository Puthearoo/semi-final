const request = require('supertest');
const app = require('../server');

describe('Backend API Tests', () => {
  test('GET /api/health should return status OK', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('OK');
  });

  test('GET /api/users should return users array', async () => {
    const response = await request(app).get('/api/users');
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBe(2);
  });

  test('POST /api/users should create new user', async () => {
    const newUser = {
      name: 'Test User',
      email: 'test@example.com'
    };

    const response = await request(app)
      .post('/api/users')
      .send(newUser);

    expect(response.status).toBe(200);
    expect(response.body.name).toBe(newUser.name);
    expect(response.body.email).toBe(newUser.email);
  });

  test('POST /api/users should return error for invalid data', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Test' }); // Missing email

    expect(response.status).toBe(400);
    expect(response.body.error).toBeDefined();
  });

  test('GET non-existent route should return 404', async () => {
    const response = await request(app).get('/api/non-existent');
    expect(response.status).toBe(404);
  });
});