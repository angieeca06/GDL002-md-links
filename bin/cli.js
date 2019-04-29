#!/usr/bin/env node

//Grab provided args
const mdLinks = require('../src/validatePath.js')
const [,, ... args] = process.argv

//Print hello provided argvs
console.log(`Hello ${args}`)