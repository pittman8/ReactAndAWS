var express = require('express');
var router = express.Router();
const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
const createInstance = require('./aws/AwsPromise');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'server' });
});

/* Set up a route called foo. */
router.get('/foo', function(request, response) {
    var message = { result: 'success', endpointCalled: '/foo', file: 'index.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/create-educate', function(request, response) {
   // cannot create instance up on EC2
   // const awsInstanceParams = getAwsInstanceParams.awsEducate(); 
   // createInstance(awsInstanceParams);
    var message = { result: 'success', endpointCalled: '/create-educate', file: 'index.js' };
    console.log('Create Educate called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/create-standard', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = { result: 'success', endpointCalled: '/create-standard', file: 'index.js' };
    console.log('Create Standard called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/associate-elastic-ip', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = { result: 'success', endpointCalled: '/associate-elastic-ip', file: 'index.js' };
    console.log('Associate Elastic IP called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;
