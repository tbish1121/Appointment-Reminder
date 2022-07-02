import { Request, Response } from 'express';
const prisma = require('../config/db.config')
const twilio = require('../utils/twilio');

//Interface for appointment data
interface Appt {
    name: string,
    office: string,
    date: string
}


//Get all appointments
exports.getAll = async (req: Request, res: Response) => {
    const appointments = await prisma.appointment.findMany();
    res.send(appointments);
}

//Create an appointment
exports.create = async (req: Request, res: Response) => {


    const appt: Appt = req.body;
    const { name, office, date } = appt;
    twilio.sendMessage({ name, office, date })

    const appointment = await prisma.appointment.create({
        data: {
            name: appt.name,
            office: appt.office,
            date: appt.date
        }
    })

    res.json(appointment);

}


exports.delete = async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id);

    const appointment = await prisma.appointment.delete({
        where: { id: id }
    });
    res.json(appointment);
}

exports.update = async (req: Request, res: Response) => {

    const apptData: Appt = req.body;
    const id: number = parseInt(req.params.id);
    const updatedAppointment = await prisma.appointment.update({
        where: { id: id },
        data: {
            name: apptData.name,
            office: apptData.office,
            date: apptData.date
        }
    })

    res.send(updatedAppointment);
}