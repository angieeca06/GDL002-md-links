#!/usr/bin/env node

const Myroute = process.argv[2];
const mdLinks = require('../src/validatePath.js');

mdLinks.checkIfTheFileExistInADirectory(Myroute);
mdLinks.readFileMd(Myroute);