const server = () => require("./server");
const path = require('path');
const env = Object.assign(process.env, require("./env"), require("./config"));
const fs = require('fs');
var chrome;
// most devs have lvm clones stored in github desktop. so this will change for devs and users.
if (env.ENV == "dev") chrome = path.join(__dirname, "../../../AppData/Local/Chromium/Application");
else chrome = path.join(__dirname, "../../AppData/Local/Chromium/Application");
var exec = require('child_process').execFile;
var browser = () => {
	if (!fs.existsSync(chrome)) {
		console.log("Chromium was not found. Downloading...");
		exec(`google-chrome --app=https://github.com/tangalbert919/ungoogled-chromium-binaries/releases/download/79.0.3945.130-2/ungoogled-chromium_79.0.3945.130-2.1_installer-x64.exe`, function(err, data) { 
			if (err) console.error("Error downloading Chromium.", err);
			else console.log("Downloading Chromium...", data);
		});
		exec(`${chrome}/../../../../Downloads/ungoogled-chromium_79.0.3945.130-2.1_installer-x64.exe`, function(err, data) { 
			if (err) console.error("Error Launching Chromium.", err);
			else console.log("Launching Chromium...", data);
		});
	} else {
		exec(`${chrome}/chrome.exe --app=https://localhost:${env.SERVER_PORT}`, function(err, data) { 
			if (err) console.error("Error Launching Chromium.", err);
			else console.log("Launching Chromium...", data);
		});
	}
}
browser();
server();
