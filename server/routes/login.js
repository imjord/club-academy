

const router = require('express').Router();

const passport = require('passport');


router.post('/', passport.authenticate('local', {
    successRedirect: 'http://localhost:3000/homepage',
    failureRedirect: 'http://localhost:3000/login'
  }) )






module.exports = router;