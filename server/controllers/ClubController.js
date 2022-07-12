const Club = require('../models/Club');


const ClubController = {
    // get all clubs 
    getAllClubs(req,res){
        Club.find().then(club => {
            res.json(club)
        }
        ).catch(err =>{
            if(err){
                console.log(err)
            }
        }
        )
    },
    // create a new club
    createClub(req,res){
        const newClub = new Club({
            name: req.body.name,
            description: req.body.description
        })
        newClub.save().then(
            club => {
                res.json(club)
            }
        ).catch(err => {
            if(err){
                console.log(err)
            }
        }
        )
    }
}


module.exports = ClubController;