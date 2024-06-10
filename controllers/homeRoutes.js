const router = require('express').Router();
const { User } = require('../models');

router.get('/', async ( req, res ) => {     // route to homepage
    res.render('homepage')
});

router.get('/dashboard', (req, res) => {    // route to dashboard
    // add feature so that user needs to login before the dashboard 
    res.render('dashboard');
})

router.get('/login', (req, res) => {        // route to login
    // route the user to dashboard if already logged in
    res.render('login');
  });


module.exports = router;