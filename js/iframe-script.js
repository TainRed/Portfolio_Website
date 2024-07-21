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
      // console.log(`Iframe loaded: ${iframe.dataset.src}`);

      // Play the Vimeo video programmatically
      iframe.contentWindow.postMessage('{"method":"play"}', "*");
    }
  };

  const pauseAndUnloadIframe = (iframe) => {
    if (iframe.dataset.loaded === "true") {
      // Pause the Vimeo video
      iframe.contentWindow.postMessage('{"method":"pause"}', "*");
      // console.log(`Iframe paused: ${iframe.dataset.src}`);

      // Unload the iframe by resetting its src
      iframe.src = "";
      iframe.classList.add("lazy-load");
      iframe.dataset.loaded = "false";
      // console.log(`Iframe unloaded: ${iframe.dataset.src}`);
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
