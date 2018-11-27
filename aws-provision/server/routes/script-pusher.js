var express = require('express');
var router = express.Router();
//const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
//const createInstance = require('./aws/AwsPromise');

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
