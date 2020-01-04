const fs = require("fs");
const path = require('path');
const FileQueue = require('filequeue');
const fq = new FileQueue(100);

const directoryPath = process.argv[2]; 
const searchKey = process.argv[3];

function readDir(currentDirPath, callback) {
    fs.readdir(currentDirPath, function (err, files) {
        if (err) {
            throw new Error(err);
        }
        files.forEach(function (name) {
            const filePath = path.join(currentDirPath, name);
            const stat = fs.statSync(filePath);
            if (stat.isFile()) {
                callback(filePath, stat);
            } else if (stat.isDirectory()) {
                readDir(filePath, callback);
            }
        });
    });
}
searchDir(directoryPath, searchKey);
function searchDir(directoryPath, searchKey) {
	readDir(directoryPath, function(filePath, stat) {
	    fq.readFile(filePath, {encoding: 'utf8'}, function (err, data) {
		   if (err) return console.error(err);
		   if(data.includes(searchKey) > 0) {
		   		console.log(filePath);
		   }
		});
	});
}
module.exports.searchDir = searchDir;
