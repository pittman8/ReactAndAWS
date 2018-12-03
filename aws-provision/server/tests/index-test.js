const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test index.js', function() {

    it('should check create-educate route and check JSON', function(done) {
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', route: '/create-educate' });
    });

    it('should check create-standard route and check JSON', function(done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', route: '/create-standard' });
    });

    it('should check associate-elastic-ip route and check JSON', function(done) {
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', route: '/associate-elastic-ip' });
    });

    it('should check get-instance-status route and check JSON', function(done) {
        request(app)
            .get('/get-instance-status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', route: '/get-instance-status' });
    });

    it('should check reboot-instance route and check JSON', function(done) {
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({ result: 'success', route: '/reboot-instance' });
    });

});