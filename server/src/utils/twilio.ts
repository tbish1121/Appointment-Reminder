const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.NUMBER;
const client = require('twilio')(accountSid, authToken);

interface Props {
    name: string,
    office: string,
    date: string
    number: string
}

interface Message {
    sid: string
}



exports.sendMessage = ({ name, office, date }: any) => {
    client.messages
        .create({
            body: `An appointment named ${name}, at the office of ${office} has been scheduled for ${date}`,
            from: `${twilioNumber}`,
            to: `${process.env.MYNUMBER}`
        })
        .then((message: Message) => console.log(message.sid));
}
