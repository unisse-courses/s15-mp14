const router = require('express').Router();
const { isPrivate } = require('../middlewares/checkSession');
const bookingController = require('../controller/bookingController');
router.get('/client-home', isPrivate, bookingController.flightList);

router.get('/client-table',isPrivate, bookingController.fillTable);


router.post('/addUserFlights', bookingController.createBooking);

router.post('/deleteAllBookings', bookingController.deleteAll);
module.exports = router;