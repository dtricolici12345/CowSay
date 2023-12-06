const myInformation = require('./information');
const cowsay = require('cowsay');
const message = `Hello!My name is ${myInformation.name}. I am from campus ${myInformation.campus}`;
console.log(cowsay.say({ text: message }));