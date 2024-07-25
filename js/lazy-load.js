//new third try , re enable the observer
// document.addEventListener("DOMContentLoaded", function () {
//   let lazyImages = document.querySelectorAll("img.lazy");
//   let imagesArray = Array.from(lazyImages);
//   let lazyImageObserver;
//   let loadedImages = [];

//   const loadImage = (lazyImage) => {
//     if (lazyImage.dataset.loaded !== "true") {
//       lazyImage.src = lazyImage.dataset.src;
//       lazyImage.classList.remove("lazy");
//       lazyImage.classList.add("lazy-load");
//       lazyImage.dataset.loaded = "true";
//       loadedImages.push(lazyImage);
//       console.log(`Image loaded: ${lazyImage.dataset.src}`);
//     }
//   };

//   const unloadImage = (lazyImage) => {
//     if (lazyImage.dataset.loaded === "true") {
//       lazyImage.src = "";
//       lazyImage.classList.remove("lazy-load");
//       lazyImage.classList.add("lazy");
//       lazyImage.dataset.loaded = "false";
//       loadedImages = loadedImages.filter((img) => img !== lazyImage);
//       console.log(`Image unloaded: ${lazyImage.dataset.src}`);
//     }
//   };

//   const updateRootMargin = () => {
//     const viewportHeight = Math.min(
//       document.documentElement.clientHeight,
//       window.innerHeight
//     );
//     let rootMarginFraction;

//     if (viewportHeight <= 600) {
//       rootMarginFraction = 0.5; // Adjust for smaller screens
//       console.log("we are using 599");
//     } else if (viewportHeight <= 800) {
//       rootMarginFraction = 0.75; // Adjust for medium-sized screens
//       console.log("we are using 799");
//     } else {
//       rootMarginFraction = 1.0; // Default for larger screens
//       console.log("we are using default");
//     }

//     const rootMarginValue = `${Math.floor(
//       viewportHeight * rootMarginFraction
//     )}px 0px`;

//     console.log(`Current rootMargin: ${rootMarginValue}`);
//     return rootMarginValue;
//   };

//   const createLazyLoadObserver = () => {
//     lazyImageObserver = new IntersectionObserver(
//       (entries, observer) => {
//         entries.forEach((entry) => {
//           const lazyImage = entry.target;
//           if (entry.isIntersecting) {
//             loadImage(lazyImage);
//           } else {
//             unloadImage(lazyImage);
//           }
//         });
//       },
//       {
//         rootMargin: updateRootMargin(),
//       }
//     );

//     imagesArray.forEach((lazyImage) => {
//       lazyImageObserver.observe(lazyImage);
//     });
//   };

//   const checkLoadUnload = () => {
//     const viewportHeight = window.innerHeight;
//     const currentScroll = window.scrollY;
//     const loadRangeTop = Math.max(0, currentScroll - viewportHeight);
//     const loadRangeBottom = currentScroll + viewportHeight * 2;

//     imagesArray.forEach((lazyImage) => {
//       const rect = lazyImage.getBoundingClientRect();
//       const imageTop = rect.top + window.scrollY;
//       const imageBottom = rect.bottom + window.scrollY;

//       if (imageBottom >= loadRangeTop && imageTop <= loadRangeBottom) {
//         loadImage(lazyImage);
//       } else {
//         unloadImage(lazyImage);
//       }
//     });
//   };

//   const disconnectLazyLoadObserver = () => {
//     if (lazyImageObserver) {
//       imagesArray.forEach((lazyImage) => {
//         lazyImageObserver.unobserve(lazyImage);
//       });
//       lazyImageObserver.disconnect();
//       lazyImageObserver = null;
//     }
//   };

//   const handleNavigation = (event) => {
//     event.preventDefault();
//     const targetId = event.currentTarget.getAttribute("href").substring(1); // Get target section id
//     const targetSection = document.getElementById(targetId); // Get target section element

//     if (targetSection) {
//       disconnectLazyLoadObserver(); // Disconnect observer before navigating

//       // Scroll to the target section
//       window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: "smooth",
//       });

//       // Reinitialize the observer after scrolling
//       setTimeout(() => {
//         createLazyLoadObserver();
//       }, 1000); // Adjust timeout as needed based on animation duration
//     }
//   };

//   // Initialize lazy loading
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     document.addEventListener("scroll", checkLoadUnload);
//     window.addEventListener("resize", () => {
//       lazyImageObserver.disconnect();
//       lazyImageObserver = null;
//       createLazyLoadObserver();
//       checkLoadUnload();
//     });
//     window.addEventListener("orientationchange", () => {
//       lazyImageObserver.disconnect();
//       lazyImageObserver = null;
//       createLazyLoadObserver();
//       checkLoadUnload();
//     });
//     checkLoadUnload(); // Initial check
//   }

