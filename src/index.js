let fs = require("fs");
let path = require("path");
let url = require("url");

const validatePathExist = (Myroute) =>{
  if(Myroute){
    return true;
  }else{
    return false;
  };
};

const validatePathAbsolute = (Myroute) =>{
  return path.isAbsolute(Myroute);
};

module.exports ={
  validatePathExist: validatePathExist,
  validatePathAbsolute: validatePathAbsolute
};
