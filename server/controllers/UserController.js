const User = require('../models/User');


const UserController = {

    // get all users 
    getAllUsers(req,res){
        User.find().then(user => {
            res.json(user)
        }).catch(err =>{
            if(err){
                console.log(err)
            }
        })
    },

    // create a new user 
    createUser(req,res){
        const newUser = new User({
            username: req.body.username, 
            password: req.body.password
        })

        newUser.save().then(
            user => {
                res.json(user)
            }
        ).catch(err => {
            if(err){
                console.log(err)
            }
        })
    }, 

    // update a user
    updateUser(req,res){
        User.findOneAndUpdate({_id: req.params.id}, {$set: {username: req.body.username, password: req.body.password}}, {new: true}).then(
            user => {
                res.json(user)
            }
        ).catch(err => {
            if(err){
                console.log(err)
            }
        })
    },

    // delete a user 
    deleteUser(req,res){
        User.findOneAndDelete({_id: req.params.id}).then(
            user => {
                res.json(user)
            }
        ).catch(err => {
            if(err)throw err;
        })


    },
    // updateUser(req,res){
    //     User.findByIdAndUpdate({_id: req.params.id}, {$set: {username: req.body.username, password: req.body.password}}, {new: true}, (err, docs) =>{
    //         if(err) throw err;
    //         else {
    //             console.log("Updated user: ", docs);
    //         }
    //     })
    // }


}

module.exports = UserController;