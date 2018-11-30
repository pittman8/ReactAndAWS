var express = require('express');
var router = express.Router();
//const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
//const createInstance = require('./aws/AwsPromise');

const check = (request, response, next) => {
    console.log('REQUEST CHECK CALLED', request.query);
    const validOptions = ['uptime'];
    if (request.query.script) {
        console.log('INSIDE REQUEST SCRIPT');
        if (!validOptions.includes(request.query.script)) {
            console.log('INSIDE REQUEST INVALID OPTION');
            response.send({
                result: 'error',
                error: 'Invalid Option: ' + request.query.script,
                script: request.query.script
            });
            return;
        }
    }
    next();
};

router.use(check);

router.get('/copy-get-started', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    response.send({ result: 'success' });
});

router.get('/run-get-started', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    response.send({ result: 'success' });
});

router.get('/remove-known-host', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    response.send({ result: 'success' });
});
