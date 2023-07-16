const initServer = (app) => {
    const PORT = process.env.PORT || 8080;
    const HOST = process.env.HOST || `localhost`;
    app.listen(PORT,()=>{
        console.log(`server is running on ${HOST}:${PORT}`);
    }).on('error',(error) =>{
        console.log(error);
    });
}

module.exports = initServer;