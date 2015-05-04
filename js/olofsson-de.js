'use strict';

NodeList.prototype.forEach = Array.prototype.forEach; 

document.querySelectorAll('.images img').forEach(function(i) {
	i.addEventListener('click', function() {
		showRandomImage(this);
	});
});

showRandomImage();

function showRandomImage(self) {

	var images = document.querySelectorAll('.images img');
	images.forEach(function(i) {
		i.style.display = 'none';
	});

	var random = images[Math.floor(Math.random() * images.length)];

	// Don't show ourselfs twice...
	if (self && random === self) {
		showRandomImage(self);
	} else {
		random.style.display = 'initial';
	}
}
