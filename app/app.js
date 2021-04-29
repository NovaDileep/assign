function wishes(h){
var chalk=require("chalk");
//global.console.log(`${h} good morning`);
console.log(`${h} ${chalk.red('good')} morning`);
}

wishes("hi");

//module.exports.greet=wishes;