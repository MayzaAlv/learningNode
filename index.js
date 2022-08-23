const fs = require("fs");

function catchLinks(data) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResult = [];
  let temp;

  while ((temp = regex.exec(data)) !== null) {
    arrayResult.push({ [temp[1]]: temp[2] });
  }

  return arrayResult.length === 0 ? "Without links" : arrayResult;
}

function error(err) {
  throw new Error(chalk.red(err.code));
}

async function catchFile(path) {
  try {
    const data = await fs.promises.readFile(path, "utf-8");
    return catchLinks(data);
  } catch (err) {
    error(err);
  }
}

module.exports = catchFile;
