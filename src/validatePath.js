let fs = require("fs");
let path = require("path");

// const directoryFileList = [];

console.log("Inicio");

// const validatePathExistWithExtensionMd = (Myroute) =>{
//   const extension = path.extname(Myroute);
//   if(extension === ".md"){
//     return true;
//   }else{
//     return false;
//   };
// };
// // console.log(validatePathExistWithExtensionMd("README.md"));

// const validatePathAbsolute = (Myroute) =>{
//   return path.isAbsolute(Myroute);
// };
// //Relativa -> absoluta 
// const transformRelativePath = (Myroute) =>{
//   return path.resolve(Myroute);
// };

// const checkIfTheFileExistInADirectiry = (Myroute) => {
//   return new Promise((resolve, reject) => {
//     fs.access(Myroute,"utf-8", (err) => {
//       return err ? reject(err) : resolve('exists');
//     });
// });
// };



// const readDirectory = (Myroute) => {
//   return new Promise((resolve, reject) => {
//     fs.readdir(Myroute, (err, files) => {
//       if(err){
//         reject(err);
//         return;
//       }
//       resolve(true);
//       console.log(files);
//     });
//   });
// };
// console.log(readFileMd("./"));
// const filterDirectoryMarkdownFiles = (files) => {
//   files.forEach((element) => {
//     if (path.extname(element) === '.md') {
//       directoryFileList.push(element);
//     }
//     return directoryFileList;
//   });
// };

// console.log("Final");

module.exports = (Myroute, options) =>{
  // const readFileMd = (Myroute, options) => {
    return new Promise((resolve, reject) => {
      fs.readFile(Myroute, function(err, data){
        if (err){
          return reject(err);
        }
        resolve(data.toString());
        // console.log(data.toString());
      });
    });
  };
  // validatePathExistWithExtensionMd(Myroute),
  // validatePathAbsolute(Myroute),
  // transformRelativePath(Myroute),
  // checkIfTheFileExistInADirectiry(Myroute),
  // readFileMd(Myroute)
  // readDirectory(Myroute)
// };
