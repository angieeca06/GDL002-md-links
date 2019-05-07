let fs = require("fs");
let path = require("path");
const fetch = require("node-fetch");
const chalk = require("chalk");
const markdownLinkExtractor = require("markdown-link-extractor");

const validatePathAbsolute = (Myroute) =>{
  if(path.isAbsolute(Myroute) === false){
    transformRelativePath(Myroute);
    console.log(chalk.green("Your relative path was converted to absolute"));
    return false;
  }else{
    path.isAbsolute(Myroute);
    console.log(chalk.green("Is a absolute path"));
    return true;
  }
};
//Relativa -> absoluta 
const transformRelativePath = (Myroute) =>{
  return path.resolve(Myroute);
};

const checkIfTheFileExistInADirectory = (FileDirectory) => {
    return new Promise((resolve, reject) => {
      fs.access(FileDirectory, fs.constants.F_OK | fs.constants.W_OK, (err) => {
        if(err){
          console.error(chalk.red(chalk.magenta( ` ${FileDirectory} `) + chalk.red(` ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`)));
          reject(err);
          return false;
        }else{
          console.log(chalk.magenta(`${FileDirectory} `) + chalk.blue(`"The file exixt in a directory"`));
          resolve(true);
          return FileDirectory;
        }
      });
  });
  };

const readFileMd = (Myroute) => {
  console.log("readFileMd");
  // return new Promise((resolve, reject) => {
    fs.readFile(Myroute.toString(),'utf8', (err, data)=>{
      if (err){
        return false;
      }else{
        const arrayLinks = markdownLinkExtractor(data);
        arrayLinks.forEach( function(link){
          const checkStatus = (res) =>{
            // console.log(res);
            if(res.ok){
              console.log(chalk.green(`✔ `), res.statusText, chalk.green(link));
              return true;
            }
          };
          fetch(link)
            .then(checkStatus)
            .catch(res => console.log(chalk.red(`✖ `), "Error" , chalk.red(link))
            );
        });
      };
    });
};

module.exports = {
  readFileMd,
  checkIfTheFileExistInADirectory,
  validatePathAbsolute,
  transformRelativePath
};
