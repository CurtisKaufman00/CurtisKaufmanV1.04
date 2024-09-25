// Include the Calendly script
Calendly.initInlineWidget({
  url: "https://calendly.com/curtiskaufman00",
  parentElement: document.getElementById("calendy"),
  prefill: {},
  utm: {},
});

// Include JavaScript to handle the pop-up
// Get references to the button and the pop-up container
var openPopupButton = document.getElementById("openPopupButton");
var popupContainer = document.getElementById("popupContainer");
var banner = document.getElementById("banner");
var letsTalk = document.getElementById("letsTalk");
var pageName = document.getElementById("pageName");
var learnMore = document.getElementById("learnMore");

// Get a reference to the close button inside the pop-up
var closePopupButton = document.getElementById("closePopupButton");

// Function to open the pop-up, elongate banner and hide the lets talk button
function openPopup() {
  if (window.innerWidth <= 768) {
    // Adjust the screen width breakpoint as needed
    popupContainer.style.display = "block";
    banner.style.padding = "30em 3em 5em 3em";
    letsTalk.style.display = "none";
  }
  popupContainer.style.display = "block";
  letsTalk.style.display = "none";
  pageName.style.display = "none";
  learnMore.style.display = "none";
}

// Function to close the pop-up, apply changes only on mobile devices
function closePopup() {
  if (window.innerWidth <= 768) {
    // Adjust the screen width breakpoint as needed
    popupContainer.style.display = "none";
    banner.style.padding = "7em 3em 5em 3em";
    letsTalk.style.display = "block";
  }
  popupContainer.style.display = "none";
  letsTalk.style.display = "block";
  pageName.style.display = "block";
  learnMore.style.display = "block";
}

// Add a click event listener to open the pop-up
openPopupButton.addEventListener("click", openPopup);

// Add a click event listener to close the pop-up
closePopupButton.addEventListener("click", closePopup);

// Image Logo Fade
document.addEventListener("scroll", function () {
  const image = document.getElementById("#logo");
  const pageHeight = window.innerHeight;
  const imagePosition = image.getBoundingClientRect().top;

  // Change the value (e.g., 100) to the desired scroll position where the image should be hidden
  const hidePosition = 100;

  if (imagePosition < hidePosition) {
    image.classList.add("hidden");
  } else {
    image.classList.remove("hidden");
  }
});
