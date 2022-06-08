'use strict';

const express = require('express');
const app = express();

// Require ErrorHandlers
const handle404 = require('./error-handlers/404');
const handele500 = require('./error-handlers/500');
// Require Middleware
const logger = require('./middleware/logger');
const validator = require('./middleware/validator');
// Require Router
const clotheRouter = require('./routes/clothes');
const foodRouter = require('./routes/food');


app.get('/', (req, res)=>{
    res.send("You Will Never Walk Alone Liverpool");
});


// Global Middleware
app.use(logger);
app.use(validator);
app.use(express.json());

// Use Routes
app.use(clotheRouter);
app.use(foodRouter);

// Handle error
// 404
app.use('*', handle404);
// 500
app.use(handele500);


function start(PORT){
    app.listen(PORT, ()=>{
        console.log(`Server On Port ${PORT}`);
    });
}

module.exports = {
    server: app,
    start: start
}