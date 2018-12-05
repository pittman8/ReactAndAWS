const request = require('supertest');

const app = require('../app'); //reference to you app.js file

describe('Test index.js', function() {
    it('should call create-educate route', function(done) {
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check create-educate route and check JSON', function(done) {
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/create-educate',
                instanceData: {
                    instanceId: 'i-06272fc145fe42ddc',
                    keyName: 'ec2-320-in-class.pem',
                    architecture: 'Intel(R) Xeon(R) CPU E5-2676',
                    hostName: '18.235.68.201'
                },
                allocationIds: {
                    standard: 'standard'
                },
                regions: {
                    region: 'us-east-1'
                }
            });
    });

    it('should call create-standard route', function(done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check create-standard route and check JSON', function(done) {
        request(app)
            .get('/create-standard')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/create-standard',
                instanceData: {
                    instanceId: 'i-06272fc145fe42ddc',
                    keyName: 'ec2-320-in-class.pem',
                    architecture: 'Intel(R) Xeon(R) CPU E5-2676',
                    hostName: '18.235.68.201'
                },
                allocationIds: {
                    standard: 'standard'
                },
                regions: {
                    region: 'us-east-1'
                }
            });
    });

    it('should call associate-elastic-ip route', function(done) {
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check associate-elastic-ip route and check JSON', function(done) {
        request(app)
            .get('/associate-elastic-ip')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/associate-elastic-ip',
                instanceData: {}
            });
    });

    it('should call get-instance-status route', function(done) {
        request(app)
            .get('/get-instance-status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check get-instance-status route and check JSON', function(done) {
        request(app)
            .get('/get-instance-status')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/get-instance-status',
                instanceData: {}
            });
    });

    it('should call reboot-instance route', function(done) {
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check reboot-instance route and check JSON', function(done) {
        request(app)
            .get('/reboot-instance')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/reboot-instance',
                instanceData: ''
            });
    });
});
