// how to create h1 element
var title = document.createElement("h1");
// add value to h1 tag
title.textContent = "Heading";

// get div by id name
var container = document.getElementById('container');

// include h1 tag into div container
container.appendChild(title);


