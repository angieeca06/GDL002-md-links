let fs = require("fs");
let path = require("path");
console.log("Inicio");
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
  return new Promise((resolve, reject) => {
    fs.access(Myroute,"utf-8", (err, data) => {
      if(err){
        reject(err);
      }else{
        resolve(data);
      }
    });
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


console.log("Final");
module.exports ={
  validatePathExistWithExtensionMd: validatePathExistWithExtensionMd,
  validatePathAbsolute: validatePathAbsolute,
  transformRelativePath: transformRelativePath,
  checkIfTheFileExistInADirectiry: checkIfTheFileExistInADirectiry,
  readFileMd: readFileMd
};
