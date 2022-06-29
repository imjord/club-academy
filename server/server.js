const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const route = require('./routes/index');
const clubRoute = require('./routes/club');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session');
const login = require('./routes/login');





// middleware
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));
require('./config/passport')(passport);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// express session 
app.use(
    session({
        secret: 'secret',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 3600000,
            secure: false
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.get('/', (req,res) => {
    console.log(req.session);
    res.send('hello');

})

// routes

app.use('/users',  route);
app.use('/clubs',  clubRoute);
app.use('/login', login);
app.use(function(err, req, res, next) {
    console.log(err);
});


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
});