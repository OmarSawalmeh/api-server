'use strict';

const server = require('./src/server');
const { db } = require('./src/models/index');


require('dotenv').config();
const PORT = process.env.PORT || 3000;

db.sync().then(()=>{
    server.start(PORT);
}).catch(console.error());
