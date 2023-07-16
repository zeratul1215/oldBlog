const sequelize = require('../db/sequelize');
const {DataTypes} = require('sequelize');

const Comment = sequelize.define('comment',{
    body:{
        type:DataTypes.TEXT,
        allowNull:false
    }
});

module.exports = Comment;