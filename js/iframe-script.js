// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const horizontalLine = document.querySelector(".horizontal-line");

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       // console.log(`Iframe loaded: ${iframe.dataset.src}`);

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       // Pause the Vimeo video
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       // console.log(`Iframe paused: ${iframe.dataset.src}`);

//       // Unload the iframe by resetting its src
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       // console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe) => {
//     const iframeRect = iframe.getBoundingClientRect();
//     const lineRect = horizontalLine.getBoundingClientRect();

//     // Calculate iframe's top and bottom positions relative to the viewport
//     const iframeTop = iframeRect.top;
//     const iframeBottom = iframeRect.bottom;

//     // Calculate line's top and bottom positions relative to the viewport
//     const lineTop = lineRect.top;
//     const lineBottom = lineRect.bottom;

//     // Check if the iframe's top is below or at the line's bottom AND
//     // if the iframe's bottom is above or at the line's top
//     return iframeBottom >= lineTop && iframeTop <= lineBottom;
//   };

//   const handleScroll = () => {
//     iframesArray.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   // Event listener for scroll events
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();

//   // Optional: Visualize the horizontal line for testing
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
// // NEW IFRAME CODE TO WORK THE WITH SECTIONS CHANGE
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const sections = document.querySelectorAll(".project-section");

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       // Pause the Vimeo video
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");

//       // Unload the iframe by resetting its src
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const iframeRect = iframe.getBoundingClientRect();
//     const sectionRect = section.getBoundingClientRect();

//     // Calculate the midpoint of the section
//     const sectionMid = sectionRect.top + sectionRect.height / 2;

//     // Check if the iframe's top is below or at the section's midpoint AND
//     // if the iframe's bottom is above or at the section's midpoint
//     return iframeRect.bottom >= sectionMid && iframeRect.top <= sectionMid;
//   };

//   const handleScroll = () => {
//     sections.forEach((section) => {
//       const iframesInSection = Array.from(
//         section.querySelectorAll("iframe[data-src]")
//       );
//       iframesInSection.forEach((iframe) => {
//         const isIntersecting = checkIntersection(iframe, section);
//         if (isIntersecting) {
//           loadAndPlayIframe(iframe);
//         } else {
//           pauseAndUnloadIframe(iframe);
//         }
//       });
//     });
//   };

//   // Event listener for scroll events
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();
// });
//this is after hte last one was given and we are debuggin loadign issues
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const sections = document.querySelectorAll(".project-section");

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       // Pause the Vimeo video
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);

//       // Unload the iframe by resetting its src
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const iframeRect = iframe.getBoundingClientRect();
//     const sectionRect = section.getBoundingClientRect();

//     console.log("Iframe rect:", iframeRect);
//     console.log("Section rect:", sectionRect);

//     // Calculate the midpoint of the section
//     const sectionMid = sectionRect.top + sectionRect.height / 2;
//     console.log("Section midpoint:", sectionMid);

//     // Check if the iframe's top is below or at the section's midpoint AND
//     // if the iframe's bottom is above or at the section's midpoint
//     const isIntersecting =
//       iframeRect.bottom >= sectionMid && iframeRect.top <= sectionMid;
//     console.log(`Iframe intersection status: ${isIntersecting}`);
//     return isIntersecting;
//   };

//   const handleScroll = () => {
//     sections.forEach((section) => {
//       const iframesInSection = Array.from(
//         section.querySelectorAll("iframe[data-src]")
//       );
//       iframesInSection.forEach((iframe) => {
//         const isIntersecting = checkIntersection(iframe, section);
//         if (isIntersecting) {
//           loadAndPlayIframe(iframe);
//         } else {
//           pauseAndUnloadIframe(iframe);
//         }
//       });
//     });
//   };

//   // Event listener for scroll events
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();

//   // Optional: Visualize the horizontal line for testing
//   const horizontalLine = document.querySelector(".horizontal-line");
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
//loading on the sectino and not the window
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const sections = document.querySelectorAll(".project-section");

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       // Pause the Vimeo video
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);

//       // Unload the iframe by resetting its src
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const iframeRect = iframe.getBoundingClientRect();
//     const sectionRect = section.getBoundingClientRect();

//     // Log the current iframe and section rectangles
//     console.log("Iframe rect:", iframeRect);
//     console.log("Section rect:", sectionRect);

