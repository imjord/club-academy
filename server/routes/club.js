const { getAllClubs, createClub } = require('../controllers/ClubController');

const router = require('express').Router();


router.route('/').get(getAllClubs).post(createClub)


module.exports = router;