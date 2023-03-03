const accountSid = 'AC2e7e19e85cd4c49dc85c3089034d035c';
const authToken = '7195c78dfe243b2b1456bcb875c1822d';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Hello from decodesofttecg',
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+918347763858'
    })
    .then(message => console.log(message.sid))
    .catch(err => console.error(err))