const request = require('supertest');
const assert = require('assert');
const app = require('../app'); //reference to you app.js file

describe('Test ssh-runner.js', function() {
	it('should check ssh-runner/uptime', function(done) {
	    this.timeout(2000);
		request(app)
        .get('/ssh-runner/uptime')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .then((result) => {
            assert.equal(result.body.result, 'success');
            assert.equal(result.body.code, undefined);
            const present = result.body.allData.includes('load average');
            assert.ok(present);
		    done();
		});
   });
});
