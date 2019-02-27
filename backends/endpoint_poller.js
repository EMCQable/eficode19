const Note = require('./models/datam')

console.log('Loading function');

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
        resp.on('end', async () => {
            console.log(JSON.parse(data));
            const note = new Note(JSON.parse(data))
            await note.save()
        });

    }).on("error", (err) => {
        console.log("Error: " + err.message);
    });
};
