// Suckerfish Dropdowns to the rescue!
function sfHover() {
	var sfEls = document.getElementById("fw-nav-menu").getElementsByTagName("LI");
	for (var i = 0; i < sfEls.length; i++) {
		sfEls[i].onmouseover = function() {
			this.className += " sfhover";
		};

		sfEls[i].onmouseout = function() {
			this.className = this.className.replace(new RegExp(" sfhover\\b"), "");
		};
	}
}

webs.loadEvent(sfHover);