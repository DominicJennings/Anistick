const server = () => require("./server");
const path = require('path');
const env = Object.assign(process.env, require("./env"), require("./config"));
const fs = require('fs');
var chrome;
// most devs have lvm clones stored in github desktop. so this will change for devs and users.
if (env.NODE_ENV == "dev") chrome = path.join(__dirname, "../../../AppData/Local/Chromium/Application");
else chrome = path.join(__dirname, "../../AppData/Local/Chromium/Application");
var exec = require('child_process').execFile;
var browser = () => {
	exec(`${chrome}/chrome.exe`, function(err, data) { 
		if (err) console.error("Error Launching Chromium.", err);
		else console.log("Launching Chromium...", data);
	});
}
browser();
server();
