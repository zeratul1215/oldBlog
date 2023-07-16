const dbConnection = require('../db/connection');
const sequelize = require('../db/sequelize');

const User = require('../models/user');
const Article = require('../models/article');
const Comment = require('../models/comment');
const Tag = require('../models/tag');


//hasMany: one to many
//belongsToMany: many to many
const initRelation = () =>{
    //user and article
    User.hasMany(Article,{
        onDelete:'CASCADE'
    });
    Article.belongsTo(User);

    //user and comments
    User.hasMany(Comment,{
        onDelete:'CASCADE'
    });
    Comment.belongsTo(User);

    //user and article (like)
    User.belongsToMany(Article,{
        through:'Favorites',
        uniqueKey:false,
        timestamps:false
    });
    Article.belongsToMany(User,{
        through:'Favorites',
        uniqueKey:false,
        timestamps:false
    });

    //user and user: (following)
    User.belongsToMany(User,{
        through:'Follow',
        timestamps:false,
        as:'followers'
    });


    //article and tag
    Article.belongsToMany(Tag,{
        through:'TagList',
        uniqueKey:false,
        timestamps:false
    });
    Tag.belongsToMany(Article,{
        through:'TagList',
        uniqueKey:false,
        timestamps:false
    });
}

const initDB = async()=>{

    //dbConnection
    await dbConnection();
    
    //init the model relationship
    await initRelation();

    //move the relationship into the database
    await sequelize.sync({alter:true});

}

module.exports = initDB;