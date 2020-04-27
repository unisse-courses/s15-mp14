const router = require('express').Router();
const { isPrivate } = require('../middlewares/checkSession');

const flightsController = require('../controller/flightsController');

router.post('/deleteAll', flightsController.deleteAll);

router.post('/deleteFlight',flightsController.deleteone);

router.post('/updateFlight',flightsController.updateFlight);

router.post('/searchFlight',flightsController.getFlight);

router.post('/addFlight', flightsController.createFlight);

router.get('/CreateFlights', isPrivate,flightsController.AddForm);

router.get('/Provider-Home',isPrivate,flightsController.Home);

router.get('/ListofFlights', isPrivate,flightsController.flightList);

router.get('/EditFlights', isPrivate,flightsController.editForm);

module.exports = router;