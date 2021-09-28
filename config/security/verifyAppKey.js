require("dotenv-safe").config();

module.exports = function verifyAppKey(req, res, next){

     /*
        #swagger.ignore = true
    */

    const appkey = req.query.appkey

    if (!appkey) return res.status(401).json({ auth: false, message: 'No AppKey provided.' });
    
    if (appkey == process.env.KEYAPIGATEWAY) {
        next();
    } else {
        return res.status(401).json({ auth: false, message: 'AppKey invalid.' });
    }

}