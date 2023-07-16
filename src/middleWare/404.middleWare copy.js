const HttpException = require("../exceptions/http.exception");

const noMatchMiddleware = (req,res,next) => {
    const noMatchError = new HttpException(404,'path not match','router url not found');
    //pass the error to the error middle ware
    next(noMatchError);
}

module.exports = noMatchMiddleware;