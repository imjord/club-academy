const db = require('../db/connection');


const ClubController = {
    // get all clubs
    getAllClubs(req,res){
        db.query('SELECT * FROM club', (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    },
    // create a club 
    createNewClub(req,res){
        db.query('INSERT INTO club (name, description) VALUES (?,?)', [req.body.name, req.body.description], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    },
    // create a club member 
    createNewClubMember(req,res){
        db.query('INSERT INTO club_member (club_id, user_id) VALUES (?,?)', [req.body.club_id, req.body.user_id], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    },
    // get a club by id
    getClubById(req,res){
        db.query('SELECT * FROM club WHERE club_id = ?', [req.params.id], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    },
    // get all club members by club id
    getAllClubMembersByClubId(req,res){
        db.query('SELECT * FROM club_member WHERE club_id = ?', [req.params.id], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    },
    // get all club members by user id
    getAllClubMembersByUserId(req,res){
        db.query('SELECT * FROM club_member WHERE user_id = ?', [req.params.id], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    },
    // update a club
    updateClub(req,res){
        db.query('UPDATE club SET name = ?, description = ? WHERE club_id = ?', [req.body.name, req.body.description, req.params.id], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    },
    // delete a club
    deleteClub(req,res){
        db.query('DELETE FROM club WHERE club_id = ?', [req.params.id], (err, results) => {
            if (err) {
                console.log(err);
                res.status(500).send(err);
            } else {
                res.status(200).send(results);
            }
        })
    }


}

module.exports = ClubController;