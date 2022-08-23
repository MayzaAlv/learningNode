const chalk = require("chalk");
const catchFile = require(".");
const check = require("./http-check.js");

const path = process.argv;

async function processText(pathFile) {
  const result = await catchFile(pathFile[2]);
  if (pathFile[3] === "check") {
    console.log(chalk.green("list of checked links"), await check(result));
  } else {
    console.log(chalk.yellow("list of links"), result);
  }
}

processText(path);
