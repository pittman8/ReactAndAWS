const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test ssh-runner.js', function() {
    it('should call run-get-started route', function(done) {
        request(app)
            .get('/ssh-runner/run-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check run-get-started route and check JSON', function(done) {
        request(app)
            .get('/ssh-runner/run-get-started')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/ssh-runner/run-get-started',
                instanceData: {
                    keyName: 'ec2-320-inclass.pem',
                    hostName: '18.235.68.201'
                },
                allocationIds: '',
                regions: ''
            });
    });

    it('should call run-ubuntu-setup route', function(done) {
        request(app)
            .get('/ssh-runner/run-ubuntu-setup')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check run-ubuntu-setup route and check JSON', function(done) {
        request(app)
            .get('/ssh-runner/run-ubuntu-setup')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/ssh-runner/run-ubuntu-setup',
                instanceData: {
                    keyName: 'ec2-320-inclass.pem',
                    hostName: '18.235.68.201'
                },
                allocationIds: '',
                regions: ''
            });
    });
});
