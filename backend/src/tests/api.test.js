import request from 'supertest';
import app from '../server.js';

describe('API Tests', () => {
  test('GET /api/hello should return hello message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ message: 'Hello from backend API!' });
  });

  test('POST /api/echo should return received data', async () => {
    const testData = { name: 'John', age: 30 };
    const response = await request(app).post('/api/echo').send(testData);
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ received: testData });
  });
});