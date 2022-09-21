const server = () => require("./server");
const path = require('path');
const chrome = path.join(__dirname, "../../../../AppData/Local/Chromium/Application");
var exec = require('child_process').execFile;
var browser = () => {
	exec(`${chrome}/chrome.exe`, function(err, data) {  
		if (err) console.error(err);
		else console.log("Launching Chromium...", data);
	});  
}
browser();
server();
