const app = require('./app_asyncawait.mjs');
const sinon = require('sinon');
const fs = require("fs");


describe('Finding List of files containing search key', function () {
	beforeEach(() => {
	    readDirStub = sinon.stub(fs, 'readdir').returns(['C:\\Users\\sathish\\Documents\\SearchFiles\\Server.js']);
	    readFileStub = sinon.stub(fs, 'readFile').returns(['C:\\Users\\sathish\\Documents\\SearchFiles\\Server.js']);
	})

	afterEach(() => {
	    readDirStub.restore();
	    readFileStub.restore();
	})
    it('should return list of files which contain search key', function (done) {
		app.fetchData("C:\\Users\\sathish\\Documents\\SearchFiles", "enableProdMode");
		done();
	});
});