//   // Attach event listeners to navigation links
//   const navLinks = document.querySelectorAll(".js-scroll-trigger");
//   navLinks.forEach((link) => {
//     link.addEventListener("click", handleNavigation);
//   });
// });
//before redoing lazy laoding on nav
document.addEventListener("DOMContentLoaded", function () {
  let lazyImages = document.querySelectorAll("img.lazy");
  let imagesArray = Array.from(lazyImages);
  let lazyImageObserver;

  const loadImage = (lazyImage) => {
    if (lazyImage.dataset.loaded !== "true") {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazy");
      lazyImage.classList.add("lazy-load");
      lazyImage.dataset.loaded = "true";
      console.log(`Image loaded: ${lazyImage.dataset.src}`);
    }
  };

  const unloadImage = (lazyImage) => {
    if (lazyImage.dataset.loaded === "true") {
      lazyImage.src = "";
      lazyImage.classList.remove("lazy-load");
      lazyImage.classList.add("lazy");
      lazyImage.dataset.loaded = "false";
      console.log(`Image unloaded: ${lazyImage.dataset.src}`);
    }
  };

  const updateRootMargin = () => {
    const viewportHeight = Math.min(
      document.documentElement.clientHeight,
      window.innerHeight
    );
    let rootMarginFraction;

    if (viewportHeight <= 600) {
      rootMarginFraction = 1.15; // Adjust for smaller screens
      console.log("Using root margin for viewport <= 600px");
    } else if (viewportHeight <= 800) {
      rootMarginFraction = 1.5; // Adjust for medium-sized screens
      console.log("Using root margin for viewport <= 800px");
    } else {
      rootMarginFraction = 2; // Default for larger screens
      console.log("Using root margin for larger viewports");
    }

    const rootMarginValue = `${Math.floor(
      viewportHeight * rootMarginFraction
    )}px 0px`;
    console.log(`Current rootMargin: ${rootMarginValue}`);
    return rootMarginValue;
  };

  const createLazyLoadObserver = () => {
    lazyImageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          const lazyImage = entry.target;
          if (entry.isIntersecting) {
            loadImage(lazyImage);
          } else {
            unloadImage(lazyImage);
          }
        });
      },
      {
        rootMargin: updateRootMargin(),
      }
    );

    imagesArray.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  };

  const checkLoadUnload = () => {
    const viewportHeight = window.innerHeight;
    const currentScroll = window.scrollY;
    const loadRangeTop = Math.max(0, currentScroll - viewportHeight);
    const loadRangeBottom = currentScroll + viewportHeight * 2;

    imagesArray.forEach((lazyImage) => {
      const rect = lazyImage.getBoundingClientRect();
      const imageTop = rect.top + window.scrollY;
      const imageBottom = rect.bottom + window.scrollY;

      if (imageBottom >= loadRangeTop && imageTop <= loadRangeBottom) {
        loadImage(lazyImage);
      } else {
        unloadImage(lazyImage);
      }
    });
  };

  const disconnectLazyLoadObserver = () => {
    if (lazyImageObserver) {
      imagesArray.forEach((lazyImage) => {
        lazyImageObserver.unobserve(lazyImage);
      });
      lazyImageObserver.disconnect();
      lazyImageObserver = null;
    }
  };

  const handleNavigation = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1); // Get target section id
    const targetSection = document.getElementById(targetId); // Get target section element

    if (targetSection) {
      disconnectLazyLoadObserver(); // Disconnect observer before navigating

      // Scroll to the target section
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });

      // Reinitialize the observer after scrolling
      setTimeout(() => {
        createLazyLoadObserver();
      }, 1000); // Adjust timeout as needed based on animation duration
    }
  };

  // Initialize lazy loading
  if ("IntersectionObserver" in window) {
    createLazyLoadObserver();
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    document.addEventListener("scroll", checkLoadUnload);
    window.addEventListener("resize", () => {
      lazyImageObserver.disconnect();
      lazyImageObserver = null;
      createLazyLoadObserver();
      checkLoadUnload();
    });
    window.addEventListener("orientationchange", () => {
      lazyImageObserver.disconnect();
      lazyImageObserver = null;
      createLazyLoadObserver();
      checkLoadUnload();
    });
    checkLoadUnload(); // Initial check
  }

  // Attach event listeners to navigation links
  const navLinks = document.querySelectorAll(".js-scroll-trigger");
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavigation);
  });
});
// document.addEventListener("DOMContentLoaded", function () {
//   let lazyImages = document.querySelectorAll("img.lazy");
//   let imagesArray = Array.from(lazyImages);
//   let lazyImageObserver;

