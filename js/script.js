data = {
    title: "Heading",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam alias nam et atque maxime fugit dolore, sequi ipsam suscipit laboriosam quisquam accusantium dicta inventore, ducimus ipsum voluptas voluptate nobis consequatur.",
    source: "https://th.bing.com/th?id=ORMS.089409c241c18a49c6f0c0e6e2bf16a1&pid=Wdp&w=612&h=304&qlt=90&c=1&rs=1&dpr=1&p=0",
    alt: "Special breakfast with partner"
}

// how to create h1 element
var title = document.createElement("h1");
// add value to h1 tag
title.textContent = data.title;

var content = document.createElement("p");
content.textContent = data.content;

// image tag
var img = document.createElement("img");
img.src = data.source;
img.alt = data.alt;

// get div by id name
var container = document.getElementById('container');

// include h1 tag into div container
container.appendChild(title);
container.appendChild(content);
container.appendChild(img);

// css codes
title.style.textAlign = "center";
title.style.padding = "8px";

content.style.fontSize = "large";
content.style.padding = "8px 16px";
content.style.wordBreak = "break-all";