var host = "bitbucket.org",
	pathContains = "pull-request/",
	suffixes = ["diff", "commits", "activity"];

var conditions = suffixes.map(function(suffix) {
	return new chrome.declarativeContent.PageStateMatcher({
		pageUrl: {hostEquals: host, pathContains: pathContains, pathSuffix: suffix}
	});
});


chrome.runtime.onInstalled.addListener(function() {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: conditions,
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});

chrome.runtime.onMessage.addListener(function(request, sender) {
	if (request.url) {
		download(request.url.split("/"));
	}
});

var download = function(url) {
	var org = url[3],
		repo = url[4],
		num = url[6];

	var dlurl = "https://bitbucket.org/api/2.0/repositories/" + org + "/" + repo + "/pullrequests/" + num + "/patch";
	var name = "bitbucket-" + org + "-" + repo + "-pullrequest-" + num + ".patch";
	chrome.downloads.download({url: dlurl, filename: name, conflictAction: "overwrite"}, function(id) {});
};

chrome.pageAction.onClicked.addListener(function(tab){
	var params = tab.url.split("/");
	download(params);
});