//     // Calculate the midpoint of the section
//     const sectionMid = sectionRect.top + sectionRect.height / 2;
//     console.log("Section midpoint:", sectionMid);

//     // Ensure the iframe is visible and has size
//     if (iframeRect.width <= 0 || iframeRect.height <= 0) {
//       console.log("Iframe is not visible or has zero dimensions");
//       return false;
//     }

//     // Check if the iframe's top is below or at the section's midpoint AND
//     // if the iframe's bottom is above or at the section's midpoint
//     const isIntersecting =
//       iframeRect.bottom >= sectionRect.top &&
//       iframeRect.top <= sectionRect.bottom;
//     console.log(`Iframe intersection status: ${isIntersecting}`);
//     return isIntersecting;
//   };

//   const handleScroll = (event) => {
//     const target = event.target;
//     if (target.classList.contains("project-section")) {
//       const iframesInSection = Array.from(
//         target.querySelectorAll("iframe[data-src]")
//       );
//       iframesInSection.forEach((iframe) => {
//         const isIntersecting = checkIntersection(iframe, target);
//         if (isIntersecting) {
//           loadAndPlayIframe(iframe);
//         } else {
//           pauseAndUnloadIframe(iframe);
//         }
//       });
//     }
//   };

//   // Add scroll event listener to each section
//   sections.forEach((section) => {
//     section.addEventListener("scroll", handleScroll);
//   });

//   // Initial check for each section
//   sections.forEach((section) => {
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, section);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   });

//   // Optional: Visualize the horizontal line for testing
//   const horizontalLine = document.querySelector(".horizontal-line");
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
//trying with both loads instead
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const sections = document.querySelectorAll(".project-section");

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       // Pause the Vimeo video
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);

//       // Unload the iframe by resetting its src
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const iframeRect = iframe.getBoundingClientRect();
//     const sectionRect = section.getBoundingClientRect();

//     // Log the current iframe and section rectangles
//     console.log("Iframe rect:", iframeRect);
//     console.log("Section rect:", sectionRect);

//     // Calculate the midpoint of the section
//     const sectionMid = sectionRect.top + sectionRect.height / 2;
//     console.log("Section midpoint:", sectionMid);

//     // Ensure the iframe is visible and has size
//     if (iframeRect.width <= 0 || iframeRect.height <= 0) {
//       console.log("Iframe is not visible or has zero dimensions");
//       return false;
//     }

//     // Check if the iframe's top is below or at the section's midpoint AND
//     // if the iframe's bottom is above or at the section's midpoint
//     const isIntersecting =
//       iframeRect.bottom >= sectionMid && iframeRect.top <= sectionMid;
//     console.log(`Iframe intersection status: ${isIntersecting}`);
//     return isIntersecting;
//   };

//   const handleScroll = () => {
//     sections.forEach((section) => {
//       const iframesInSection = Array.from(
//         section.querySelectorAll("iframe[data-src]")
//       );
//       iframesInSection.forEach((iframe) => {
//         const isIntersecting = checkIntersection(iframe, section);
//         if (isIntersecting) {
//           loadAndPlayIframe(iframe);
//         } else {
//           pauseAndUnloadIframe(iframe);
//         }
//       });
//     });
//   };

//   // Add scroll event listener to each section as well
//   sections.forEach((section) => {
//     section.addEventListener("scroll", handleScroll);
//   });

//   // Event listener for scroll events on the window
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load with a slight delay
//   setTimeout(handleScroll, 500); // Adjust the timeout as necessary

//   // Optional: Visualize the horizontal line for testing
//   const horizontalLine = document.querySelector(".horizontal-line");
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
//retry wtih better debugging
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const sections = document.querySelectorAll(".project-section");

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       // Pause the Vimeo video
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);

//       // Unload the iframe by resetting its src
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const iframeRect = iframe.getBoundingClientRect();
//     const sectionRect = section.getBoundingClientRect();

//     // Calculate the midpoint of the section
//     const sectionMid = sectionRect.top + sectionRect.height / 2;

//     // Log only if iframe top/bottom touch the section midpoint
//     if (iframeRect.bottom >= sectionMid && iframeRect.top <= sectionMid) {
//       console.log("Iframe rect:", iframeRect);
//       console.log("Section rect:", sectionRect);
//       console.log("Section midpoint:", sectionMid);
//       console.log(`Iframe intersection status: true`);
//       return true;
//     }

