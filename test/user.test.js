const supertest = require('supertest');
const { expect } = require('chai');
const app = require('../server'); 

const request = supertest(app);

describe('User API Tests', () => {
    // Test for getting users
  describe('GET api/users', () => {
    it('should retrieve all users', async () => {
      const res = await request.get('/api/users');
      expect(res.status).to.equal(200);
      expect(res.body).to.have.property('success', true);
    });
  });
  

});
