document.addEventListener("DOMContentLoaded", function () {
  let lazyImages = document.querySelectorAll("img.lazy");
  let imagesArray = Array.from(lazyImages);
  let lazyImageObserver;
  let loadedImages = [];

  const loadImage = (lazyImage) => {
    if (lazyImage.dataset.loaded !== "true") {
      lazyImage.src = lazyImage.dataset.src;
      lazyImage.classList.remove("lazy");
      lazyImage.classList.add("lazy-load");
      lazyImage.dataset.loaded = "true";
      loadedImages.push(lazyImage);
      console.log(`Image loaded: ${lazyImage.dataset.src}`);
    }
  };

  const unloadImage = (lazyImage) => {
    if (lazyImage.dataset.loaded === "true") {
      lazyImage.src = "";
      lazyImage.classList.remove("lazy-load");
      lazyImage.classList.add("lazy");
      lazyImage.dataset.loaded = "false";
      loadedImages = loadedImages.filter((img) => img !== lazyImage);
      console.log(`Image unloaded: ${lazyImage.dataset.src}`);
    }
  };

  const createLazyLoadObserver = () => {
    const viewportHeight = window.innerHeight;
    const rootMarginValue = `${viewportHeight * 2}px 0px ${
      viewportHeight * 2
    }px 0px`;

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
        rootMargin: rootMarginValue,
      }
    );

    imagesArray.forEach((lazyImage) => {
      lazyImageObserver.observe(lazyImage);
    });
  };

  // Initialize lazy loading
  if ("IntersectionObserver" in window) {
    createLazyLoadObserver();
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    const checkLoadUnload = () => {
      const viewportHeight = window.innerHeight;
      const currentScroll = window.pageYOffset;
      const loadRangeTop = Math.max(0, currentScroll - viewportHeight * 2);
      const loadRangeBottom = currentScroll + viewportHeight * 2;

      imagesArray.forEach((lazyImage) => {
        const rect = lazyImage.getBoundingClientRect();
        const imageTop = rect.top + currentScroll;
        const imageBottom = rect.bottom + currentScroll;

        if (imageBottom >= loadRangeTop && imageTop <= loadRangeBottom) {
          loadImage(lazyImage);
        } else {
          unloadImage(lazyImage);
        }
      });
    };

    document.addEventListener("scroll", checkLoadUnload);
    window.addEventListener("resize", checkLoadUnload);
    window.addEventListener("orientationchange", checkLoadUnload);
    checkLoadUnload(); // Initial check
  }
});
