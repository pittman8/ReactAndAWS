const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test script-pusher.js', function() {

    it('should check copy-get-started route and check JSON', function (done) {
        request(app)
            .get('/script-pusher/copy-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', route: '/script-pusher/copy-get-started' });
    });

    it('should check remove-known-host route and check JSON', function (done) {
        request(app)
            .get('/script-pusher/remove-known-host')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', route: '/script-pusher/remove-known-host' });
    });
});