const userInformation = require('./information');
const cowsay = require("cowsay");
const { userName, campusName } = require('./information');
console . log ( cowsay . say ( { 
    text : (`my name is ${userName} my campus is ${campusName}`) 
} ) );