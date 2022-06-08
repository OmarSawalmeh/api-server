'use strict';

module.exports = (error, req, res, next)=>{
    if(req.query.name ==""){
        res.status(500).send({
            Code: 500,
            Route: req.path,
            Message: `Server Error: Page Name [${req.query.name}] not allowed, You must put a valid name`

        })
    }
    else if(req.query.name =="This name is not allowed"){
        res.status(500).send({
            Code: 500,
            Route: req.path,
            Message: `Server Error: This Page Name not Found, You must put a valid name Withot numbers or any special character`

        })
    }
    else{
        res.status(500).send({
            Code: 500,
            Route: req.path,
            Message: `Server Error: ${error.message}`
        })
    }

};