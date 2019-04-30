#!/usr/bin/env node

const Myroute = process.argv[2]
const mdLinks = require('../src/validatePath.js')


//Print hello provided argvs
console.log(`Hello ${Myroute}`)