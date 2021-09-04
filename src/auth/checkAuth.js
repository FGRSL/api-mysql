module.exports = async (req, res, next) => {
    if(req.headers.authorization === "123"){
        return next();
    }
    res.status(401).json({message: "Unauthorized"});
}