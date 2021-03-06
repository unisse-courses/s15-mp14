const router = require('express').Router();
const { isPrivate } = require('../middlewares/checkSession');

router.get('/', isPrivate, (req, res) => {
  if(req.session.prov == true)
  res.render('Provider-Home' );
  else if (req.session.prov == false)
  res.render('client-home');
});

module.exports = router;
