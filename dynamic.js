
// Dynamically load high res background
var img = new Image();

// Set the src attribute to the URL of the high-resolution image
img.src = "background-image.jpg";

// When the image is loaded, apply it as the background
img.onload = function () {
  document.body.style.backgroundImage = "url(" + img.src + ")";
  document.body.classList.add("loaded");
};

// Button (replaced with css)
