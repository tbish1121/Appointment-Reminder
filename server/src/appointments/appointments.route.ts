module.exports = (app: any) => {
    const appointment = require('./appointments.controller');
    var router = require("express").Router();

    //Get all appts
    router.get('/', appointment.getAll);

    //Create appt
    router.post('/', appointment.create);

    //Update appt
    router.put('/:id', appointment.update);
    
    //Delete appt
    router.delete('/:id', appointment.delete)

    app.use('/api/appointments', router);
}