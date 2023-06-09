const dotenv = require('dotenv');
const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.set('views', __dirname + '/views'); // Set the path to the views folder

dotenv.config({path:'./config.env'})
require('./db/conn')
// const User = require('./model/userSchema')

app.use(express.json());

app.use(require('./router/auth'))

const PORT = process.env.PORT;


// Middleware
const middleware = (req, res, next) => {
    console.log('Hello Middleware');
    next();
}

 
// app.get('/about', (req, res) => {
//     res.send('Hello About');
// });

app.get('/contact', (req, res) => {
    // res.cookie("Test", 'xun');
    res.send('Hello Contact');
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
