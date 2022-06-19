const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const route = require('./routes/index');
const clubRoute = require('./routes/club');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const login = require('./routes/login');
require('./config/passport')(passport);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// express session 
app.use(
    session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    })
);

app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/users', route);
app.use('/clubs', clubRoute);
app.use('/login', login);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});