//     return false;
//   };

//   const handleScroll = (event) => {
//     const target = event.target;
//     if (target.classList.contains("project-section")) {
//       const iframesInSection = Array.from(
//         target.querySelectorAll("iframe[data-src]")
//       );
//       iframesInSection.forEach((iframe) => {
//         const isIntersecting = checkIntersection(iframe, target);
//         if (isIntersecting) {
//           loadAndPlayIframe(iframe);
//         } else {
//           pauseAndUnloadIframe(iframe);
//         }
//       });
//     }
//   };

//   // Add scroll event listener to each section
//   sections.forEach((section) => {
//     section.addEventListener("scroll", handleScroll);
//   });

//   // Initial check for each section
//   sections.forEach((section) => {
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, section);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   });

//   // Optional: Visualize the horizontal line for testing
//   const horizontalLine = document.querySelector(".horizontal-line");
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
//chaningn to render from div line now...
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const sections = document.querySelectorAll(".project-section");
//   const horizontalLine = document.querySelector(".horizontal-line");

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const horizontalLinePosition = horizontalLine.getBoundingClientRect().top;
//   console.log("Horizontal line position:", horizontalLinePosition);

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       // Pause the Vimeo video
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);

//       // Unload the iframe by resetting its src
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe) => {
//     const iframeRect = iframe.getBoundingClientRect();

//     // Log iframe rect for debugging
//     console.log("Iframe rect:", iframeRect);

//     // Check if the iframe's top and bottom intersect with the horizontal line
//     const isIntersecting =
//       iframeRect.bottom >= horizontalLinePosition &&
//       iframeRect.top <= horizontalLinePosition;
//     console.log(`Iframe intersection status: ${isIntersecting}`);

//     return isIntersecting;
//   };

//   const handleScroll = () => {
//     sections.forEach((section) => {
//       const iframesInSection = Array.from(
//         section.querySelectorAll("iframe[data-src]")
//       );
//       iframesInSection.forEach((iframe) => {
//         const isIntersecting = checkIntersection(iframe);
//         if (isIntersecting) {
//           loadAndPlayIframe(iframe);
//         } else {
//           pauseAndUnloadIframe(iframe);
//         }
//       });
//     });
//   };

//   // Event listener for scroll events on the entire window
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();
// });
//removed debugging code
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const sections = document.querySelectorAll(".project-section");
//   const horizontalLine = document.querySelector(".horizontal-line");

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const horizontalLinePosition = horizontalLine.getBoundingClientRect().top;

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       // Pause the Vimeo video
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);

//       // Unload the iframe by resetting its src
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe) => {
//     const iframeRect = iframe.getBoundingClientRect();

//     // Check if the iframe's top and bottom intersect with the horizontal line
//     const isIntersecting =
//       iframeRect.bottom >= horizontalLinePosition &&
//       iframeRect.top <= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = () => {
//     sections.forEach((section) => {
//       const iframesInSection = Array.from(
//         section.querySelectorAll("iframe[data-src]")
//       );
//       iframesInSection.forEach((iframe) => {
//         const isIntersecting = checkIntersection(iframe);
//         if (isIntersecting) {
//           loadAndPlayIframe(iframe);
//         } else {
//           pauseAndUnloadIframe(iframe);
//         }
//       });
//     });
//   };

//   // Event listener for scroll events on the entire window
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();
// });
//attempt two with section scroll, feels close
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const sections = document.querySelectorAll(".project-section");
//   const horizontalLine = document.querySelector(".horizontal-line");

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const horizontalLinePosition = horizontalLine.getBoundingClientRect().top;

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       // Pause the Vimeo video
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);

//       // Unload the iframe by resetting its src
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe) => {
//     const iframeRect = iframe.getBoundingClientRect();

//     // Check if the iframe's top and bottom intersect with the horizontal line
//     const isIntersecting =
//       iframeRect.bottom >= horizontalLinePosition &&
//       iframeRect.top <= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionScroll = (event) => {
//     handleScroll(event.target);
//   };

//   // Add scroll event listener to each section with overflow scroll
//   sections.forEach((section) => {
//     section.addEventListener("scroll", handleSectionScroll);
//   });

//   // Initial check on page load
//   sections.forEach((section) => {
//     handleScroll(section);
//   });
// });
//intilise on the sectino open - i was reading through this one
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe) => {
//     const horizontalLinePosition = horizontalLine.getBoundingClientRect().top;
//     console.log("the line position is being checked");
//     const iframeRect = iframe.getBoundingClientRect();
//     console.log("the iframe rectangle is being checked");
//     const isIntersecting =
//       iframeRect.bottom >= horizontalLinePosition &&
//       iframeRect.top <= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     handleScroll(section);

//     // Add scroll event listener to the section to handle iframe visibility
//     section.addEventListener("scroll", () => handleScroll(section));
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));
//   });
// });
//referring to the docuemnt again - doesnt work
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const sections = document.querySelectorAll(".project-section");

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//     }
//   };

