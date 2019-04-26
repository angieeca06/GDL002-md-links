let fs = require("fs");
let path = require("path");

const validatePathExistWithExtensionMd = (Myroute) =>{
  const extension = path.extname(Myroute);
  if(extension === ".md"){
    return true;
  }else{
    return false;
  };
};

const validatePathAbsolute = (Myroute) =>{
  return path.isAbsolute(Myroute);
};
//Relativa -> absoluta 
const transformRelativePath = (Myroute) =>{
  return path.resolve(Myroute);
};

const checkIfTheFileExistInADirectiry = (Myroute) => {
  fs.access(Myroute, fs.constants.F_OK, err =>{
    console.log(err);
  });
};

function readFileMd(Myroute) {
  return new Promise((resolve, reject) => {
      fs.readFile(Myroute, "utf-8", (err, data) => {
          if (err) {
              reject(err);
          } else {
              resolve(data);
          }
      });
  });
};

module.exports ={
  validatePathExistWithExtensionMd: validatePathExistWithExtensionMd,
  validatePathAbsolute: validatePathAbsolute,
  transformRelativePath: transformRelativePath,
  checkIfTheFileExistInADirectiry: checkIfTheFileExistInADirectiry,
  readFileMd: readFileMd
};
