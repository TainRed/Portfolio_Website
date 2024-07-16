// new precise use as base
document.addEventListener("DOMContentLoaded", function () {
  let iframesArray = Array.from(document.querySelectorAll("iframe[data-src]"));
  let lazyIframeObserver;
  let currentPlayingPlayer = null;

  // Function to load the iframe source
  const loadIframe = (iframe) => {
    if (iframe.dataset.loaded !== "true") {
      iframe.src = iframe.dataset.src;
      iframe.classList.remove("lazy-load");
      iframe.dataset.loaded = "true";
      console.log(`Iframe loaded: ${iframe.dataset.src}`);
    }
  };

  // Function to unload the iframe source
  const unloadIframe = (iframe) => {
    if (iframe.dataset.loaded === "true") {
      iframe.src = "";
      iframe.classList.add("lazy-load");
      iframe.dataset.loaded = "false";
      console.log(`Iframe unloaded: ${iframe.dataset.src}`);
    }
  };

  // Function to play the iframe
  const playIframe = (iframe) => {
    if (iframe && iframe.dataset.loaded === "true") {
      iframe.contentWindow.postMessage('{"method":"play"}', "*");
      currentPlayingPlayer = iframe;
      console.log(`Iframe playing: ${iframe.dataset.src}`);
    }
  };

  // Function to pause the iframe
  const pauseIframe = (iframe) => {
    if (iframe && iframe.dataset.loaded === "true") {
      iframe.contentWindow.postMessage('{"method":"pause"}', "*");
      console.log(`Iframe paused: ${iframe.dataset.src}`);
    }
  };

  // Determine if an iframe is fully visible in the visual viewport
  const isInViewport = (iframe) => {
    const rect = iframe.getBoundingClientRect();
    const windowHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
      window.innerWidth || document.documentElement.clientWidth;

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= windowHeight &&
      rect.right <= windowWidth
    );
  };

  // Intersection Observer to load/unload iframes based on viewport height
  const createLazyLoadObserver = () => {
    lazyIframeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const iframe = entry.target;
          if (entry.isIntersecting) {
            loadIframe(iframe);
            if (isInViewport(iframe)) {
              playIframe(iframe);
            }
          } else {
            unloadIframe(iframe);
            if (iframe === currentPlayingPlayer) {
              pauseIframe(iframe);
              currentPlayingPlayer = null;
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Adjust threshold as needed
      }
    );

    iframesArray.forEach((iframe) => {
      lazyIframeObserver.observe(iframe);
    });
  };

  // Function to handle play/pause based on visibility in visual viewport
  const handleVisibility = () => {
    iframesArray.forEach((iframe) => {
      if (isInViewport(iframe) && iframe !== currentPlayingPlayer) {
        playIframe(iframe);
      } else if (!isInViewport(iframe) && iframe === currentPlayingPlayer) {
        pauseIframe(iframe);
        currentPlayingPlayer = null;
      }
    });
  };

  // Initialize lazy loading for iframes
  if ("IntersectionObserver" in window) {
    createLazyLoadObserver();
  } else {
    // Fallback for browsers that do not support IntersectionObserver
    window.addEventListener("scroll", handleVisibility);
    window.addEventListener("resize", handleVisibility);
    window.addEventListener("orientationchange", handleVisibility);
  }

  // Initial setup
  handleVisibility();
});
