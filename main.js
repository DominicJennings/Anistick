/* Before you ask me kia, Why did i remove the app window function from this file and replaced it as this was a web app?
Well, lets just say that things wern't working quite well with the app window as it opens. 
it came up with errors saying that the url failed to load on an https interface.
As a bug fix, i added a browser launcher as in you have to open up localhost as chromium opens.
Pretty cool system, huh? Well, see you next time on dms.
*/
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
