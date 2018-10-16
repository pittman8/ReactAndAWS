var express = require('express');
var router = express.Router();
const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
const createInstance = require('./aws/AwsPromise');

/* GET home page. */
router.get('/', function(req, res, next) { 'use strict';
  res.render('index', { title: 'server' });
});

/* Set up a route called foo. */
router.get('/foo', function(request, response) {
    var message = { 'result': 'success', 'status': 'bar', 'file': 'index.js' };
    console.log('Foo called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/create-educate', function(request, response) {
    const awsInstanceParams = getAwsInstanceParams.awsEducate();
    createInstance(awsInstanceParams);
    response.send({result: 'success'});
});

router.get('/create-standard', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    response.send({result: 'success'});
});

router.get('/associate-elastic-ip', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    response.send({result: 'success'});
});

module.exports = router;
