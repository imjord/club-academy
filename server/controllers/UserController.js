const db = require('../db/connection');
const passport = require('passport');

const UserController = {
    getAllUsers(req,res){
        db.query('SELECT * FROM user', (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    }, 
    // GET A SINGLE USER
    getUser(req,res){
        db.query('SELECT * FROM user WHERE id = ?', [req.params.id], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    },
    createNewUser(req,res){
        db.query(`INSERT INTO user (username, email, password) VALUES (?,?,?)`, [req.body.username, req.body.email, req.body.password], (err, results) => {
          
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }

    })
    },
    // LOGIN
    login(req,res, next){
        passport.authenticate('local', function (err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                console.log(info)
                return res.status(401).send(info);
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                
                return res.redirect("/homepage");

            });
        }   )(req, res, next);
        // passport.authenticate('local', {failureRedirect: '/login'}), (req, res) => {
        //     res.redirect('/homepage');
        // }
    }


    
        // passport.authenticate('local', {
        //     successRedirect: 'http://localhost:3000/',
        //     failureRedirect: 'http://localhost:3000/login',
        //   })(req, res, next);
        
    
      

  
    

// },
}


module.exports = UserController;