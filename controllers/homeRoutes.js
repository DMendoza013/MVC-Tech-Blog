const router = require('express').Router();
const { User } = require('../models');

router.get('/', async ( req, res ) => {
    res.render('homepage')
});

router.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
      res.redirect('/homepage');
      return;
    }
    res.render('login');
  });


module.exports = router;