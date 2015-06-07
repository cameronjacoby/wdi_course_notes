var form = document.getElementById('book_form');

var addItem = function (t, a, r) {
	// console.log(t.value, a.value, r.value);
	var bookList = document.getElementById('book_list');
	bookList.innerHTML += "<li>" + t.value + " - " + a.value + " (Rating: " + r.value + ")</li>";
}


form.onsubmit = function (event) {
	event.preventDefault();

	var myTitle = this.title;
	var myAuthor = this.author;
	var myRating = this.rating;

	addItem(myTitle, myAuthor, myRating);

	myTitle.value = "";
	myAuthor.value = "";
	myRating.value = "1";

}