//   const checkIntersection = (iframe) => {
//     const iframeRect = iframe.getBoundingClientRect();
//     const horizontalLineRect = document
//       .querySelector(".horizontal-line")
//       .getBoundingClientRect();
//     const horizontalLinePosition = horizontalLineRect.top;

//     // Check if the iframe's top and bottom intersect with the horizontal line's position
//     if (
//       iframeRect.top <= horizontalLinePosition &&
//       iframeRect.bottom >= horizontalLinePosition
//     ) {
//       console.log("Iframe rect:", iframeRect);
//       console.log("Horizontal line rect:", horizontalLineRect);
//       console.log(`Iframe intersection status: true`);
//       return true;
//     }

//     return false;
//   };

//   const handleScroll = () => {
//     iframesArray.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   // Event listener for scroll events on the window
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();
// });
//i odn't know
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe) => {
//     const horizontalLinePosition = horizontalLine.getBoundingClientRect().top;
//     const iframeRect = iframe.getBoundingClientRect();
//     const isIntersecting =
//       iframeRect.bottom >= horizontalLinePosition &&
//       iframeRect.top <= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     handleScroll(section);

//     // Add scroll event listener to the section to handle iframe visibility
//     section.addEventListener("scroll", () => handleScroll(section));
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));
//   });

//   // Update the scroll handling to account for sections
//   document.querySelectorAll(".project-section").forEach((section) => {
//     section.addEventListener("scroll", () => handleScroll(section));
//   });

//   // Handle scroll events on the window to manage sections that are scrolled into view
//   window.addEventListener("scroll", () => {
//     document.querySelectorAll(".project-section").forEach((section) => {
//       if (section.classList.contains("hidden")) return; // Skip hidden sections
//       handleScroll(section);
//     });
//   });
// });
//chechking on secitn view port, ignoring windows altogether, doens't work still checks the window
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const sectionRect = section.getBoundingClientRect();
//     const horizontalLinePosition =
//       horizontalLine.getBoundingClientRect().top - sectionRect.top;
//     const iframeRect = iframe.getBoundingClientRect();

//     // Check if iframe is within the section's viewport and intersects with the horizontal line
//     const isIntersecting =
//       iframeRect.bottom >= sectionRect.top + horizontalLinePosition &&
//       iframeRect.top <= sectionRect.top + horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, section);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     handleScroll(section);

//     // Add scroll event listener to the section to handle iframe visibility
//     section.addEventListener("scroll", () => handleScroll(section));
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));
//   });

//   // Add scroll event listeners to sections with overflow scrolling
//   sections.forEach((section) => {
//     section.addEventListener("scroll", () => handleScroll(section));
//   });
// });
//re changed something
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");
//   console.log(horizontalLine);

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const sectionRect = section.getBoundingClientRect();
//     console.log(sectionRect);
//     const horizontalLinePosition =
//       horizontalLine.getBoundingClientRect().top - sectionRect.top;
//     const iframeRect = iframe.getBoundingClientRect();
//     const iframePositionTop =
//       iframeRect.getBoundingClientRect().top - sectionRect.top;
//     const iframePositionBot =
//       iframeRect.getBoundingClientRect().bottom - sectionRect.bottom;

//     // Check if iframe is within the section's viewport and intersects with the horizontal line
//     const isIntersecting =
//       iframePositionTop >= horizontalLinePosition &&
//       iframePositionBot <= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     console.log("scrollllinnnng");
//     checkIntersection;
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, section);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     handleScroll(section);

//     // Add scroll event listener to the section to handle iframe visibility
//     section.addEventListener("scroll", () => handleScroll(section));
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));

