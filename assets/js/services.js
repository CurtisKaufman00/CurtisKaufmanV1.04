const servicesData = [
  {
    title: "NEW BUILD",
    subtitle:
      "Bring your vision to life with our expert new build services. Start building today!",
    imageSrc: "./assets/images/Services/servicesNewBuild.png",
    cta: "Book a Free Consultation",
  },
  {
    title: "CONSERVATION and REPAIRS",
    subtitle:
      "Restore and protect your property with our skilled repair and conservation work. Contact us now!",
    imageSrc: "./assets/images/Services/servicesRepairs.png",
    cta: "Book a Free Consultation",
  },
  {
    title: "ADDITION AND ALTERATION",
    subtitle:
      "Expand and transform your space with our seamless additions. Let’s enhance your property!",
    imageSrc: "./assets/images/Services/servicesAddition.png",
    cta: "Book a Free Consultation",
  },
  {
    title: "INTERIOR FIT OUT",
    subtitle:
      "Upgrade your interiors with custom fit-out solutions. Ready for a refresh? Let's start!",
    imageSrc: "./assets/images/Services/servicesInteriorFitOut.png",
    cta: "Book a Free Consultation",
  },
];

// Get the container where services will be appended
const servicesContainer = document.getElementById("services-body-component");

// Hide the initial children template
const initialChildren = servicesContainer.querySelector(".children");
initialChildren.style.display = "none";

// Loop through servicesData array
servicesData.forEach((service, index) => {
  // Clone the template node to create a new service item
  const serviceTemplate = servicesContainer
    .querySelector(".children")
    .cloneNode(true);

  // Update the image source
  const image = serviceTemplate.querySelector("#image-container img");
  image.src = service.imageSrc;

  // Update title and description
  const title = serviceTemplate.querySelector(".title");
  title.textContent = service.title;

  // SAMPLE SYNTAX: Applying custom title styles using JS
  //title.classList.add("title-style");
  // Then add this in CSS:
  /* .title-style {
  text-align: center;
  color: #555555;
  font-size: 2rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
} */

  const description = serviceTemplate.querySelector(".subtext");
  description.textContent = service.subtitle;

  const cta = serviceTemplate.querySelector(".cta");
  cta.textContent = service.cta;

  // Show the cloned service item
  serviceTemplate.style.display = "block";

  // Append the modified service template to the services container
  servicesContainer.appendChild(serviceTemplate);
});
