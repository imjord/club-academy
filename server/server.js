const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const db = require('./config/connection');
const routes = require('./routes/index');
const session = require('express-session');
const userRoutes = require('./routes/user');
const passport = require("passport");
const clubRoutes = require('./routes/club');
const cookieParser = require("cookie-parser");


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
app.use(session({
    secret: "mysecret",
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}))
app.use(cookieParser("mysecret"));

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);


app.use("/api", userRoutes);
app.use("/api/clubs", clubRoutes);
app.use("/api/users", routes);


db.once('open', () => {
    console.log('db connected to mongodb')
    app.listen(PORT, () => {
        console.log('server live');
    })
    
})