//     // Ensure that scroll events are handled for each section with overflow
//     if (section.scrollHeight > section.clientHeight) {
//       section.addEventListener("scroll", () => handleScroll(section));
//     }
//   });
// });
//trying agian to change it
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");
//   console.log(horizontalLine);

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const sectionRect = section.getBoundingClientRect();
//     const horizontalLinePosition =
//       horizontalLine.getBoundingClientRect().top - sectionRect.top;

//     const iframeRect = iframe.getBoundingClientRect();
//     const iframeTop = iframeRect.top - sectionRect.top;
//     const iframeBottom = iframeRect.bottom - sectionRect.top;

//     // Check if the horizontal line is within the bounds of the iframe
//     const isIntersecting =
//       iframeTop <= horizontalLinePosition &&
//       iframeBottom >= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     console.log("Section scrolling"); // Added console log for section scroll
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, section);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     handleScroll(section);

//     // Add scroll event listener to the section to handle iframe visibility
//     section.addEventListener("scroll", () => handleScroll(section));
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));

//     // Ensure that scroll events are handled for each section with overflow
//     if (section.scrollHeight > section.clientHeight) {
//       section.addEventListener("scroll", () => handleScroll(section));
//     }
//   });
// });
//handle sepeartely now
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");
//   console.log(horizontalLine);

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const sectionRect = section.getBoundingClientRect();
//     const horizontalLinePosition =
//       horizontalLine.getBoundingClientRect().top - sectionRect.top;

//     const iframeRect = iframe.getBoundingClientRect();
//     const iframeTop = iframeRect.top - sectionRect.top;
//     const iframeBottom = iframeRect.bottom - sectionRect.top;

//     // Check if the horizontal line is within the bounds of the iframe
//     const isIntersecting =
//       iframeTop <= horizontalLinePosition &&
//       iframeBottom >= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     console.log("Section scrolling"); // Log message for section scroll
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, section);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     handleScroll(section);

//     // Add scroll event listener to the section to handle iframe visibility
//     section.addEventListener("scroll", () => handleScroll(section));
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));

//     // Ensure that scroll events are handled for each section with overflow
//     if (section.scrollHeight > section.clientHeight) {
//       section.addEventListener("scroll", () => handleScroll(section));
//     }
//   });
// });
// seemi working, click loads and unloads.
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");
//   console.log(horizontalLine);

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const sectionRect = section.getBoundingClientRect();
//     const horizontalLinePosition =
//       horizontalLine.getBoundingClientRect().top - sectionRect.top;

//     const iframeRect = iframe.getBoundingClientRect();
//     const iframeTop = iframeRect.top - sectionRect.top;
//     const iframeBottom = iframeRect.bottom - sectionRect.top;

//     // Check if the horizontal line is within the bounds of the iframe
//     const isIntersecting =
//       iframeTop <= horizontalLinePosition &&
//       iframeBottom >= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     console.log("Section scrolling"); // Log message for section scroll
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, section);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     handleScroll(section);

//     // Add scroll event listener to the section to handle iframe visibility
//     section.addEventListener("scroll", () => handleScroll(section), {
//       passive: true,
//     });
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));

//     // Ensure that scroll events are handled for each section with overflow
//     if (section.scrollHeight > section.clientHeight) {
//       section.addEventListener("scroll", () => handleScroll(section), {
//         passive: true,
//       });
//     }
//   });
// });
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");
//   console.log(horizontalLine);

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const sectionRect = section.getBoundingClientRect();
//     const horizontalLinePosition =
//       horizontalLine.getBoundingClientRect().top - sectionRect.top;

//     const iframeRect = iframe.getBoundingClientRect();
//     const iframeTop = iframeRect.top - sectionRect.top;
//     const iframeBottom = iframeRect.bottom - sectionRect.top;

//     // Check if the horizontal line is within the bounds of the iframe
//     const isIntersecting =
//       iframeTop <= horizontalLinePosition &&
//       iframeBottom >= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     console.log("Section scrolling"); // Log message for section scroll
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, section);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     handleScroll(section);

//     // Add scroll event listener to the section to handle iframe visibility
//     section.addEventListener("scroll", () => handleScroll(section), {
//       passive: true,
//     });
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));

