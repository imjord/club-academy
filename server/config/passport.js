const User = require('../models/User');
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;

module.exports = function(passport){

    passport.use(
        new localStrategy((username, password, done) => {
            User.findOne({username: username}, (err, user) => {
                if(err) throw err;
                if(!user) return done(null, false);
                bcrypt.compare(password, user.password, (err, result) => {
                    if(err) throw err;
                    if(result === true){
                        return done(null, user);
                    } else {
                        return done(null, false)
                    }
                })
            })
        })
    )
        // stores cookie inside browser  
        // take user from local strategy 
    passport.serializeUser((user,cb) => {
        cb(null, user.id)
    })
    // takes cookie and returns user from it
    passport.deserializeUser((id, cb) => {
        User.findOne({_id: id}, (err, user) => {
            const userInfo = {
                username: user.username,
                avatar: user.avatar,
                msg: "You are currently in a session"
            }
            cb(err, userInfo);
        })
    })

}