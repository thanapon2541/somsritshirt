var parser = document.createElement('a');
parser.href = window.location;

var page = parser.hash;
if (page=="") {
	page = "index.html";
}

$(window).load(function() {
	$("#main").attr("src",page);
});

console.log(page);

var content_start_loading = (iframe)=>function() {
	console.log("Change page from (Old url) : "+iframe.contentWindow.location);
	//start fade black (will do onunload (on change page and old page destroying))
	
};

var content_finished_loading = function(iframe) {
	console.log("Finish load (New url) : "+iframe.contentWindow.location);
	//stop fade black (finish load)
	window.location = '#'+iframe.contentWindow.location;
	
	// inject the start loading handler when content finished loading
	// don't change
	iframe.contentWindow.onunload = content_start_loading(iframe);
};