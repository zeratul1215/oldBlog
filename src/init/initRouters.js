const userRoute = require("../routes/usersRouter");

const initRoute = (app) => {
    app.use('/api/v1/users',userRoute);
}

module.exports = initRoute;