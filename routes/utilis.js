const fs = require('fs').promises;
const path = require('path');

const FILE_PATH = path.resolve(__dirname, '../src/data');

const writeFile = async (fileName, output) => {
  const saveFilePath = path.resolve(FILE_PATH, fileName);
  return await fs.writeFile(saveFilePath, JSON.stringify(output, null, 2));
};

const readFile = async fileName =>
  fs
    .readFile(`${FILE_PATH}/${fileName}`)
    .then(res => JSON.parse(res.toString()));

module.exports = { writeFile, readFile };