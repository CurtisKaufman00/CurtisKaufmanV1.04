const servicesData = [
  {
    title: "NEW BUILD",
    subtitle: "",
    imageSrc: "assets/images/Services/servicesNewBuild.png",
  },
  {
    title: "CONSERVATION and REPAIRS",
    subtitle: "",
    imageSrc: "assets/images/Services/servicesRepairs.png",
  },
  {
    title: "ADDITION AND ALTERATION",
    subtitle: "",
    imageSrc: "assets/images/Services/servicesAddition.png",
  },
  {
    title: "INTERIOR FIT OUT",
    subtitle: "",
    imageSrc: "assets/images/Services/servicesInteriorFitOut.png",
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
  const title = serviceTemplate.querySelector(".text-2xl");
  title.textContent = service.title;
  title.classList.add('title-style'); // Apply custom title styles

  const description = serviceTemplate.querySelector(".font-normal");
  description.textContent = service.subtitle;

  // Show the cloned service item
  serviceTemplate.style.display = "block";

  // Append the modified service template to the services container
  servicesContainer.appendChild(serviceTemplate);
});