//     // Ensure that scroll events are handled for each section with overflow
//     if (section.scrollHeight > section.clientHeight) {
//       section.addEventListener("scroll", () => handleScroll(section), {
//         passive: true,
//       });
//     }
//   });
// });
//something something,m losign my mindn
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");
//   console.log(horizontalLine);

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const sectionRect = section.getBoundingClientRect();
//     const horizontalLinePosition =
//       horizontalLine.getBoundingClientRect().top - sectionRect.top;

//     const iframeRect = iframe.getBoundingClientRect();
//     const iframeTop = iframeRect.top - sectionRect.top;
//     const iframeBottom = iframeRect.bottom - sectionRect.top;

//     // Check if the horizontal line is within the bounds of the iframe
//     const isIntersecting =
//       iframeTop <= horizontalLinePosition &&
//       iframeBottom >= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (section) => {
//     console.log("Section scrolling"); // Log message for section scroll
//     const iframesInSection = Array.from(
//       section.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, section);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     console.log(section);
//     // Perform the initial check when the section is opened
//     handleScroll(section);
//     const debug = console.log("in teh section scrolling");
//     // Ensure that scroll events are handled for each section with overflow
//     section.addEventListener("scroll", () => debug(), handleScroll(section), {
//       passive: true,
//     });
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));

//     // Ensure that scroll events are handled for each section with overflow
//     if (section.scrollHeight > section.clientHeight) {
//       section.addEventListener("scroll", () => handleScroll(section), {
//         passive: true,
//       });
//     }
//   });
// });
//it was on the wrong objext
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");
//   console.log("Horizontal line element:", horizontalLine);

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const sectionRect = section.getBoundingClientRect();
//     const horizontalLinePosition =
//       horizontalLine.getBoundingClientRect().top - sectionRect.top;
//     const iframeRect = iframe.getBoundingClientRect();
//     const iframeTop = iframeRect.top - sectionRect.top;
//     const iframeBottom = iframeRect.bottom - sectionRect.top;

//     const isIntersecting =
//       iframeTop <= horizontalLinePosition &&
//       iframeBottom >= horizontalLinePosition;

//     if (isIntersecting) {
//       console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     }

//     return isIntersecting;
//   };

//   const handleScroll = (detailsDiv) => {
//     console.log("Section scrolling...");
//     const iframesInSection = Array.from(
//       detailsDiv.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, detailsDiv);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     const detailsDiv = section.querySelector(".project-details");
//     if (detailsDiv) {
//       handleScroll(detailsDiv);

//       // Add scroll event listener to the project-details div to handle iframe visibility
//       detailsDiv.addEventListener(
//         "scroll",
//         () => {
//           console.log(
//             `Scrolling within project-details of section: ${section.id}`
//           );
//           handleScroll(detailsDiv);
//         },
//         { passive: true }
//       );
//     }
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));
//   });
// });
//without debug comments - working code USE THIS
// document.addEventListener("DOMContentLoaded", function () {
//   const horizontalLine = document.querySelector(".horizontal-line");
//   // console.log("Horizontal line element:", horizontalLine);

//   if (!horizontalLine) {
//     console.error("No element with class 'horizontal-line' found.");
//     return;
//   }

//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       // console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseAndUnloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       // console.log(`Iframe paused: ${iframe.dataset.src}`);
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       // console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   const checkIntersection = (iframe, section) => {
//     const sectionRect = section.getBoundingClientRect();
//     const horizontalLinePosition =
//       horizontalLine.getBoundingClientRect().top - sectionRect.top;
//     const iframeRect = iframe.getBoundingClientRect();
//     const iframeTop = iframeRect.top - sectionRect.top;
//     const iframeBottom = iframeRect.bottom - sectionRect.top;

//     const isIntersecting =
//       iframeTop <= horizontalLinePosition &&
//       iframeBottom >= horizontalLinePosition;

//     // if (isIntersecting) {
//     //   console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
//     // }

//     return isIntersecting;
//   };

//   const handleScroll = (detailsDiv) => {
//     // console.log("Section scrolling...");
//     const iframesInSection = Array.from(
//       detailsDiv.querySelectorAll("iframe[data-src]")
//     );
//     iframesInSection.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe, detailsDiv);
//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseAndUnloadIframe(iframe);
//       }
//     });
//   };

//   const handleSectionClick = (section) => {
//     // Perform the initial check when the section is opened
//     const detailsDiv = section.querySelector(".project-details");
//     if (detailsDiv) {
//       handleScroll(detailsDiv);

