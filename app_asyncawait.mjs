import { join } from 'path';
import {default as fsWithCallbacks} from 'fs'
const fs = fsWithCallbacks.promises

const directoryPath = process.argv[2]; 
const searchKey = process.argv[3];

async function rreaddir (dir, allFiles = []) {
  const files = (await fs.readdir(dir)).map(f => join(dir, f))
  allFiles.push(...files)
  await Promise.all(files.map(async f => (
    (await fs.stat(f)).isDirectory() && rreaddir(f, allFiles)
  )))
  return allFiles;
}

async function checkStringInFile(file) {
    const data = await fs.readFile(file, {encoding: 'utf8'});
    return data;
}

async function fetchData(directory, key) {
  const list = await rreaddir(directory);
  const finalList = [];
  for (let index in list) {
    try {
      const data = await checkStringInFile(list[index]);
      if(data.includes(key) > 0) {
          finalList.push(list[index]);
      }
    } catch(err) {
      // console.log(err);
    }
  }
  console.log(finalList);
}

fetchData();
module.exports.fetchData = fetchData;