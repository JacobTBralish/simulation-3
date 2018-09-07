require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
// const session = require('express-session');
const axios = require('axios');

const app = express();

// app.session(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//         maxAge: 1000 * 60 * 60 * 24 * 14
//     }
// }));

massive(process.env.CONNECTION_STRING).then(database => {
    console.log('Hooked up to your database bruhh.🤙')
    app.set('db', database);
}).catch(error => {console.log(error)
})

// const PORT = 4000;
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}.🏄`)
})