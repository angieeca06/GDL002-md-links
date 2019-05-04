#!/usr/bin/env node

const Myroute = process.argv[2];
const mdLinks = require('../src/validatePath.js');
// const resultReadFile  = mdLinks(Myroute, null);
const path = require('path');
const chalk = require('chalk');
const fetch = require('node-fetch');

mdLinks.checkIfTheFileExistInADirectory(Myroute);
mdLinks.readFileMd(Myroute);
// console.log(Myroute);

// resultReadFile
//     .then(
//         (data)=> { 
//             const linkArray = parseLinks(data); //modifiq aqui 
//             const objArray = linkArray.map(extractData); // modifiq aquí 
//             console.log(objArray);
//         }
//     ).catch(
//         (err)=> { 
//             console.error(err);
//         }
//     );

// const parseLinks = (data) => {
//     const regExp = /\[(.+)\]\((.+)\)/g;
//     const matchLinks = data.match(regExp);
//     return matchLinks;
// };

// const extractData = (Myroute) => {
//     const regExp = /\[(.+)\]\((.+)\)/g;
//     const obj = {};
//     const groups = regExp.exec(Myroute);  // matching groups 
//     // 0 [Node.js](https://nodejs.org/en/)'
//     // 1 Node.js
//     // 2 https://nodejs.org/en/
//     obj.text = groups[1];
//     obj.link = groups[2];
//     return obj;
// };


// console.log(extractData(Myroute));
// console.log(`Hello ${Myroute}`);