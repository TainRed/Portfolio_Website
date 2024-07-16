// script.js

// document.addEventListener("DOMContentLoaded", function () {
//   const interactionOverlay = document.getElementById("interactionOverlay");
//   const startVideosButton = document.getElementById("startVideosButton");
//   const navigationLinks = document.querySelectorAll(".disableL .dis-scroll");

//   // Disable navigation links and scrolling initially
//   disableNavigationLinks();
//   disableScrolling();

//   // Disable navigation links function
//   function disableNavigationLinks() {
//     navigationLinks.forEach((link) => {
//       console.log(link);
//       link.addEventListener("click", preventDefaultClick);
//     });
//   }

//   // Prevent default click behavior
//   function preventDefaultClick(event) {
//     event.preventDefault();
//     event.stopPropogation();
//   }

//   // Function to disable scrolling for main content area
//   function disableScrolling() {
//     document.body.style.overflow = "hidden";
//     document.documentElement.style.overflow = "hidden";
//   }

//   // Function to enable scrolling for main content area
//   function enableScrolling() {
//     document.body.style.overflow = "";
//     document.documentElement.style.overflow = "";
//   }

//   startVideosButton.addEventListener("click", function () {
//     interactionOverlay.style.display = "none"; // Hide the interaction overlay
//     enableNavigationLinks(); // Enable navigation links
//     enableScrolling(); // Enable scrolling for main content
//   });

//   // Function to enable navigation links
//   function enableNavigationLinks() {
//     navigationLinks.forEach((link) => {
//       link.removeEventListener("click", preventDefaultClick);
//     });
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const interactionOverlay = document.getElementById("interactionOverlay");
  const startVideosButton = document.getElementById("startVideosButton");
  const linksToIgnore = document.querySelectorAll(".disableL a");
  disableScrolling();
  // Function to disable keyboard keys except for Enter and function keys (F1 to F12)
  function disableKeyboardExceptEnterAndFunctionKeys() {
    document.addEventListener("keydown", function (event) {
      if (event.key !== "Enter" && !event.key.startsWith("F")) {
        event.preventDefault();
      }
    });
  }
  function toggleLinkDisable(disable) {
    const links = document.querySelectorAll(".disableL a");
    links.forEach((link) => {
      if (disable) {
        link.classList.add("disabled-link");
      } else {
        link.classList.remove("disabled-link");
      }
    });
  }

  // Function to enable keyboard keys
  function enableKeyboard() {
    document.removeEventListener("keydown", function (event) {
      if (event.key !== "Enter" && !event.key.startsWith("F")) {
        event.preventDefault();
      }
    });
  }

  // Event listener for "Okay" button
  startVideosButton.addEventListener("click", function () {
    interactionOverlay.style.display = "none"; // Hide the interaction overlay
    toggleLinkDisable(false); // Enable navigation links
    enableScrolling(); // Enable scrolling for main content
    startVideosButton.blur(); // Remove focus from the button after click
    enableKeyboard(); // Enable keyboard navigation after button click
  });

  // Initial disable of links and keyboard on DOM load
  toggleLinkDisable(true);
  disableKeyboardExceptEnterAndFunctionKeys();

  // Function to toggle link disabling class

  // Function to disable scrolling for main content area
  function disableScrolling() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  }

  // Function to enable scrolling for main content area
  function enableScrolling() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
  }

  // Focus the "Okay" button on page load
  startVideosButton.focus();
});

// //here

// document.addEventListener("DOMContentLoaded", function () {
//     const interactionOverlay = document.getElementById("interactionOverlay");
//     const startVideosButton = document.getElementById("startVideosButton");
//     disableScrolling();
//     // Function to toggle link disabling class
//     function toggleLinkDisable(disable) {
//       const links = document.querySelectorAll(".disableL a");
//       links.forEach((link) => {
//         if (disable) {
//           link.classList.add("disabled-link");
//         } else {
//           link.classList.remove("disabled-link");
//         }
//       });
//     }

//     // Event listener for "Okay" button
//     startVideosButton.addEventListener("click", function () {
//       interactionOverlay.style.display = "none"; // Hide the interaction overlay
//       toggleLinkDisable(false); // Enable navigation links
//       enableScrolling(); // Enable scrolling for main content
//     });

//     // Initial disable of links on DOM load
//     toggleLinkDisable(true);

//     // Function to disable scrolling for main content area
//     function disableScrolling() {
//       document.body.style.overflow = "hidden";
//       document.documentElement.style.overflow = "hidden";
//     }

//     // Function to enable scrolling for main content area
//     function enableScrolling() {
//       document.body.style.overflow = "";
//       document.documentElement.style.overflow = "";
//     }
//   });
