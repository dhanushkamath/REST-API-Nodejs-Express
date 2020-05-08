// usually we use var express = require('express')
// But we are using the latest ES6 syntax and babel will transpile the code.
// The babel transpile step happens when we execute 'node start' as we have mentioned
// this in the command for 'start' in package.json (check there)
// You will notice 'nodemon' being used. This lets us leave the server running while we are making changes
// to our code. Once we save the changes, the server restarts automatically - so it instantly lets us know if our code is working or not
// without having to manually restart it every time.
// We provide babel configuration in a file that WE CREATE called .babelrc 
// Always create .babelrc first.

// ALSO EXPLORE THE FRAMEWORK - KOA.JS - BUILT BY THE SAME TEAM BEHIND EXPRESS.
// Also explore Swagger.io, Loopback.io. 
// The author recommends Loopback for full fledge API development with tokens for security measures.


import express from 'express';

//import our routes
import routes from './src/routes/crmRoutes';

import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// bodyparser - to parse the incoming request.
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json())

// Pass the express app object to the routes we have defined.
routes(app);

// Serving static files - images
// Navigate to http://localhost:4000/sky.jpeg in the browser
app.use(express.static('./public'))


app.get('/', (req, res) => {
    res.send(`Node and express server running on port: ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})