//       // Add scroll event listener to the project-details div to handle iframe visibility
//       detailsDiv.addEventListener(
//         "scroll",
//         () => {
//           // console.log(
//           //   `Scrolling within project-details of section: ${section.id}`
//           // );
//           handleScroll(detailsDiv);
//         },
//         { passive: true }
//       );
//     }
//   };

//   const sections = document.querySelectorAll(".project-section");

//   sections.forEach((section) => {
//     const button = section.querySelector(".close-btn");
//     if (button) {
//       button.addEventListener("click", () => {
//         // Perform actions for closing the section, if needed
//         section.classList.add("hidden");
//       });
//     }

//     // Add click event listener to each section to handle opening
//     section.addEventListener("click", () => handleSectionClick(section));
//   });
// });
//iframe video bug, playing when section lcosed fix
document.addEventListener("DOMContentLoaded", function () {
  const horizontalLine = document.querySelector(".horizontal-line");
  // console.log("Horizontal line element:", horizontalLine);

  if (!horizontalLine) {
    console.error("No element with class 'horizontal-line' found.");
    return;
  }

  const loadAndPlayIframe = (iframe) => {
    if (iframe.dataset.loaded !== "true") {
      iframe.src = iframe.dataset.src;
      iframe.classList.remove("lazy-load");
      iframe.dataset.loaded = "true";
      iframe.contentWindow.postMessage('{"method":"play"}', "*");
      // console.log(`Iframe loaded and playing: ${iframe.dataset.src}`);
    }
  };

  const pauseAndUnloadIframe = (iframe) => {
    if (iframe.dataset.loaded === "true") {
      iframe.contentWindow.postMessage('{"method":"pause"}', "*");
      // console.log(`Iframe paused: ${iframe.dataset.src}`);
      iframe.src = "";
      iframe.classList.add("lazy-load");
      iframe.dataset.loaded = "false";
      // console.log(`Iframe unloaded: ${iframe.dataset.src}`);
    }
  };

  const checkIntersection = (iframe, section) => {
    const sectionRect = section.getBoundingClientRect();
    const horizontalLinePosition =
      horizontalLine.getBoundingClientRect().top - sectionRect.top;
    const iframeRect = iframe.getBoundingClientRect();
    const iframeTop = iframeRect.top - sectionRect.top;
    const iframeBottom = iframeRect.bottom - sectionRect.top;

    const isIntersecting =
      iframeTop <= horizontalLinePosition &&
      iframeBottom >= horizontalLinePosition;

    // if (isIntersecting) {
    //   console.log(`Horizontal line is over the iframe: ${iframe.dataset.src}`);
    // }

    return isIntersecting;
  };

  const handleScroll = (detailsDiv) => {
    // console.log("Section scrolling...");
    const iframesInSection = Array.from(
      detailsDiv.querySelectorAll("iframe[data-src]")
    );
    iframesInSection.forEach((iframe) => {
      const isIntersecting = checkIntersection(iframe, detailsDiv);
      if (isIntersecting) {
        loadAndPlayIframe(iframe);
      } else {
        pauseAndUnloadIframe(iframe);
      }
    });
  };

  const handleSectionClick = (section) => {
    // Perform the initial check when the section is opened
    const detailsDiv = section.querySelector(".project-details");
    if (detailsDiv) {
      handleScroll(detailsDiv);

      // Add scroll event listener to the project-details div to handle iframe visibility
      detailsDiv.addEventListener(
        "scroll",
        () => {
          // console.log(
          //   `Scrolling within project-details of section: ${section.id}`
          // );
          handleScroll(detailsDiv);
        },
        { passive: true }
      );
    }
  };

  const handleSectionClose = (section) => {
    // Handle closing the section and unload iframes
    const detailsDiv = section.querySelector(".project-details");
    if (detailsDiv) {
      const iframesInSection = Array.from(
        detailsDiv.querySelectorAll("iframe[data-src]")
      );
      iframesInSection.forEach((iframe) => {
        pauseAndUnloadIframe(iframe);
      });

      section.classList.add("hidden");
    }
  };

  const sections = document.querySelectorAll(".project-section");

  sections.forEach((section) => {
    const button = section.querySelector(".close-btn");
    if (button) {
      button.addEventListener("click", () => {
        handleSectionClose(section);
      });
    }

    // Add click event listener to each section to handle opening
    section.addEventListener("click", () => handleSectionClick(section));
  });
});
