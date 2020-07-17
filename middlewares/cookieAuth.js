    function cookieAuth(req, res, next){

        if(req.session.user || req.cookies.recordame){
            
        req.session.user = req.session.email ? req.session.user : req.cookies.recordame
        }
        next()
    }


    module.exports = cookieAuth;