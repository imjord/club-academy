const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const route = require('./routes/index');
const clubRoute = require('./routes/club');
const cors = require('cors');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


// test route
app.get('/', (req,res) => {
    res.send('hello mysql');
});

app.use('/users', route);
app.use('/clubs', clubRoute);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});