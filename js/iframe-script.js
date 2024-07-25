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
