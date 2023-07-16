require('dotenv').config({path:'.env'});
const express = require("express");
const initDB = require('./src/init/initDB');
const initServer = require('./src/init/initServer');
const initRoute = require('./src/init/initRouters');
const cors = require('cors');
const morgan = require('morgan');
const noMatchMiddleware = require('./src/middleWare/404.middleWare copy');
const errorMiddleware = require('./src/middleWare/error.middleWare');
const app = express();

app.use(cors({credentials:true,origin:true}));//cors
app.use(express.json());//parse json
app.use(morgan('tiny'));//HTTP request logger

//init the router
initRoute(app);

//404
app.use(noMatchMiddleware);

//all errors
app.use(errorMiddleware);

const main = async () => {
    //start the database
    await initDB();
    //start the node server
    initServer(app);
    //
}

main();