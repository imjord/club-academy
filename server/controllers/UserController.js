const db = require('../db/connection');


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
  
    

}


module.exports = UserController;