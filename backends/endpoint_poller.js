console.log('Loading function');

const doc = require('dynamodb-doc');

const dynamo = new doc.DynamoDB();

const https = require('https');



exports.handler = (event, context, callback) => {
    //console.log('Received event:', JSON.stringify(event, null, 2));

    https.get({ hostname: 'opendata.hopefully.works',
                port: '443',
                path: '/api/events',
                headers: {
                    "Authorization": process.env.authorization
                }
    }, (resp) => {
        let data = '';

        // A chunk of data has been recieved.
        resp.on('data', (chunk) => {
            data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on('end', () => {
            //console.log(JSON.parse(data));
            dynamo.putItem({
                TableName: 'eficode2019',
                Item: JSON.parse(data)
            }, done);
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
    
    
    const done = (err, res) => callback(null, {
        statusCode: err ? '400' : '200',
        body: err ? err.message : JSON.stringify(res),
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
