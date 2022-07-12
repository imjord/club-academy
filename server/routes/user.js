const passport = require('passport');
const User = require('../models/User');

const router = require('express').Router();


router.post("/login", (req,res, next) =>{
    passport.authenticate("local", (err, user, info) => {
        if(err) throw err;
        if(!user) res.send("no user exists");
        else {
            req.logIn(user, err => {
                if(err) throw err;
                res.send("Succesfully authenticated");
                console.log(req.user);
                // cookie
                // res.cookie("user", req.user);


            })
        }
    })(req,res,next);
})

router.post("/register",(req,res) => {
    User.findOne({username: req.body.username}, (err, doc) => {
        if(err) throw err;
        if(doc) res.send("Username already exists");
        if(!doc){
            const newUser = new User({
                username: req.body.username,
                password: req.body.password
            })

            newUser.save().then(user => {
                res.send("User Created");
            })
        }
    })
})

// logout 
router.get("/logout", (req,res) => {
    req.session.destroy(err => {
        if(err) throw err;
        res.send("Succesfully logged out");
    }
    )
}
)


module.exports = router;