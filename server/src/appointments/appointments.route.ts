module.exports = (app: any) => {
    const appointment = require('./appointments.controller');
    var router = require("express").Router();

    //Get all users
    router.get('/', appointment.getAll);
    router.post('/', appointment.create);

    app.use('/api/appointments', router);
}