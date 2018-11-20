const request = require('supertest');
const assert = require('assert');
const app = require('../app'); //reference to you app.js file

describe('Test script-pusher.js', function() {

    it('should call script-pusher/foo route', function(done) {
        request(app)
            .get('/script-pusher/foo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done);
    });

    it('should check script-pusher/foo route', function(done) {
        request(app)
            .get('/script-pusher/foo')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200, done)
            .expect({
                file: 'script-pusher.js',
                result: 'success',
                status: 'script-pusher works'
            });
    });

   it('should check script-pusher/run-script Version Check', function(done) {
		this.timeout(30000);  // for my very slow computer
		request(app)
        .get('/script-pusher/run-script?script=VersionCheck')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((result) => {
            assert.equal(result.body.result, 'success');
            assert.equal(result.body.code, '1');
            const present = result.body.allData.includes('Ubuntu');
            assert.ok(present);
		    done();
		});
   });
   
   it('should check script-pusher/run-script CpuInfo', function(done) {
		this.timeout(1500);
		request(app)
        .get('/script-pusher/run-script?script=CpuInfo')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((result) => {
            assert.equal(result.body.result, 'success');
            assert.equal(result.body.code, '0');
            const present = result.body.allData.includes('processor');
            assert.ok(present);
		    done();
		});
   });
   
   it('should check script-pusher/run-system-tool uptime', function(done) {
		request(app)
        .get('/script-pusher/run-system-tool?script=uptime')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((result) => {
            assert.equal(result.body.result, 'success');
            assert.equal(result.body.code, '0');
            const present = result.body.allData.includes('load average');
            assert.ok(present);
		    done();
		});
   });
});
