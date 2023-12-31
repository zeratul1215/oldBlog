const errorMiddleware = (error,req,res,next) => {

    const status = error.status || 500;
    const message = error.message || 'server error';
    const errors = error.errors || 'server is wrong';

    res.status(status).json({
        code:0,
        message,
        errors
    });
}

module.exports = errorMiddleware;