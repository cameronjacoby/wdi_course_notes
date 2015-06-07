var generateAnimalPictureURL = function(n) {
	return 'http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-7-'+n+'-2014.gif';
};

var title = document.getElementById('title');
var description = document.getElementById('description');
var theButton = document.getElementsByTagName('button')[0];
var preview = document.getElementById('preview');
var thePics = document.getElementById('the_pics');

var n = 1;
preview.src = generateAnimalPictureURL(n);

theButton.onclick = function() {
	var newTitleHeading = document.createElement('h1');
	var newTextNode = document.createTextNode(title.value);
	thePics.appendChild(newTitleHeading);
	newTitleHeading.appendChild(newTextNode);

	newTitleHeading.onclick = function() {
		this.className = 'white-on-black';
	};

	var newParagraph = document.createElement('p');
	var descriptionTextNode = document.createTextNode(description.value);
	thePics.appendChild(newParagraph);
	newParagraph.appendChild(descriptionTextNode);

	// var img = document.createElement('img');
	// img.src = pics[n];
	// thePics.appendChild(img);
	// --> this is better than the below --> need to create pics array

	thePics.innerHTML += '<img src="http://i1112.photobucket.com/albums/k497/animalsbeingdicks/abd-7-'+n+'-2014.gif" />';
	
	n += 1;
	preview.src = generateAnimalPictureURL(n);
	if (n === 6) {
		n = 1;
	}
	preview.src = generateAnimalPictureURL(n);
	title.value = "";
	description.value = "";
}

var rm = document.getElementById('rm');
rm.onclick = function()
 {
 	thePics.removeChild(thePics.lastChild);
  thePics.removeChild(thePics.lastChild);
  thePics.removeChild(thePics.lastChild);
 }















