const { getAllClubs, createNewClub, getClubById,deleteClub } = require('../controllers/ClubController');
const {ensureAuthenticated} = require('../config/auth');

const router = require('express').Router();
    // get clubs

 
    
    router.route('/').get(getAllClubs).post(createNewClub);
    // // get single club
    router.route('/:id').get(getClubById);
 
   
    // // delete
    router.route('/:id').delete(deleteClub);

module.exports = router;