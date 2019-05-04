let fs = require("fs");
const fetch = require("node-fetch");
const chalk = require("chalk");
const markdownLinkExtractor = require("markdown-link-extractor");

console.log("Inicio");

const checkIfTheFileExistInADirectory = (FileDirectory) => {
    return new Promise((resolve, reject) => {
      fs.access(FileDirectory, fs.constants.F_OK | fs.constants.W_OK, (err) => {
        if(err){
          console.error(chalk.red(
             `✖ `) + chalk.magenta( ` ${FileDirectory} `) + chalk.red(` ${err.code === 'ENOENT' ? 'does not exist' : 'is read-only'}`));
          reject(err);
          return;
        }else{
          console.log(chalk.green(`✔ `) + chalk.magenta(`${FileDirectory} `) + chalk.blue(`"The file exixt in a directory"`));
          resolve(true);
          return FileDirectory;
        }
      });
  });
  };

const readFileMd = (Myroute) => {
  // return new Promise((resolve, reject) => {
    fs.readFile(Myroute.toString(),'utf8', (err, data)=>{
      if (err){
        throw err;
      }else{
        const arrayLinks = markdownLinkExtractor(data);
        arrayLinks.forEach( function(link){
          const checkStatus = (res) =>{
            // console.log(res);
            if(res.ok){
              return console.log(chalk.green(`✔ `), res.statusText, chalk.green(link));
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
  checkIfTheFileExistInADirectory
};
