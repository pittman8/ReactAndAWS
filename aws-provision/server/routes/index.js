var express = require('express');
var router = express.Router();
const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
const createInstance = require('./aws/AwsPromise');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'server' });
});

router.get('/create-educate', function(request, response) {
    // cannot create instance up on EC2
    const awsInstanceParams = getAwsInstanceParams.awsEducate();
    createInstance(awsInstanceParams);
    var message = {
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
    };
    console.log('Create Educate called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/create-standard', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = {
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
    };
    console.log('Create Standard called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

router.get('/associate-elastic-ip', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = {
        result: 'success',
        route: '/associate-elastic-ip',
        instanceData: {
            instanceId: request.query.instanceId
        },
        allocationId: request.query.allocationId,
        region: request.query.region
    };
    console.log(
        'Associate Elastic IP called:\n' + JSON.stringify(message, null, 4)
    );
    console.log(
        '\nQuerying instanceId: ' +
            request.query.instanceId +
            '\n' +
            'Querying allocationId: ' +
            request.query.allocationId +
            '\n' +
            'Querying region: ' +
            request.query.region +
            '\n'
    );
    response.send(message);
});

router.get('/get-instance-status', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = {
        result: 'success',
        route: '/get-instance-status',
        instanceData: {
            instanceId: request.query.instanceId
        }
    };
    console.log(
        'Get Instance Status called:\n' + JSON.stringify(message, null, 4)
    );
    console.log('\nQuerying instanceId: ' + request.query.instanceId + '\n');
    response.send(message);
});

router.get('/reboot-instance', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = {
        result: 'success',
        route: '/reboot-instance',
        instanceData: ''
    };
    console.log('Reboot Instance called:\n' + JSON.stringify(message, null, 4));
    response.send(message);
});

module.exports = router;
