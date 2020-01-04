const ServerJs = require('./Server.js');
const sinon = require('sinon');
const fs = require("fs");
const FileQueue = require('filequeue');
const fq = new FileQueue(100);

describe('Finding List of files containing search key', function () {

    it('should return list of files which contain search key', function (done) {
		sinon.stub(fs, 'readdir').withArgs('C:\\Users\\sathish\\Documents\\SearchFiles')
		.returns('C:\\Users\\sathish\\Documents\\SearchFiles\\Server.js');
		sinon.stub(fq, 'readFile').withArgs('C:\\Users\\sathish\\Documents\\SearchFiles\\Server.js')
		.returns('C:\\Users\\sathish\\Documents\\SearchFiles\\Server.js');
		ServerJs.searchDir("C:\\Users\\sathish\\Documents\\SearchFiles", "enableProdMode");
		done();
	});
});
