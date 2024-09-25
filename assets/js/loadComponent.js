// Function to load external HTML content into an element
function loadComponent(elementId, filePath) {
  // Fetch the HTML file
  fetch(filePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error loading component: " + response.statusText);
      }
      return response.text();
    })
    .then((data) => {
      // Insert the fetched HTML content into the element with the given ID
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = data;

        // Find and execute any scripts in the loaded HTML
        const scripts = element.querySelectorAll("script");
        scripts.forEach((script) => {
          const newScript = document.createElement("script");
          if (script.src) {
            // If the script has a src attribute, load it from the URL
            newScript.src = script.src;
          } else {
            // If the script contains inline code, copy the content and execute it
            newScript.innerHTML = script.innerHTML;
          }
          document.body.appendChild(newScript); // Append to body to execute
        });
      } else {
        console.error(`Element with ID '${elementId}' not found.`);
      }
    })
    .catch((error) => {
      console.error("There was a problem loading the component:", error);
    });
}
