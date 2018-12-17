const agent = require('superagent-promise')(require('superagent'), Promise);
const statusCode = require('http-status-codes');

const { expect } = require('chai');

describe('First Api Tests', () => {
  it('Consume GET Service', () => agent.get('https://httpbin.org/ip').then((response) => {
    expect(response.status).to.equal(statusCode.OK);
    expect(response.body).to.have.property('origin');
  }));

  it('consume HEAD Service', () => agent
    .head('https://httpbin.org/headers')
    .then((response) => {
      expect(response.status).to.equal(statusCode.OK);
      expect(response.headers).to.have.property('content-type', 'application/json');
      expect(response.body).to.eql({});
    }));

  it('Consume GET Service with query parameters', () => {
    const query = {
      name: 'John',
      age: '31',
      city: 'New York'
    };

    return agent.get('https://httpbin.org/get')
      .query(query)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.args).to.eql(query);
      });
  });

  it('Consume POST Service with query parameters', () => {
    const body = {
      name: 'Sebastián',
      age: 23,
      city: 'Medellin'
    };

    return agent
      .post('https://httpbin.org/post')
      .send(body)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(body);
      });
  });

  it('Consume DELETE Service with query parameters', () => {
    const body = {
      name: 'Sebastián',
      age: 23,
      city: 'Medellin'
    };

    return agent
      .del('https://httpbin.org/delete')
      .send(body)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(body);
      });
  });

  it('Consume PUT Service with query parameters', () => {
    const body = {
      name: 'Sebastián',
      age: 23,
      city: 'Medellin'
    };

    return agent
      .put('https://httpbin.org/put')
      .send(body)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(body);
      });
  });

  it('Consume PATCH Service with query parameters', () => {
    const body = {
      name: 'Sebastián',
      age: 23,
      city: 'Medellin'
    };

    return agent
      .patch('https://httpbin.org/patch')
      .send(body)
      .then((response) => {
        expect(response.status).to.equal(statusCode.OK);
        expect(response.body.json).to.eql(body);
      });
  });
});
