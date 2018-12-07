const request = require('supertest');

const app = require('../app'); //reference to you app.js file

const allocationId = 'standard';
const instanceId = 'i-06272fc145fe42ddc';
const region = 'us-east-1';

describe('Test index.js', function() {
    it('should call create-educate route', function(done) {
        // This test prints a RequestExpired warning when I am not currently logged into
        // an active session on my AWS Educate account
        request(app)
            .get('/create-educate')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });


    it('should check create-educate route and check JSON', function(done) {
        // This test prints a RequestExpired warning when I am not currently logged into
        // an active session on my AWS Educate account
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
            .get(
                '/associate-elastic-ip?instanceId=' +
                    instanceId +
                    '&allocationId=' +
                    allocationId +
                    '&region=' +
                    region
            )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check associate-elastic-ip route and check JSON', function(done) {
        request(app)
            .get(
                '/associate-elastic-ip?instanceId=' +
                    instanceId +
                    '&allocationId=' +
                    allocationId +
                    '&region=' +
                    region
            )
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/associate-elastic-ip',
                instanceData: { instanceId: instanceId },
                allocationId: allocationId,
                region: region
            });
    });

    it('should call get-instance-status route', function(done) {
        request(app)
            .get('/get-instance-status?instanceId=' + instanceId)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check get-instance-status route and check JSON', function(done) {
        request(app)
            .get('/get-instance-status?instanceId=' + instanceId)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                result: 'success',
                route: '/get-instance-status',
                instanceData: { instanceId: instanceId }
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
