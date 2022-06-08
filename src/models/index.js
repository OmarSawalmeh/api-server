'use strict';

require('dotenv').config();

// require both the Sequelize and Datatype  constructor from the sequelize package
const { Sequelize, DataTypes } = require('sequelize');

// Connects to our database depending on the URI as an environmental variable
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// We will configure our connection options for production
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  } : {};

// our connection object
// we are going to use this to connect to Postgres
let sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);


// Build A Schema
// Use OPP
const clothes = require('./clothes');
const food = require('./food');

let Clothes = clothes(sequelize, DataTypes);
let Food = food(sequelize, DataTypes);

const Collections = require('./collection-class');

let ClothesClass = new Collections(Clothes);
let FoodClass = new Collections(Food);


module.exports = {
    db: sequelize,
    Clothes: ClothesClass,
    Food: FoodClass
}
