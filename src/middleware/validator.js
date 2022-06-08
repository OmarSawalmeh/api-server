'use strict';

function validator(req, res, next){

   let regxCheck = /^[a-zA-Z]+$/;

    if(regxCheck.test(req.query.name)){
        req.name = req.query.name;
        next();
    }
    else if(req.query.name === ""){
        req.query.name = "";
        next("The Name Is Required sould use a valid name.")
    }
    else if (!regxCheck.test(req.query.name)){
        req.query.name = "This name is not allowed.";
        next("The Name Is Should Be a String and valid name. Can not use a numbers or any special character to define the name.");
    }
}

module.exports = validator;