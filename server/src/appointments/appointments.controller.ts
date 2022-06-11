import {Request, Response} from 'express';
const prisma = require('../config/db.config')

//Get all appointments
exports.getAll = async(req: Request, res: Response) => {
    const appointments = await prisma.appointment.findMany();
    res.send(appointments);
}

//Create an appointment
exports.create = async(req:Request, res: Response) => {
    const {name, office, date} = req.body;

    const appointment = await prisma.appointment.create({
        data: {
            name: name,
            office: office,
            date: date
        }
    })

    res.json(appointment);
}
