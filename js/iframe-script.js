// new precise use as base
// document.addEventListener("DOMContentLoaded", function () {
//   let iframesArray = Array.from(document.querySelectorAll("iframe[data-src]"));
//   let lazyIframeObserver;
//   let currentPlayingPlayer = null;

//   // Function to load the iframe source
//   const loadIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to unload the iframe source
//   const unloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to play the iframe
//   const playIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       currentPlayingPlayer = iframe;
//       console.log(`Iframe playing: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to pause the iframe
//   const pauseIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Determine if an iframe is fully visible in the visual viewport
//   const isInViewport = (iframe) => {
//     const rect = iframe.getBoundingClientRect();
//     const windowHeight =
//       window.innerHeight || document.documentElement.clientHeight;
//     const windowWidth =
//       window.innerWidth || document.documentElement.clientWidth;

//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <= windowHeight &&
//       rect.right <= windowWidth
//     );
//   };

//   // Intersection Observer to load/unload iframes based on viewport height
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting) {
//             loadIframe(iframe);
//             if (isInViewport(iframe)) {
//               playIframe(iframe);
//             }
//           } else {
//             unloadIframe(iframe);
//             if (iframe === currentPlayingPlayer) {
//               pauseIframe(iframe);
//               currentPlayingPlayer = null;
//             }
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Function to handle play/pause based on visibility in visual viewport
//   const handleVisibility = () => {
//     iframesArray.forEach((iframe) => {
//       if (isInViewport(iframe) && iframe !== currentPlayingPlayer) {
//         playIframe(iframe);
//       } else if (!isInViewport(iframe) && iframe === currentPlayingPlayer) {
//         pauseIframe(iframe);
//         currentPlayingPlayer = null;
//       }
//     });
//   };

//   // Initialize lazy loading for iframes
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     window.addEventListener("scroll", handleVisibility);
//     window.addEventListener("resize", handleVisibility);
//     window.addEventListener("orientationchange", handleVisibility);
//   }

//   // Initial setup
//   handleVisibility();
// });

//plaiyng based on horizontal line
// document.addEventListener("DOMContentLoaded", function () {
//   let iframesArray = Array.from(document.querySelectorAll("iframe[data-src]"));
//   let lazyIframeObserver;
//   let currentPlayingPlayer = null;

//   // Function to load the iframe source
//   const loadIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to unload the iframe source
//   const unloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to play the iframe
//   const playIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       currentPlayingPlayer = iframe;
//       console.log(`Iframe playing: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to pause the iframe
//   const pauseIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Determine if an iframe intersects the horizontal line in the middle of the viewport
//   const isIntersectingMiddleLine = (iframe) => {
//     const rect = iframe.getBoundingClientRect();
//     const middleLineY =
//       (window.innerHeight || document.documentElement.clientHeight) / 2;

//     return rect.top <= middleLineY && rect.bottom >= middleLineY;
//   };

//   // Function to find and play the iframe that intersects the middle line
//   const updatePlayingIframe = () => {
//     let iframeToPlay = null;

//     iframesArray.forEach((iframe) => {
//       if (isIntersectingMiddleLine(iframe)) {
//         iframeToPlay = iframe;
//       }
//     });

//     if (iframeToPlay && iframeToPlay !== currentPlayingPlayer) {
//       if (currentPlayingPlayer) {
//         pauseIframe(currentPlayingPlayer);
//       }
//       playIframe(iframeToPlay);
//     } else if (!iframeToPlay && currentPlayingPlayer) {
//       pauseIframe(currentPlayingPlayer);
//       currentPlayingPlayer = null;
//     }
//   };

//   // Intersection Observer to load/unload iframes based on viewport height
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting) {
//             loadIframe(iframe);
//           } else {
//             if (iframe === currentPlayingPlayer) {
//               pauseIframe(iframe);
//               currentPlayingPlayer = null;
//             }
//             unloadIframe(iframe);
//           }
//         });
//         updatePlayingIframe();
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Function to handle play/pause based on visibility in visual viewport
//   const handleVisibility = () => {
//     updatePlayingIframe();
//   };

//   // Initialize lazy loading for iframes
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     window.addEventListener("scroll", handleVisibility);
//     window.addEventListener("resize", handleVisibility);
//     window.addEventListener("orientationchange", handleVisibility);
//   }

//   // Initial setup
//   handleVisibility();

//   // Add a visual representation of the middle line if it doesn't already exist
//   let middleLine = document.getElementById("middle-line");
//   if (!middleLine) {
//     middleLine = document.createElement("div");
//     middleLine.id = "middle-line";
//     document.body.appendChild(middleLine);
//   }
// });

//version 1.1
// document.addEventListener("DOMContentLoaded", function () {
//   let iframesArray = Array.from(document.querySelectorAll("iframe[data-src]"));
//   let lazyIframeObserver;
//   let currentPlayingPlayer = null;

//   // Function to load the iframe source
//   const loadIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to unload the iframe source
//   const unloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to play the iframe
//   const playIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       currentPlayingPlayer = iframe;
//       console.log(`Iframe playing: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to pause the iframe
//   const pauseIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Determine if an iframe intersects the middle line with buffer
//   const isIntersectingMiddleLine = (iframe) => {
//     const rect = iframe.getBoundingClientRect();
//     const viewportHeight =
//       window.innerHeight || document.documentElement.clientHeight;
//     const middleLineY = viewportHeight / 2;
//     const buffer = viewportHeight * 0.1; // 10% of the viewport height as buffer

//     return (
//       rect.top <= middleLineY + buffer && rect.bottom >= middleLineY - buffer
//     );
//   };

//   // Function to find and play the iframe that intersects the middle line
//   const updatePlayingIframe = () => {
//     let iframeToPlay = null;

//     iframesArray.forEach((iframe) => {
//       if (isIntersectingMiddleLine(iframe)) {
//         iframeToPlay = iframe;
//       }
//     });

//     if (iframeToPlay && iframeToPlay !== currentPlayingPlayer) {
//       if (currentPlayingPlayer) {
//         pauseIframe(currentPlayingPlayer);
//       }
//       playIframe(iframeToPlay);
//     } else if (!iframeToPlay && currentPlayingPlayer) {
//       pauseIframe(currentPlayingPlayer);
//       currentPlayingPlayer = null;
//     }
//   };

//   // Intersection Observer to load/unload iframes based on viewport height
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting) {
//             loadIframe(iframe);
//           } else {
//             if (iframe === currentPlayingPlayer) {
//               pauseIframe(iframe);
//               currentPlayingPlayer = null;
//             }
//             unloadIframe(iframe);
//           }
//         });
//         updatePlayingIframe();
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Function to handle play/pause based on visibility in visual viewport
//   const handleVisibility = () => {
//     updatePlayingIframe();
//   };

//   // Initialize lazy loading for iframes
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     window.addEventListener("scroll", handleVisibility);
//     window.addEventListener("resize", handleVisibility);
//     window.addEventListener("orientationchange", handleVisibility);
//   }

//   // Initial setup
//   handleVisibility();

//   // Add a visual representation of the middle line if it doesn't already exist
//   let middleLine = document.getElementById("middle-line");
//   if (!middleLine) {
//     middleLine = document.createElement("div");
//     middleLine.id = "middle-line";
//     document.body.appendChild(middleLine);
//   }
// });

//v 1.2
// document.addEventListener("DOMContentLoaded", function () {
//   let iframesArray = Array.from(document.querySelectorAll("iframe[data-src]"));
//   let lazyIframeObserver;
//   let currentPlayingPlayer = null;

//   // Function to load the iframe source
//   const loadIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to unload the iframe source
//   const unloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to play the iframe
//   const playIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       currentPlayingPlayer = iframe;
//       console.log(`Iframe playing: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to pause the iframe
//   const pauseIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Determine if an iframe intersects the middle line
//   const isIntersectingMiddleLine = (iframe) => {
//     const rect = iframe.getBoundingClientRect();
//     const viewportHeight =
//       window.innerHeight || document.documentElement.clientHeight;
//     const middleLineY = viewportHeight / 2;

//     return rect.top <= middleLineY && rect.bottom >= middleLineY;
//   };

//   // Function to find and play the iframe that intersects the middle line
//   const updatePlayingIframe = () => {
//     let iframeToPlay = null;

//     iframesArray.forEach((iframe) => {
//       if (isIntersectingMiddleLine(iframe)) {
//         iframeToPlay = iframe;
//       }
//     });

//     if (iframeToPlay && iframeToPlay !== currentPlayingPlayer) {
//       if (currentPlayingPlayer) {
//         pauseIframe(currentPlayingPlayer);
//       }
//       playIframe(iframeToPlay);
//     } else if (!iframeToPlay && currentPlayingPlayer) {
//       pauseIframe(currentPlayingPlayer);
//       currentPlayingPlayer = null;
//     }
//   };

//   // Intersection Observer to load/unload iframes based on viewport height
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting) {
//             loadIframe(iframe);
//           } else {
//             if (iframe === currentPlayingPlayer) {
//               pauseIframe(iframe);
//               currentPlayingPlayer = null;
//             }
//             unloadIframe(iframe);
//           }
//         });
//         updatePlayingIframe();
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Function to handle play/pause based on visibility in visual viewport
//   const handleVisibility = () => {
//     updatePlayingIframe();
//   };

//   // Initialize lazy loading for iframes
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     window.addEventListener("scroll", handleVisibility);
//     window.addEventListener("resize", handleVisibility);
//     window.addEventListener("orientationchange", handleVisibility);
//   }

//   // Initial setup
//   handleVisibility();

//   // Add a visual representation of the middle line if it doesn't already exist
//   let middleLine = document.getElementById("middle-line");
//   if (!middleLine) {
//     middleLine = document.createElement("div");
//     middleLine.id = "middle-line";
//     document.body.appendChild(middleLine);
//   }
// });

//v1.3
// document.addEventListener("DOMContentLoaded", function () {
//   let iframesArray = Array.from(document.querySelectorAll("iframe[data-src]"));
//   let lazyIframeObserver;
//   let currentPlayingPlayer = null;

//   // Function to load the iframe source
//   const loadIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to unload the iframe source
//   const unloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to play the iframe
//   const playIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       currentPlayingPlayer = iframe;
//       console.log(`Iframe playing: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to pause the iframe
//   const pauseIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Determine if an iframe intersects the middle line exactly
//   const isIntersectingMiddleLine = (iframe) => {
//     const rect = iframe.getBoundingClientRect();
//     const viewportHeight =
//       window.innerHeight || document.documentElement.clientHeight;
//     const middleLineY = viewportHeight / 2;

//     // Check if the middle line is within the top and bottom bounds of the iframe
//     return rect.top < middleLineY && rect.bottom > middleLineY;
//   };

//   // Function to find and play the iframe that intersects the middle line
//   const updatePlayingIframe = () => {
//     let iframeToPlay = null;

//     iframesArray.forEach((iframe) => {
//       if (isIntersectingMiddleLine(iframe)) {
//         iframeToPlay = iframe;
//       }
//     });

//     if (iframeToPlay && iframeToPlay !== currentPlayingPlayer) {
//       if (currentPlayingPlayer) {
//         pauseIframe(currentPlayingPlayer);
//       }
//       playIframe(iframeToPlay);
//     } else if (!iframeToPlay && currentPlayingPlayer) {
//       pauseIframe(currentPlayingPlayer);
//       currentPlayingPlayer = null;
//     }
//   };

//   // Intersection Observer to load/unload iframes based on viewport height
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting) {
//             loadIframe(iframe);
//           } else {
//             if (iframe === currentPlayingPlayer) {
//               pauseIframe(iframe);
//               currentPlayingPlayer = null;
//             }
//             unloadIframe(iframe);
//           }
//         });
//         updatePlayingIframe();
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Function to handle play/pause based on visibility in visual viewport
//   const handleVisibility = () => {
//     updatePlayingIframe();
//   };

//   // Initialize lazy loading for iframes
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     window.addEventListener("scroll", handleVisibility);
//     window.addEventListener("resize", handleVisibility);
//     window.addEventListener("orientationchange", handleVisibility);
//   }

//   // Initial setup
//   handleVisibility();

//   // Add a visual representation of the middle line if it doesn't already exist
//   let middleLine = document.getElementById("middle-line");
//   if (!middleLine) {
//     middleLine = document.createElement("div");
//     middleLine.id = "middle-line";
//     document.body.appendChild(middleLine);
//   }
// });

//v1.4
// document.addEventListener("DOMContentLoaded", function () {
//   let iframesArray = Array.from(document.querySelectorAll("iframe[data-src]"));
//   let lazyIframeObserver;
//   let currentPlayingPlayer = null;

//   // Function to load the iframe source
//   const loadIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to unload the iframe source
//   const unloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to play the iframe
//   const playIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       currentPlayingPlayer = iframe;
//       console.log(`Iframe playing: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to pause the iframe
//   const pauseIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Determine if an iframe intersects the middle line exactly
//   const isIntersectingMiddleLine = (iframe) => {
//     const rect = iframe.getBoundingClientRect();
//     const viewportHeight =
//       window.innerHeight || document.documentElement.clientHeight;
//     const middleLineY = viewportHeight / 2;

//     // Check if the middle line is within the top and bottom bounds of the iframe
//     return rect.top < middleLineY && rect.bottom > middleLineY;
//   };

//   // Function to find and play the iframe that intersects the middle line
//   const updatePlayingIframe = () => {
//     let iframeToPlay = null;

//     iframesArray.forEach((iframe) => {
//       if (isIntersectingMiddleLine(iframe)) {
//         iframeToPlay = iframe;
//       }
//     });

//     if (iframeToPlay && iframeToPlay !== currentPlayingPlayer) {
//       if (currentPlayingPlayer) {
//         pauseIframe(currentPlayingPlayer);
//       }
//       playIframe(iframeToPlay);
//     } else if (!iframeToPlay && currentPlayingPlayer) {
//       pauseIframe(currentPlayingPlayer);
//       currentPlayingPlayer = null;
//     }
//   };

//   // Intersection Observer to load/unload iframes based on viewport height
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting && isIntersectingMiddleLine(iframe)) {
//             loadIframe(iframe);
//           } else {
//             if (iframe === currentPlayingPlayer) {
//               pauseIframe(iframe);
//               currentPlayingPlayer = null;
//             }
//             unloadIframe(iframe);
//           }
//         });
//         updatePlayingIframe();
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Function to handle play/pause based on visibility in visual viewport
//   const handleVisibility = () => {
//     updatePlayingIframe();
//   };

//   // Initialize lazy loading for iframes
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     window.addEventListener("scroll", handleVisibility);
//     window.addEventListener("resize", handleVisibility);
//     window.addEventListener("orientationchange", handleVisibility);
//   }

//   // Initial setup
//   handleVisibility();

//   // Add a visual representation of the middle line if it doesn't already exist
//   let middleLine = document.getElementById("middle-line");
//   if (!middleLine) {
//     middleLine = document.createElement("div");
//     middleLine.id = "middle-line";
//     middleLine.style.position = "fixed";
//     middleLine.style.top = "50%";
//     middleLine.style.left = "0";
//     middleLine.style.width = "100%";
//     middleLine.style.height = "2px";
//     middleLine.style.backgroundColor = "red";
//     middleLine.style.zIndex = "9999";
//     middleLine.style.pointerEvents = "none"; // Ensure the line does not interfere with interactions
//     document.body.appendChild(middleLine);
//   }
// });

//v1.5
// document.addEventListener("DOMContentLoaded", function () {
//   let iframesArray = Array.from(document.querySelectorAll("iframe[data-src]"));
//   let lazyIframeObserver;
//   let currentPlayingPlayer = null;

//   // Function to load the iframe source
//   const loadIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to unload the iframe source
//   const unloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to play the iframe
//   const playIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       currentPlayingPlayer = iframe;
//       console.log(`Iframe playing: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to pause the iframe
//   const pauseIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Determine if an iframe intersects the middle line exactly
//   const isIntersectingMiddleLine = (iframe) => {
//     const rect = iframe.getBoundingClientRect();
//     const viewportHeight =
//       window.innerHeight || document.documentElement.clientHeight;
//     const middleLineY = viewportHeight / 2;

//     // Check if the middle line is within the top and bottom bounds of the iframe
//     return rect.top < middleLineY && rect.bottom > middleLineY;
//   };

//   // Function to find and play the iframe that intersects the middle line
//   const updatePlayingIframe = () => {
//     let iframeToPlay = null;

//     iframesArray.forEach((iframe) => {
//       if (isIntersectingMiddleLine(iframe)) {
//         iframeToPlay = iframe;
//       }
//     });

//     if (iframeToPlay && iframeToPlay !== currentPlayingPlayer) {
//       if (currentPlayingPlayer) {
//         pauseIframe(currentPlayingPlayer);
//       }
//       playIframe(iframeToPlay);
//     } else if (!iframeToPlay && currentPlayingPlayer) {
//       pauseIframe(currentPlayingPlayer);
//       currentPlayingPlayer = null;
//     }
//   };

//   // Intersection Observer to load/unload iframes based on viewport height and middle line intersection
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting && isIntersectingMiddleLine(iframe)) {
//             loadIframe(iframe);
//           } else {
//             if (iframe === currentPlayingPlayer) {
//               pauseIframe(iframe);
//               currentPlayingPlayer = null;
//             }
//             unloadIframe(iframe);
//           }
//         });
//         updatePlayingIframe();
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Function to handle play/pause based on visibility in visual viewport
//   const handleVisibility = () => {
//     updatePlayingIframe();
//   };

//   // Initialize lazy loading for iframes
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     window.addEventListener("scroll", handleVisibility);
//     window.addEventListener("resize", handleVisibility);
//     window.addEventListener("orientationchange", handleVisibility);
//   }

//   // Initial setup
//   handleVisibility();

//   // Add a visual representation of the middle line if it doesn't already exist
//   let middleLine = document.getElementById("middle-line");
//   if (!middleLine) {
//     middleLine = document.createElement("div");
//     middleLine.id = "middle-line";
//     middleLine.style.position = "fixed";
//     middleLine.style.top = "50%";
//     middleLine.style.left = "0";
//     middleLine.style.width = "100%";
//     middleLine.style.height = "2px";
//     middleLine.style.backgroundColor = "red";
//     middleLine.style.zIndex = "9999";
//     middleLine.style.pointerEvents = "none"; // Ensure the line does not interfere with interactions
//     document.body.appendChild(middleLine);
//   }
// });

//v1.6 has line
// document.addEventListener("DOMContentLoaded", function () {
//   let iframesArray = Array.from(document.querySelectorAll("iframe[data-src]"));
//   let lazyIframeObserver;
//   let currentPlayingPlayer = null;

//   // Function to load the iframe source
//   const loadIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to unload the iframe source
//   const unloadIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.src = "";
//       iframe.classList.add("lazy-load");
//       iframe.dataset.loaded = "false";
//       console.log(`Iframe unloaded: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to play the iframe
//   const playIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       currentPlayingPlayer = iframe;
//       console.log(`Iframe playing: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to pause the iframe
//   const pauseIframe = (iframe) => {
//     if (iframe && iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Determine if an iframe intersects the middle line exactly
//   const isIntersectingMiddleLine = (iframe) => {
//     const rect = iframe.getBoundingClientRect();
//     const viewportHeight =
//       window.innerHeight || document.documentElement.clientHeight;
//     const middleLineY = viewportHeight / 2;

//     // Check if the middle line is within the top and bottom bounds of the iframe
//     return rect.top < middleLineY && rect.bottom > middleLineY;
//   };

//   // Intersection Observer to load/unload iframes based on viewport height and middle line intersection
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting && isIntersectingMiddleLine(iframe)) {
//             loadIframe(iframe); // Load iframe only when it intersects with the middle line
//             playIframe(iframe); // Ensure it plays immediately when loaded
//           } else {
//             if (iframe === currentPlayingPlayer) {
//               pauseIframe(iframe);
//               currentPlayingPlayer = null;
//             }
//             unloadIframe(iframe);
//           }
//         });
//       },
//       {
//         root: null,
//         rootMargin: "0px",
//         threshold: 0.5, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Function to handle play/pause based on visibility in visual viewport
//   const handleVisibility = () => {
//     // Check and update playing state based on current visibility
//     iframesArray.forEach((iframe) => {
//       if (isIntersectingMiddleLine(iframe)) {
//         playIframe(iframe);
//       } else {
//         if (iframe === currentPlayingPlayer) {
//           pauseIframe(iframe);
//           currentPlayingPlayer = null;
//         }
//       }
//     });
//   };

//   // Initialize lazy loading for iframes
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     window.addEventListener("scroll", handleVisibility);
//     window.addEventListener("resize", handleVisibility);
//     window.addEventListener("orientationchange", handleVisibility);
//   }

//   // Initial setup
//   handleVisibility();

//   // Add a visual representation of the middle line if it doesn't already exist
//   let middleLine = document.getElementById("middle-line");
//   if (!middleLine) {
//     middleLine = document.createElement("div");
//     middleLine.id = "middle-line";
//     middleLine.style.position = "fixed";
//     middleLine.style.top = "50%";
//     middleLine.style.left = "0";
//     middleLine.style.width = "100%";
//     middleLine.style.height = "2px";
//     middleLine.style.backgroundColor = "red";
//     middleLine.style.zIndex = "9999";
//     middleLine.style.pointerEvents = "none"; // Ensure the line does not interfere with interactions
//     document.body.appendChild(middleLine);
//   }
// });

//v1.7 removed the line here new conde
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   let lazyIframeObserver;

//   // Function to load the iframe source and play video
//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }

//     // Play the Vimeo video programmatically
//     playIframe(iframe);
//   };

//   // Function to pause the iframe video
//   const pauseIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Intersection Observer to load/unload and play/pause iframes based on the line intersection
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting) {
//             loadAndPlayIframe(iframe);
//           } else {
//             pauseIframe(iframe);
//           }
//         });
//       },
//       {
//         root: null, // Intersection with the entire viewport
//         rootMargin: "0px",
//         threshold: 0.5, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Initialize lazy loading and intersection observer
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     iframesArray.forEach((iframe) => {
//       loadAndPlayIframe(iframe); // Directly load and play on non-supporting browsers
//     });
//   }
// });
//v1.8
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const horizontalLine = document.querySelector(".horizontal-line");
//   let lazyIframeObserver;

//   // Function to load the iframe source and play video
//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }

//     // Play the Vimeo video programmatically
//     playIframe(iframe);
//   };

//   // Function to pause the iframe video
//   const pauseIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Intersection Observer to load/unload and play/pause iframes based on the line intersection
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           if (entry.isIntersecting) {
//             loadAndPlayIframe(iframe);
//           } else {
//             pauseIframe(iframe);
//           }
//         });
//       },
//       {
//         root: null, // Intersection with the entire viewport
//         rootMargin: "0px",
//         threshold: 0.1, // Adjust threshold as needed
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Initialize lazy loading and intersection observer
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     iframesArray.forEach((iframe) => {
//       loadAndPlayIframe(iframe); // Directly load and play on non-supporting browsers
//     });
//   }

//   // Optional: Visualize the horizontal line for testing
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
//v1.9 removed the viewport loading and unloading
// document.addEventListener("DOMContentLoaded", function () {
//   const iframesArray = Array.from(
//     document.querySelectorAll("iframe[data-src]")
//   );
//   const horizontalLine = document.querySelector(".horizontal-line");
//   let lazyIframeObserver;

//   // Function to load the iframe source and play video
//   const loadAndPlayIframe = (iframe) => {
//     if (iframe.dataset.loaded !== "true") {
//       iframe.src = iframe.dataset.src;
//       iframe.classList.remove("lazy-load");
//       iframe.dataset.loaded = "true";
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);
//     }

//     // Play the Vimeo video programmatically
//     playIframe(iframe);
//   };

//   // Function to pause the iframe video
//   const pauseIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Intersection Observer to load/unload and play/pause iframes based on the line intersection
//   const createLazyLoadObserver = () => {
//     lazyIframeObserver = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const iframe = entry.target;
//           const iframeRect = iframe.getBoundingClientRect();
//           const lineRect = horizontalLine.getBoundingClientRect();

//           // Check if the iframe's center intersects with the line
//           const iframeCenterY = iframeRect.top + iframeRect.height / 2;
//           const lineCenterY = lineRect.top + lineRect.height / 2;

//           if (Math.abs(iframeCenterY - lineCenterY) <= iframeRect.height / 2) {
//             // Load and play only if the iframe's center intersects with the line
//             loadAndPlayIframe(iframe);
//           } else {
//             // Pause if the iframe does not intersect with the line
//             pauseIframe(iframe);
//           }
//         });
//       },
//       {
//         root: null, // Intersection with the entire viewport
//         rootMargin: "2px",
//         threshold: 0.05, // Fully intersects when the center aligns with the line
//       }
//     );

//     iframesArray.forEach((iframe) => {
//       lazyIframeObserver.observe(iframe);
//     });
//   };

//   // Initialize lazy loading and intersection observer
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     iframesArray.forEach((iframe) => {
//       loadAndPlayIframe(iframe); // Directly load and play on non-supporting browsers
//     });
//   }

//   // Optional: Visualize the horizontal line for testing
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
//v2.0 changed how video loads in cofnriemd hte viewport line detection works
//use this as the base code. it detects the iframes perfetly
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
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//     }
//   };

//   const pauseIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to check if the iframe intersects with the horizontal line
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

//   // Function to handle scroll events
//   const handleScroll = () => {
//     iframesArray.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting) {
//         // Iframe is intersecting with the line, perform actions here
//         console.log(`Iframe intersecting: ${iframe.dataset.src}`);
//         // Add logic to load, play, pause, unload etc.
//       }
//     });
//   };

//   // Event listener for scroll events
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();

//   const handleIntersection = () => {
//     iframesArray.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting && iframe.dataset.loaded !== "true") {
//         loadAndPlayIframe(iframe);
//       } else if (!isIntersecting && iframe.dataset.loaded === "true") {
//         pauseIframe(iframe);
//       }
//     });
//   };

//   // Intersection Observer to detect when the iframe's center intersects with the line
//   const observerOptions = {
//     root: null,
//     rootMargin: "-50px 0px 0px 0px",
//     threshold: 0, // Trigger when the center of the iframe aligns with the line
//   };

//   const lazyIframeObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const iframe = entry.target;
//       const isIntersecting = checkIntersection(iframe);

//       if (isIntersecting && iframe.dataset.loaded !== "true") {
//         loadAndPlayIframe(iframe);
//       } else if (!isIntersecting && iframe.dataset.loaded === "true") {
//         pauseIframe(iframe);
//       }
//     });
//   }, observerOptions);

//   iframesArray.forEach((iframe) => {
//     lazyIframeObserver.observe(iframe);
//   });

//   // Optional: Visualize the horizontal line for testing
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
//merged with loading script
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
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//     }
//   };

//   const pauseIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to check if the iframe intersects with the horizontal line
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

//   // Function to handle scroll events
//   const handleScroll = () => {
//     iframesArray.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting) {
//         // Iframe is intersecting with the line, perform actions here
//         console.log(`Iframe intersecting: ${iframe.dataset.src}`);
//         loadAndPlayIframe(iframe);
//       } else {
//         // Iframe is not intersecting with the line, pause it
//         pauseIframe(iframe);
//       }
//     });
//   };

//   // Event listener for scroll events
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();

//   // Intersection Observer to detect when the iframe's center intersects with the line
//   const observerOptions = {
//     root: null,
//     rootMargin: "-50px 0px 0px 0px",
//     threshold: 0, // Trigger when the center of the iframe aligns with the line
//   };

//   const lazyIframeObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const iframe = entry.target;
//       const isIntersecting = checkIntersection(iframe);

//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseIframe(iframe);
//       }
//     });
//   }, observerOptions);

//   // Observe each iframe with the Intersection Observer
//   iframesArray.forEach((iframe) => {
//     lazyIframeObserver.observe(iframe);
//   });

//   // Optional: Visualize the horizontal line for testing
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
//v2.1 loading on scroll
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
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//     }
//   };

//   const pauseIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to check if the iframe intersects with the horizontal line
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

//   // Function to handle scroll events
//   const handleScroll = () => {
//     iframesArray.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting) {
//         // Iframe is intersecting with the line, perform actions here
//         console.log(`Iframe intersecting: ${iframe.dataset.src}`);
//         loadAndPlayIframe(iframe);
//       } else {
//         // Iframe is not intersecting with the line, pause it
//         pauseIframe(iframe);
//       }
//     });
//   };

//   // Event listener for scroll events
//   window.addEventListener("scroll", handleScroll);

//   // Initial check on page load
//   handleScroll();

//   // Intersection Observer to detect when the iframe's center intersects with the line
//   const observerOptions = {
//     root: null,
//     rootMargin: "-50px 0px 0px 0px",
//     threshold: 0, // Trigger when the center of the iframe aligns with the line
//   };

//   const lazyIframeObserver = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const iframe = entry.target;
//       const isIntersecting = checkIntersection(iframe);

//       if (isIntersecting) {
//         loadAndPlayIframe(iframe);
//       } else {
//         pauseIframe(iframe);
//       }
//     });
//   }, observerOptions);

//   // Observe each iframe with the Intersection Observer
//   iframesArray.forEach((iframe) => {
//     lazyIframeObserver.observe(iframe);
//   });

//   // Optional: Visualize the horizontal line for testing
//   if (horizontalLine) {
//     console.log(
//       "Horizontal line position:",
//       horizontalLine.getBoundingClientRect().top
//     );
//   }
// });
//v.2.2
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
//       console.log(`Iframe loaded: ${iframe.dataset.src}`);

//       // Play the Vimeo video programmatically
//       iframe.contentWindow.postMessage('{"method":"play"}', "*");
//       console.log(`Iframe playing: ${iframe.dataset.src}`);
//     }
//   };

//   const pauseIframe = (iframe) => {
//     if (iframe.dataset.loaded === "true") {
//       iframe.contentWindow.postMessage('{"method":"pause"}', "*");
//       console.log(`Iframe paused: ${iframe.dataset.src}`);
//     }
//   };

//   // Function to check if the iframe intersects with the horizontal line
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

//   // Function to handle scroll events
//   const handleScroll = () => {
//     iframesArray.forEach((iframe) => {
//       const isIntersecting = checkIntersection(iframe);
//       if (isIntersecting) {
//         // Iframe is intersecting with the line, load and play
//         loadAndPlayIframe(iframe);
//       } else {
//         // Iframe is not intersecting with the line, pause
//         pauseIframe(iframe);
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
//v2.3
document.addEventListener("DOMContentLoaded", function () {
  const iframesArray = Array.from(
    document.querySelectorAll("iframe[data-src]")
  );
  const horizontalLine = document.querySelector(".horizontal-line");

  const loadAndPlayIframe = (iframe) => {
    if (iframe.dataset.loaded !== "true") {
      iframe.src = iframe.dataset.src;
      iframe.classList.remove("lazy-load");
      iframe.dataset.loaded = "true";
      console.log(`Iframe loaded: ${iframe.dataset.src}`);

      // Play the Vimeo video programmatically
      iframe.contentWindow.postMessage('{"method":"play"}', "*");
    }
  };

  const pauseAndUnloadIframe = (iframe) => {
    if (iframe.dataset.loaded === "true") {
      // Pause the Vimeo video
      iframe.contentWindow.postMessage('{"method":"pause"}', "*");
      console.log(`Iframe paused: ${iframe.dataset.src}`);

      // Unload the iframe by resetting its src
      iframe.src = "";
      iframe.classList.add("lazy-load");
      iframe.dataset.loaded = "false";
      console.log(`Iframe unloaded: ${iframe.dataset.src}`);
    }
  };

  const checkIntersection = (iframe) => {
    const iframeRect = iframe.getBoundingClientRect();
    const lineRect = horizontalLine.getBoundingClientRect();

    // Calculate iframe's top and bottom positions relative to the viewport
    const iframeTop = iframeRect.top;
    const iframeBottom = iframeRect.bottom;

    // Calculate line's top and bottom positions relative to the viewport
    const lineTop = lineRect.top;
    const lineBottom = lineRect.bottom;

    // Check if the iframe's top is below or at the line's bottom AND
    // if the iframe's bottom is above or at the line's top
    return iframeBottom >= lineTop && iframeTop <= lineBottom;
  };

  const handleScroll = () => {
    iframesArray.forEach((iframe) => {
      const isIntersecting = checkIntersection(iframe);
      if (isIntersecting) {
        loadAndPlayIframe(iframe);
      } else {
        pauseAndUnloadIframe(iframe);
      }
    });
  };

  // Event listener for scroll events
  window.addEventListener("scroll", handleScroll);

  // Initial check on page load
  handleScroll();

  // Optional: Visualize the horizontal line for testing
  if (horizontalLine) {
    console.log(
      "Horizontal line position:",
      horizontalLine.getBoundingClientRect().top
    );
  }
});
