const { getAllUsers, createNewUser, getUser } = require('../controllers/UserController');

const router = require('express').Router();



router.route('/').get(getAllUsers).post(createNewUser);
router.route('/:id').get(getUser);






module.exports = router;