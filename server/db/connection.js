const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'clubacademy'
},
console.log(`connected to mysql database`));




module.exports = connection;