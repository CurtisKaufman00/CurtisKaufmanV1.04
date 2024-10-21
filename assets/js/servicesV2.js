servicesData.forEach((service, index) => {
  // Clone the template node to create a new service item
  const serviceTemplate = servicesContainer
    .querySelector(".children")
    .cloneNode(true);

  // Update the image source
  const image = serviceTemplate.querySelector("#image-container img");
  image.src = service.imageSrc;

  // Update title and description in overlay
  const title = serviceTemplate.querySelector(".overlay-text .title");
  title.textContent = service.title;

  const description = serviceTemplate.querySelector(".overlay-text .subtext");
  description.textContent = service.subtitle;

  // Show the cloned service item
  serviceTemplate.style.display = "block";

  // Append the modified service template to the services container
  servicesContainer.appendChild(serviceTemplate);
});
