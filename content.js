(function() {
	var reload = function() {
		var match = document.URL.match(/https:\/\/bitbucket.org\/.*\/pull-requests\/.*\/commits.*/) ||
			document.URL.match(/https:\/\/bitbucket.org\/.*\/pull-requests\/.*\/activity.*/) ||
			document.URL.match(/https:\/\/bitbucket.org\/.*\/pull-requests\/.*\/diff.*/);

		if (match) {
			var download = function() {
				chrome.runtime.sendMessage({url: document.URL}, function(){});
			};
			var container = document.getElementById("pullrequest-actions"),
				container_inner = document.createElement("div"),
				button = document.createElement("button");

			// We are probably on an incorrect page or something on the page has changed
			if (!container) {
				return;
			}

			// Check that the button is not added, in that case, don't add it again.
			if (document.getElementById("bitbucketchromedownload")) {
				return;
			}

			container_inner.className = "aui-buttons";
			container_inner.id = "bitbucketchromedownload";
			container.appendChild(container_inner);

			container_inner.appendChild(button);
			button.className = "aui-button";
			button.innerHTML = "Download";

			button.addEventListener("click", download);
		}
	};

	var timeout = null;
	document.addEventListener("DOMSubtreeModified", function() {
		if(timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(reload, 500);
	}, false);

	timeout = setTimeout(reload, 500);
})();
