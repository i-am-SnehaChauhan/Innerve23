const cards = document.querySelectorAll('.card');
const images = document.querySelectorAll('.image');
// const circleButtons = document.querySelectorAll('.circle-button');

var image1 = document.getElementById("myImage1");
var image2 = document.getElementById("myImage2");

  // Set an initial state to track the size
var isLarge = false;

cards.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
    cards.forEach(card => card.classList.add('hide-holo'));
    images.forEach(image => image.style.opacity = 1);
    
    cards[index].classList.remove('hide-holo');
    images[index].style.opacity = 1;
  });

  button.addEventListener('mouseleave', () => {
    cards[index].classList.add('hide-holo');
    images[index].style.opacity = 1;
  });
});



  // Add a click event listener to toggle the image size
image1.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image1.style.width ="33%"; // Set your desired small width
    image1.style.height ="25%"; 
    image1.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image1.style.width = "54%"; // Set your desired large width
    image1.style.height = "35%";
    image1.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});

image2.addEventListener("click", function() {
  if (isLarge) {
    // If the image is currently large, make it small
    image2.style.width ="33%"; // Set your desired small width
    image2.style.height ="25%"; 
    image2.style.marginLeft="0px";
  } else {
    // If the image is currently small, make it large
    image2.style.width = "54%"; // Set your desired large width
    image2.style.height = "35%";
    image2.style.marginLeft="-30px";
  }

  // Toggle the state
  isLarge = !isLarge;
});
