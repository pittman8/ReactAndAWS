var express = require('express');
var router = express.Router();
//const getAwsInstanceParams = require('./aws/GetAwsInstanceParams');
//const createInstance = require('./aws/AwsPromise');

const check = (request, response, next) => {
    console.log('REQUEST CHECK CALLED', request.query);
    const validOptions = ['GetStarted, known_hosts'];
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
    var message = {
        result: 'success',
        route: '/script-pusher/copy-get-started',
        instanceData: '',
        allocationIds: '',
        regions: ''
    };
    console.log(
        'Copy Get Started called:\n' + JSON.stringify(message, null, 4)
    );
    response.send(message);
});

router.get('/remove-known-host', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    var message = {
        result: 'success',
        route: '/script-pusher/remove-known-host',
        instanceData: '',
        ec2Ip: request.query.ec2Ip
    };
    console.log(
        'Remove KnownHost called:\n' + JSON.stringify(message, null, 4)
    );
    console.log('\nQuerying ec2Ip: ' + request.query.ec2Ip + '\n');
    response.send(message);
});

module.exports = router;
