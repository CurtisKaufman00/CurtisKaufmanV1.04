var openPopupButton = document.getElementById("openPopupButton");

// Function to dynamically load Calendly script
function loadCalendlyScript(callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "https://assets.calendly.com/assets/external/widget.js";

  // When the script is loaded, call the callback function
  script.onload = callback;

  document.head.appendChild(script);
}

let calendlyInitialized = false;

// Function to open Calendly pop-up
function openPopup() {
  if (!calendlyInitialized) {
    Calendly.initInlineWidget({
      url: "https://calendly.com/curtiskaufman00",
      parentElement: document.getElementById("calendly-embed"),
      prefill: {},
      utm: {},
    });
    calendlyInitialized = true;
    return;
  }
}

function openCalendlyModal() {
  document.getElementById("calendlyModal").style.display = "block";
  document.getElementById("modalOverlay").style.display = "block";

  // Disable body scroll by adding 'no-scroll' class to the body
  document.body.style.overflow = "hidden";

  openPopup();
}

function closeCalendlyModal() {
  document.getElementById("calendlyModal").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";

  document.body.style.overflow = "auto";
}

loadCalendlyScript();
