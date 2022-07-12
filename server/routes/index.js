const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/UserController');

const router = require('express').Router();


router.route('/').get(getAllUsers).post(createUser)
router.route("/:id").put(updateUser).delete(deleteUser);
router.get("/profile", (req,res) => {
    res.send(req.user);
})


module.exports = router; 