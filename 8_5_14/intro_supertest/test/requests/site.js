var app = require('../../app.js'),
  request = require('supertest');


describe ('Root route', function() {
  it ('should send the response: OK', function(done) {
    request(app)
      .get('/')
      .expect(200)
      .end(done);
  });
});


describe ('About', function() {
  it ('should send the response: OK', function(done) {
    request(app)
      .get('/about')
      .expect(200)
      .end(done);
  });
});


describe ('Contact', function() {
  it ('should send the response: OK', function(done) {
    request(app)
      .get('/contact')
      .expect(200)
      .end(done);
  });
});

describe ('Any other route', function() {
  it ('should send the response: Not Found', function(done) {
    request(app)
      .get('/*')
      .expect(404)
      .end(done);
  });
});




