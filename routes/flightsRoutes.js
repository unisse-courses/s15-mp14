const router = require('express').Router();

const flightsController = require('../controller/flightsController');

router.post('/deleteAll', flightsController.deleteAll);

router.post('/deleteFlight',flightsController.deleteone);

router.post('/updateFlight',flightsController.updateFlight);

router.post('/searchFlight',flightsController.getFlight);

router.post('/addFlight', flightsController.createFlight);

router.get('/CreateFlights', flightsController.AddForm);

router.get('/admin-home',flightsController.Home);

router.get('/admin-table', flightsController.flightList);

router.get('/EditFlights', flightsController.editForm);

module.exports = router;