//   const loadImage = (lazyImage) => {
//     if (lazyImage.dataset.loaded !== "true") {
//       lazyImage.src = lazyImage.dataset.src;
//       lazyImage.classList.remove("lazy");
//       lazyImage.classList.add("lazy-load");
//       lazyImage.dataset.loaded = "true";
//       console.log(`Image loaded: ${lazyImage.dataset.src}`);
//     }
//   };

//   const unloadImage = (lazyImage) => {
//     if (lazyImage.dataset.loaded === "true") {
//       lazyImage.src = "";
//       lazyImage.classList.remove("lazy-load");
//       lazyImage.classList.add("lazy");
//       lazyImage.dataset.loaded = "false";
//       console.log(`Image unloaded: ${lazyImage.dataset.src}`);
//     }
//   };

//   const updateRootMargin = () => {
//     const viewportHeight = Math.min(
//       document.documentElement.clientHeight,
//       window.innerHeight
//     );
//     let rootMarginFraction;

//     if (viewportHeight <= 600) {
//       rootMarginFraction = 0.5; // Adjust for smaller screens
//       console.log("Using root margin for viewport <= 600px");
//     } else if (viewportHeight <= 800) {
//       rootMarginFraction = 0.75; // Adjust for medium-sized screens
//       console.log("Using root margin for viewport <= 800px");
//     } else {
//       rootMarginFraction = 1.0; // Default for larger screens
//       console.log("Using root margin for larger viewports");
//     }

//     const rootMarginValue = `${Math.floor(
//       viewportHeight * rootMarginFraction
//     )}px 0px`;
//     console.log(`Current rootMargin: ${rootMarginValue}`);
//     return rootMarginValue;
//   };

//   const createLazyLoadObserver = () => {
//     lazyImageObserver = new IntersectionObserver(
//       (entries, observer) => {
//         entries.forEach((entry) => {
//           const lazyImage = entry.target;
//           if (entry.isIntersecting) {
//             loadImage(lazyImage);
//           } else {
//             unloadImage(lazyImage);
//           }
//         });
//       },
//       {
//         rootMargin: updateRootMargin(),
//       }
//     );

//     imagesArray.forEach((lazyImage) => {
//       lazyImageObserver.observe(lazyImage);
//     });
//   };

//   const checkLoadUnload = () => {
//     const viewportHeight = window.innerHeight;
//     const currentScroll = window.scrollY;
//     const loadRangeTop = Math.max(0, currentScroll - viewportHeight);
//     const loadRangeBottom = currentScroll + viewportHeight * 2;

//     imagesArray.forEach((lazyImage) => {
//       const rect = lazyImage.getBoundingClientRect();
//       const imageTop = rect.top + window.scrollY;
//       const imageBottom = rect.bottom + window.scrollY;

//       if (imageBottom >= loadRangeTop && imageTop <= loadRangeBottom) {
//         loadImage(lazyImage);
//       } else {
//         unloadImage(lazyImage);
//       }
//     });
//   };

//   const disconnectLazyLoadObserver = () => {
//     if (lazyImageObserver) {
//       imagesArray.forEach((lazyImage) => {
//         lazyImageObserver.unobserve(lazyImage);
//       });
//       lazyImageObserver.disconnect();
//       lazyImageObserver = null;
//     }
//   };

//   const handleNavigation = (event) => {
//     event.preventDefault();
//     const targetId = event.currentTarget.getAttribute("href").substring(1); // Get target section id
//     const targetSection = document.getElementById(targetId); // Get target section element

//     if (targetSection) {
//       disconnectLazyLoadObserver(); // Disconnect observer before navigating

//       // Scroll to the target section
//       window.scrollTo({
//         top: targetSection.offsetTop,
//         behavior: "smooth",
//       });

//       // Reinitialize the observer after scrolling
//       setTimeout(() => {
//         createLazyLoadObserver();
//       }, 1000); // Adjust timeout as needed based on animation duration
//     }
//   };

//   // Initialize lazy loading
//   if ("IntersectionObserver" in window) {
//     createLazyLoadObserver();
//   } else {
//     // Fallback for browsers that do not support IntersectionObserver
//     document.addEventListener("scroll", checkLoadUnload);
//     window.addEventListener("resize", () => {
//       lazyImageObserver.disconnect();
//       lazyImageObserver = null;
//       createLazyLoadObserver();
//       checkLoadUnload();
//     });
//     window.addEventListener("orientationchange", () => {
//       lazyImageObserver.disconnect();
//       lazyImageObserver = null;
//       createLazyLoadObserver();
//       checkLoadUnload();
//     });
//     checkLoadUnload(); // Initial check
//   }

//   // Attach event listeners to navigation links
//   const navLinks = document.querySelectorAll(".js-scroll-trigger");
//   navLinks.forEach((link) => {
//     link.addEventListener("click", handleNavigation);
//   });
// });
