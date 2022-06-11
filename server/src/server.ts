import express, { Express, Request, Response } from 'express';
const app = express();
const dotenv = require('dotenv').config();

app.use('/', (res: Response, req: Request) => {
    res.send("Hello");
})

const port = process.env.PORT

app.listen(port || 8080, () => {
    console.log(`Server running on port ${port}`)
})