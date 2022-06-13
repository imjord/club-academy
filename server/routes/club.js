const { getAllClubs, createNewClub, getClubById } = require('../controllers/ClubController');

const router = require('express').Router();
    // get clubs
    router.route('/').get(getAllClubs).post(createNewClub);
    // get single club
    router.route('/:id').get(getClubById);


module.exports = router;