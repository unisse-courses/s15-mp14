const router = require('express').Router();
const { isPrivate } = require('../middlewares/checkSession');
const bookingController = require('../controller/bookingController');
router.get('/client-home', isPrivate, bookingController.flightList);

router.get('/client-table',isPrivate, bookingController.fillTable);
router.get('/Booking', isPrivate, bookingController.editForm);

router.post('/addUserFlights', bookingController.createBooking);
router.post('/searchBooking', bookingController.searchBooking);
router.post('/deleteAllBookings', bookingController.deleteAll);
router.post('/updateBooking', bookingController.updateBooking);
router.post('/deleteBooking', bookingController.deleteBooking);
module.exports = router;