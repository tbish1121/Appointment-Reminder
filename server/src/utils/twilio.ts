const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.NUMBER;
const client = require('twilio')(accountSid, authToken);


interface Message {
    sid: string
}


//Function for sending text when creating appt with info
exports.newApptMessage = ({ name, office, date }: any) => {
    client.messages
        .create({
            body: `An appointment named ${name}, at the office of ${office} has been scheduled for ${date}`,
            from: `${twilioNumber}`,
            to: `${process.env.MYNUMBER}`
        })
        .then((message: any) => console.log(message.sid));
}


//Function for sending text when deleting appt
exports.deleteApptMessage = ({ name, office, date }: any) => {
    client.messages
        .create({
            body: `An appointment named ${name}, at the office of ${office} on ${date} has been deleted.`,
            from: `${twilioNumber}`,
            to: `${process.env.MYNUMBER}`
        })
        .then((message: any) => console.log(message.sid));
}