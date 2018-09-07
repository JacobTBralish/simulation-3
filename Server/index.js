require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const axios = require('axios');
// const bcrypt = require('bcrypt');
// const saltRounds = 12;

const app = express();

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}));
app.use(express.static(`${__dirname}/../build`));



app.post('/api/auth/register', (req, res) => {
    const db = app.get('db');
    const { username, password } = req.body;
        db.register_user([username, password]).then(newUser => {
            req.session.user = newUser;
            res.send(newUser)
        }).catch(error => {
            console.log(error, 'error with register');
            res.status(500).json({ message:'Something happened with registering you'})
    });
 
 });

app.post('/api/auth/login',(req, res) => {
    const db = app.get('db');
    const {username, password} = req.body;
    db.find_user([username]).then( users => {
        if (users.length) {
            bycrypt.compare(password, user[0].password).then(passwordsMatched => {

                if (passwordsMatched) {
                    req.session.user = { username: users[0].username };
                    res.json({ user:req.session.user});
                } else {
                    res.status(403).json({ message:'Wrong password' })
                }
            })
        } else {
            res.status(403).json({ message:'The user is not registered' })
        }
    });
});



// app.post('/api/auth/logout', (req, res) => {
//    const db = app.get('db');
//     const {username, password} = req.body;
//     db.find_user([username]).then( users =>
//   });
  



massive(process.env.CONNECTION_STRING).then(database => {
    console.log('Hooked up to your database bruhh.🤙')
    app.set('db', database);
}).catch(error => {console.log(error)
})

// const PORT = 4000;
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}.🏄`)
})