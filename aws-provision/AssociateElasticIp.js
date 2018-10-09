var AWS = require('aws-sdk');
//AWS.config.loadFromPath(process.env.HOME + '/.aws/config.json');
var ec2 = new AWS.EC2({apiVersion: '2016-11-15'});
var elasticIpParams = {
    AllocationId: 'eipalloc-0449f3cd9d2ab1ec6',
    InstanceId: 'i-06272fc145fe42ddc'
};

module.exports = () => {
    ec2.associateAddress(elasticIpParams, (err, data) => {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });
};