const loadPost = require("../request/post_body");
const util = require("../misc/util");
const asset = require("./main");
const http = require("http");

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	switch (req.method) {
		case "GET": {
			const match = req.url.match(/\/(assets|goapi\/getAsset)\/([^/]+)\/([^/]+)$/);
			if (!match) return;

			const mId = match[1];
			const aId = match[2];
			asset.load(mId, aId).then(b => res.end(b)).catch(e => res.end(`<center><h1>${e}</h1></center>`));
			return true;
		}

		case "POST": {
			switch (url.pathname) {
				case "/goapi/getAsset/":
				case "/goapi/getAssetEx/": {
					loadPost(req, res).then(data => {

						asset.load(data.movieId, data.assetId).then(b => {
							res.setHeader("Content-Length", b.length);
							res.setHeader("Content-Type", "audio/mp3");
							res.end(b);
						}).catch(e => {
							res.statusCode = 404;
							res.end(1 + util.xmlFail(e));
							console.log(e);
						});
					});
					return true;
				}
				default:
					return;
			}
		}
		default:
			return;
	}
};
