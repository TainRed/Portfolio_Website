// document.addEventListener("DOMContentLoaded", function () {
//   const projectSections = document.querySelectorAll(".project-section");

//   projectSections.forEach((section) => {
//     section.addEventListener("click", function (event) {
//       // Prevent closing when clicking on the close button
//       if (event.target.closest(".close-btn")) return;

//       const projectId = this.getAttribute("data-project-id");
//       const projectDetails = document.querySelector(
//         `.project-section[data-project-id="${projectId}"] .project-details`
//       );
//       const closeButton = projectDetails.querySelector(".close-btn"); // Get the close button within the current section

//       // Only show if it's currently hidden
//       if (projectDetails.classList.contains("hidden")) {
//         closeAllProjects();
//         projectDetails.classList.remove("hidden");

//         // Show the close button
//         closeButton.style.display = "block";
//       }
//     });
//   });

//   // Add event listener for close buttons within each section
//   document.querySelectorAll(".project-details .close-btn").forEach((button) => {
//     button.addEventListener("click", function (event) {
//       event.stopPropagation(); // Prevent the click from bubbling up to the section
//       const projectDetails = this.closest(".project-details");
//       projectDetails.classList.add("hidden");
//       this.style.display = "none"; // Hide the button when closing the project
//     });
//   });
// });

// function closeAllProjects() {
//   document.querySelectorAll(".project-details").forEach((details) => {
//     details.classList.add("hidden");
//     details.querySelector(".close-btn").style.display = "none"; // Hide the close button when closing
//   });
// }
//
document.addEventListener("DOMContentLoaded", function () {
  const projectSections = document.querySelectorAll(".project-section");

  projectSections.forEach((section) => {
    // Set initial cursor style
    const hasVideo = section.querySelector("iframe") !== null;
    if (hasVideo) {
      section.classList.add("has-video");
    }

    // Check if the section should be initially opened
    const projectDetails = section.querySelector(".project-details");
    if (!projectDetails.classList.contains("hidden")) {
      section.classList.add("open");
      section.classList.remove("has-video");
    }

    section.addEventListener("click", function (event) {
      // Prevent closing when clicking on the close button
      if (event.target.closest(".close-btn")) return;

      if (this.classList.contains("open")) return; // Do nothing if already open

      const projectId = this.getAttribute("data-project-id");
      const details = document.querySelector(
        `.project-section[data-project-id="${projectId}"] .project-details`
      );
      const closeButton = details.querySelector(".close-btn");

      // Only show if it's currently hidden
      if (details.classList.contains("hidden")) {
        closeAllProjects();
        details.classList.remove("hidden");
        closeButton.style.display = "block";
        this.classList.add("open");
        this.classList.remove("has-video");
      }
    });
  });

  // Add event listener for close buttons within each section
  document.querySelectorAll(".project-details .close-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent the click from bubbling up to the section
      const details = this.closest(".project-details");
      details.classList.add("hidden");
      this.style.display = "none"; // Hide the button when closing the project

      // Update cursor style when closing
      const section = details.closest(".project-section");
      section.classList.remove("open");
      if (section.querySelector("iframe")) {
        section.classList.add("has-video"); // Reapply video cursor style if needed
      }
    });
  });
});

function closeAllProjects() {
  document.querySelectorAll(".project-details").forEach((details) => {
    details.classList.add("hidden");
    details.querySelector(".close-btn").style.display = "none"; // Hide the close button when closing
  });
}
