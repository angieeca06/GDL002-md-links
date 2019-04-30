let fs = require("fs");
let path = require("path");

const directoryFileList = [];

console.log("Inicio");

const validatePathExistWithExtensionMd = (Myroute) =>{
  const extension = path.extname(Myroute);
  if(extension === ".md"){
    return true;
  }else{
    return false;
  };
};
// console.log(validatePathExistWithExtensionMd("README.md"));

const validatePathAbsolute = (Myroute) =>{
  return path.isAbsolute(Myroute);
};
//Relativa -> absoluta 
const transformRelativePath = (Myroute) =>{
  return path.resolve(Myroute);
};

const checkIfTheFileExistInADirectiry = (Myroute) => {
  return new Promise((resolve, reject) => {
    fs.access(Myroute,"utf-8", (err) => {
      return err ? reject(err) : resolve('exists');
    });
});
};
// checkIfTheFileExistInADirectiry("src/pruebaTest.md")
// .then(result => console.log(result))
// .catch(error => console.log('error', error));

const readFileMd = (Myroute) => {
  return new Promise((resolve, reject) => {
      fs.readFile(Myroute, "utf-8", (err, data) => {
        return err ? reject(err) : resolve(data);
      });
  });
};

const readDirectory = (Myroute) => {
  return new Promise((resolve, reject) => {
    fs.readdir(Myroute, 'utf8', (err, files) => {
      return err ? reject(err) : resolve(files);
    });
  });
};

const filterDirectoryMarkdownFiles = (files) => {
  files.forEach((element) => {
    if (path.extname(element) === '.md') {
      directoryFileList.push(element);
    }
    return directoryFileList;
  });
};

console.log("Final");

module.exports ={
  validatePathExistWithExtensionMd: validatePathExistWithExtensionMd,
  validatePathAbsolute: validatePathAbsolute,
  transformRelativePath: transformRelativePath,
  checkIfTheFileExistInADirectiry: checkIfTheFileExistInADirectiry,
  readFileMd: readFileMd,
  readDirectory: readDirectory,
  filterDirectoryMarkdownFiles: filterDirectoryMarkdownFiles
};
