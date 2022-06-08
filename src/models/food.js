'use strict';

const Food = (sequelize, DataTypes) => sequelize.define('food',{
    order:{
        type: DataTypes.STRING,
        allowNull: false
    },
    orderPlace:{
        type: DataTypes.STRING,
        allowNull: false
    },
    orderPrice:{
        type: DataTypes.INTEGER
    }
});

module.exports = Food;