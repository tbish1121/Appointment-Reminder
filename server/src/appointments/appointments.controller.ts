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

exports.update = async(req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const {name, office, date} = req.body
    const appointment = await prisma.appointment.update({
        where: {id: id},
        data: {
            name: name,
            office: office, 
            date: date
        }
    })
    res.json(appointment);
}

exports.delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const appointment = await prisma.appointment.delete({
        where: {id: id}
    });
    res.json(appointment);
}
