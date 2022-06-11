import express, { Express, Request, Response } from 'express';
const app = express();
const dotenv = require('dotenv').config();


app.use(express.json());
app.get('/', (res: Response, req: Request) => {
    res.send("Hello")
})

const port = process.env.PORT
require('./appointments/appointments.route')(app);

app.listen(port || 8080, () => {
    console.log(`Server running on port ${port}`)
})