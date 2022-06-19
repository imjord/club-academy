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
                return res.status(401).send(info.message);
            }
            req.logIn(user, function (err) {
                if (err) {
                    return next(err);
                }
                return res.status(200).send(user);
            });
        }   )(req, res, next);

  
    

},
}


module.exports = UserController;