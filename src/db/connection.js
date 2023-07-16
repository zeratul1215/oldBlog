const sequelize = require('./sequelize');

const dbConnection = async ()=>{
    try {
        await sequelize.authenticate();
        console.log("connection successful");
    }
    catch(error){
        console.error('connection failed', error);
    }
}

module.exports = dbConnection;