const { login } = require('../controllers/UserController');

const router = require('express').Router();



router.route('/').post(login);






module.exports = router;