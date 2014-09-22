var download = function() {
	chrome.runtime.sendMessage({url: document.URL}, function(){});
};
var container = document.getElementById("pullrequest-actions"),
	container_inner = document.createElement("div"),
	button = document.createElement("button");

container_inner.className = "aui-buttons";
container.appendChild(container_inner);

container_inner.appendChild(button);
button.className = "aui-button";
button.innerHTML = "Download";

button.addEventListener("click", download);
