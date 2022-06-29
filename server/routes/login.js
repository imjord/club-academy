

const router = require('express').Router();

const passport = require('passport');


router.post('/', passport.authenticate('local', {
    successRedirect: '/homepage',
    failureRedirect: '/login'
  }) )






module.exports = router;