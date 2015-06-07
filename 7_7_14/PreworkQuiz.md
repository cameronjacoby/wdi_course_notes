##Command Line Basics

What are the terminal commands to:

* Create a new folder called "Blah"

```
mkdir Blah
```
* Move into the newly created "Blah" folder

```
cd Blah
```
* Create a "hello.rb" file

```
touch hello.rb
```

* Open the "hello.rb" file in Sublime Text

```
subl hello.rb
```

* Move back one directory

```
cd ..
```

*** 

##HTML and CSS

* Without looking it up, create the basic HTML template structure with `Doctype`, `head`, `title`, and `body`

```
<!DOCTYPE html>
<html>
	<head>
		<title></title>
	</head>
	<body></body>
</html>
```

* Write the HTML to add a link to google.com

```
<a href="www.google.com" ></a>
```

* Link to an external sheet at the path "css/styles.css"

```
<link rel="stylesheet" src="css/style.css" >
```

* Why do we want to use external stylesheets and scripts instead of adding them directly into our HTML file?

```
Using external stylesheets and scripts enable us to edit website content (HTML), style (CSS), and functionality (JavaScript) individually without affecting the others.
```

* What's the difference between a class and an ID?  Why do we use them?

```
A class is used to attribute multiple elements that we want to give the same style/functionality. An ID should be used when there is only one unique element that we want to give a certain style/functionality. We use classes and ID's to link HTML elements to the style (CSS) and functionality (JavaScript) we want to give them.
```

Using the following HTML: 

```html
<h1>Hello Guys!</h1>
<p>Don't Mess This Quiz Up!!!</p>
<div>
  <p>I'm a paragraph!</p>
  <p class="lol">I have a class!</p>
  <p id="wdi">I have an ID!</p>
</div>
```

* Write CSS to change the color of the `<h1>`

```
h1 {
	color: red;
}
```

* Write CSS to give the `<p>` with the id of 'wdi' a different font size

```
#wdi {
	font-size: 24px;
}
```

* Write CSS to give the `<p>` with the class of 'lol' a background color.

```
.lol {
	background-color: blue;
}
```

* Write CSS to give the first `<p>` in the `<div>` a yellow border.

```
div p:first-child {
	border: solid 2px yellow;
}
```

* Name at least two of the different color formats used in CSS

```
HEX, RGB, RGBA
```

***

##Ruby

* What are the different data types in Ruby?

```
string, number, boolean, array
```

* How do you print something to the terminal in Ruby?

```
print "something" (remains on same line) or puts "something" (starts new line)
```

* What is an array?

```
An array is a variable that can hold an infinite number of data elements. The data in an array does not have to belong to the same data type (i.e. an array can simultaneously hold numbers and strings), and arrays can also be multi-dimensional, arrys inside arrays.
```

* Create an array with 5 of your favorite foods

```
foods = ["peanut butter", "cupcakes", "pad thai", "dosas", "paxti's pizza"]
```

* Write code to print out the numbers from 1 to 250

```
for (i = 1, i <= 250, i++)
	puts i
end
```

***

#Javascript

* Aside from syntax, how is Javascript different from Ruby? 

```
JavaScript is used for client side programming (browser interaction), and Ruby is used for server side programming (storing data, etc.).
```

* How do you print something to the console in Javascript?

```
console.log("something");
```

* Using a for loop, write code to print out all the odd numbers between 1 and 100.  You will also need to use an if statement.

```
for (var i = i; i <= 100; i++) {
	if (i % 2 != 0) {
		console.log(i);
}
```

***

##Git

* What is Git?  What is Github?

```
Git is a version control system, which is used to keep track of changes in your code. Github is a social programming application that makes use of Git to allow developers to easily work together on projects.
```

* What is the command to create an empty git repository in terminal?

```
git init
```

* What is the difference between `git add` and `git commit`?

```
'git add' tracks the last change made, and 'git commit' actually commits that change to the repo. You can use 'git -a commit' to add and commit a change with one command.
```

***


##Optional Bonus

If you finish early, work on this problem:

Using either Ruby or Javascript, write code that will test if a given string is a palindrome.  A palindrome is a word that is the same forwards and backwards, like 'mom' or 'racecar' or 'aibohphobia'.  You are not allowed to use the built in `reverse` method or any similar methods.

```
function palindrome_test(your_string) {
	for (var i = 0; i < your_string.length; i++) {
		if (your_string[i] === your_string[your_string.length - i - 1]) {
			return true;
		} else {
			return false;
		}
	}
}
```