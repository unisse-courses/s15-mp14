const router = require('express').Router();

router.get('/client-home', (req,res) =>{
    res.render('client-home');
})