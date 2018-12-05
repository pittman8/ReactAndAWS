var express = require('express');
var router = express.Router();
const elfUtils = require('elven-code').elfUtils;

const check = (request, response, next) => {
    console.log('REQUEST CHECK CALLED', request.query);
    const validOptions = ['UbuntuSetup', 'GetStarted'];
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

const getSshIp = () => {
    return new Promise(function(resolve, reject) {
        elfUtils
            .readFile(process.env.HOME + '/.ssh/config')
            .then(content => {
                var pattern = new RegExp(
                    'Host ec2-bc[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)[\\s\\S]\\s*(.*)'
                );

                const result = {};
                const match = content.result.match(pattern);
                for (let i = 1; i < 5; i++) {
                    if (match[i].startsWith('HostName')) {
                        var hostPattern = new RegExp('HostName\\s(.*)');
                        result.hostName = match[i].match(hostPattern)[1];
                    }
                    if (match[i].startsWith('IdentityFile')) {
                        const idPattern = new RegExp('IdentityFile\\s(.*)');
                        const path = match[i].match(idPattern)[1];
                        result.identityFile = path.substring(
                            path.lastIndexOf('/') + 1,
                            path.length
                        );
                    }
                }
                console.log('GET SSH IP', result);
                resolve(result);
            })
            .catch(reject);
    });
};

router.get('/run-get-started', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    getSshIp()
        .then(result => {
            var message = {
                result: 'success',
                route: '/ssh-runner/run-get-started',
                instanceData: {
                    keyName: result.identityFile,
                    hostName: result.hostName
                },
                allocationIds: '',
                regions: ''
            };
            console.log(
                'Run Get Started called:\n' + JSON.stringify(message, null, 4)
            );
            response.send(message);
        })
        .catch(err => {
            response.send(err);
        });
});

router.get('/run-ubuntu-setup', function(request, response) {
    // const awsInstanceParams = getAwsInstanceParams.awsEducate();
    // createInstance(awsInstanceParams);
    getSshIp()
        .then(result => {
            var message = {
                result: 'success',
                route: '/ssh-runner/run-ubuntu-setup',
                instanceData: {
                    keyName: result.identityFile,
                    hostName: result.hostName
                },
                allocationIds: '',
                regions: ''
            };
            console.log(
                'Run Ubuntu Setup called:\n' + JSON.stringify(message, null, 4)
            );
            response.send(message);
        })
        .catch(err => {
            response.send(err);
        });
});

module.exports = router;
