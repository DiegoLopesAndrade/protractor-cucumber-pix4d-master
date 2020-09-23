var reporter = require('cucumberjs-allure-reporter');

reporter.config(
   //targetDir:'./allure-results/'
   { targetDir : './Reports'}
);
module.exports = reporter;