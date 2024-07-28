// {// document.addEventListener("DOMContentLoaded", function () {
// //   const players = {};

// //   // Initialize Vimeo players and ensure they are ready
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     const iframe = section.querySelector(".polar-iframe-container iframe");
// //     if (iframe) {
// //       const player = new Vimeo.Player(iframe);
// //       players[iframe.id] = player;

// //       // Ensure the player is ready before interacting
// //       player.on("loaded", () => {
// //         console.log(`Player for ${iframe.id} is ready`);
// //         player
// //           .play()
// //           .then(() => {
// //             return player.pause();
// //           })
// //           .catch((error) => {
// //             console.error("Error starting and pausing the video:", error);
// //           });
// //       });
// //     }
// //   });

// //   // Handle scroll event to synchronize video playback
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     section.addEventListener("scroll", function () {
// //       const iframe = section.querySelector(".polar-iframe-container iframe");
// //       const player = players[iframe.id];
// //       if (player) {
// //         const sectionHeight = section.scrollHeight;
// //         const viewportHeight = section.clientHeight;
// //         const scrollTop = section.scrollTop;

// //         const scrollFraction = scrollTop / (sectionHeight - viewportHeight);

// //         player
// //           .getDuration()
// //           .then((duration) => {
// //             const newTime = scrollFraction * duration;
// //             player.setCurrentTime(newTime).catch((error) => {
// //               console.error("Error setting video time:", error);
// //             });
// //           })
// //           .catch((error) => {
// //             console.error("Error getting video duration:", error);
// //           });
// //       }
// //     });
// //   });

// //   // Handle navigation icon clicks
// //   document.querySelectorAll(".polar-nav-icon").forEach((icon) => {
// //     icon.addEventListener("click", function () {
// //       const seekTime = parseFloat(this.getAttribute("data-seek-time"));
// //       const iframeId = this.getAttribute("data-iframe-id");
// //       seekTo(seekTime, iframeId);
// //     });
// //   });

// //   function seekTo(time, iframeId) {
// //     const player = players[iframeId];
// //     if (!player) {
// //       console.error("No player found for iframe ID:", iframeId);
// //       return;
// //     }

// //     player
// //       .getDuration()
// //       .then((duration) => {
// //         if (time >= 0 && time <= duration) {
// //           player
// //             .setCurrentTime(time)
// //             .then(() => {
// //               console.log(`Video set to ${time} seconds`);
// //               player.pause().catch((error) => {
// //                 console.error("Error pausing the video:", error);
// //               });
// //             })
// //             .catch((error) => {
// //               console.error("Error setting current time:", error);
// //             });
// //         } else {
// //           console.error("Seek time is out of range:", time);
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Error getting video duration:", error);
// //       });
// //   }
// // });

// //above works new img clicks
// // document.addEventListener("DOMContentLoaded", function () {
// //   const navIcons = document.querySelectorAll(".polar-nav-icon");

// //   navIcons.forEach((icon) => {
// //     icon.addEventListener("click", function () {
// //       const seekTime = parseFloat(this.getAttribute("data-seek-time"));
// //       const iframeId = this.getAttribute("data-iframe-id");
// //       const player = videojs(iframeId);

// //       player.currentTime(seekTime);
// //       player.pause(); // Ensure video is paused after seeking
// //     });
// //   });

// //   // Scroll handler to sync video playback with scroll
// //   const projectSection = document.querySelector(".polar-project-section");

// //   projectSection.addEventListener("scroll", function () {
// //     const player = videojs("polar-vimeoVideo1");
// //     const maxScroll = this.scrollHeight - this.clientHeight;
// //     const scrollPosition = this.scrollTop;
// //     const duration = player.duration();
// //     const seekTime = (scrollPosition / maxScroll) * duration;

// //     player.currentTime(seekTime);
// //   });
// // });
// //THE BELLOW WORKS JUST FINE
// // document.addEventListener("DOMContentLoaded", function () {
// //   const players = {};

// //   // Initialize Vimeo players and ensure they are ready
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     const iframe = section.querySelector(".polar-iframe-container iframe");
// //     if (iframe) {
// //       const player = new Vimeo.Player(iframe);
// //       players[iframe.id] = player;

// //       // Ensure the player is ready before interacting
// //       player.on("loaded", () => {
// //         console.log(`Player for ${iframe.id} is ready`);
// //         player
// //           .play()
// //           .then(() => {
// //             return player.pause();
// //           })
// //           .catch((error) => {
// //             console.error("Error starting and pausing the video:", error);
// //           });
// //       });
// //     }
// //   });

// //   // Handle scroll event to synchronize video playback
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     section.addEventListener("scroll", function () {
// //       const iframe = section.querySelector(".polar-iframe-container iframe");
// //       const player = players[iframe.id];
// //       if (player) {
// //         const sectionHeight = section.scrollHeight;
// //         const viewportHeight = section.clientHeight;
// //         const scrollTop = section.scrollTop;

// //         const scrollFraction = scrollTop / (sectionHeight - viewportHeight);

// //         player
// //           .getDuration()
// //           .then((duration) => {
// //             const newTime = scrollFraction * duration;
// //             player.setCurrentTime(newTime).catch((error) => {
// //               console.error("Error setting video time:", error);
// //             });
// //           })
// //           .catch((error) => {
// //             console.error("Error getting video duration:", error);
// //           });
// //       }
// //     });
// //   });

// //   // Handle navigation icon clicks
// //   document.querySelectorAll(".polar-nav-icon").forEach((icon) => {
// //     icon.addEventListener("click", function () {
// //       const seekTime = parseFloat(this.getAttribute("data-seek-time"));
// //       const iframeId = this.getAttribute("data-iframe-id");
// //       seekTo(seekTime, iframeId);
// //     });
// //   });

// //   function seekTo(time, iframeId) {
// //     const player = players[iframeId];
// //     if (!player) {
// //       console.error("No player found for iframe ID:", iframeId);
// //       return;
// //     }

// //     player
// //       .getDuration()
// //       .then((duration) => {
// //         if (time >= 0 && time <= duration) {
// //           player
// //             .setCurrentTime(time)
// //             .then(() => {
// //               console.log(`Video set to ${time} seconds`);
// //               player.pause().catch((error) => {
// //                 console.error("Error pausing the video:", error);
// //               });
// //             })
// //             .catch((error) => {
// //               console.error("Error setting current time:", error);
// //             });
// //         } else {
// //           console.error("Seek time is out of range:", time);
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Error getting video duration:", error);
// //       });
// //   }
// // });
// //controling playback when the user scrolls with range in html
// // document.addEventListener("DOMContentLoaded", function () {
// //   const players = {};

// //   // Initialize Vimeo players and ensure they are ready
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     const iframe = section.querySelector(".polar-iframe-container iframe");
// //     if (iframe) {
// //       const player = new Vimeo.Player(iframe);
// //       players[iframe.id] = player;

// //       // Ensure the player is ready before interacting
// //       player.on("loaded", () => {
// //         console.log(`Player for ${iframe.id} is ready`);
// //         player
// //           .play()
// //           .then(() => {
// //             return player.pause();
// //           })
// //           .catch((error) => {
// //             console.error("Error starting and pausing the video:", error);
// //           });
// //       });

// //       // Sync the range input with video playback
// //       const rangeInput = section.querySelector(".polar-video-range");
// //       if (rangeInput) {
// //         player.on("timeupdate", () => {
// //           player.getDuration().then((duration) => {
// //             player.getCurrentTime().then((currentTime) => {
// //               const fraction = (currentTime / duration) * 100;
// //               rangeInput.value = fraction;
// //             });
// //           });
// //         });
// //       }
// //     }
// //   });

// //   // Handle range input changes
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     const rangeInput = section.querySelector(".polar-video-range");
// //     if (rangeInput) {
// //       rangeInput.addEventListener("input", function () {
// //         const iframe = section.querySelector(".polar-iframe-container iframe");
// //         const player = players[iframe.id];
// //         if (player) {
// //           const fraction = parseFloat(rangeInput.value) / 100;
// //           player
// //             .getDuration()
// //             .then((duration) => {
// //               const newTime = fraction * duration;
// //               player.setCurrentTime(newTime).catch((error) => {
// //                 console.error("Error setting video time:", error);
// //               });
// //             })
// //             .catch((error) => {
// //               console.error("Error getting video duration:", error);
// //             });
// //         }
// //       });
// //     }
// //   });

// //   // Handle scroll event to update the range input
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     section.addEventListener("scroll", function () {
// //       const iframe = section.querySelector(".polar-iframe-container iframe");
// //       const player = players[iframe.id];
// //       const rangeInput = section.querySelector(".polar-video-range");

// //       if (player && rangeInput) {
// //         const sectionHeight = section.scrollHeight;
// //         const viewportHeight = section.clientHeight;
// //         const scrollTop = section.scrollTop;

// //         // Calculate scroll fraction
// //         const scrollFraction = scrollTop / (sectionHeight - viewportHeight);

// //         // Update range input value
// //         rangeInput.value = scrollFraction * 100;

// //         // Update video time
// //         player
// //           .getDuration()
// //           .then((duration) => {
// //             const newTime = scrollFraction * duration;
// //             player.setCurrentTime(newTime).catch((error) => {
// //               console.error("Error setting video time:", error);
// //             });
// //           })
// //           .catch((error) => {
// //             console.error("Error getting video duration:", error);
// //           });
// //       }
// //     });
// //   });

// //   // Handle navigation icon clicks
// //   document.querySelectorAll(".polar-nav-icon").forEach((icon) => {
// //     icon.addEventListener("click", function () {
// //       const seekTime = parseFloat(this.getAttribute("data-seek-time"));
// //       const iframeId = this.getAttribute("data-iframe-id");
// //       seekTo(seekTime, iframeId);
// //     });
// //   });

// //   function seekTo(time, iframeId) {
// //     const player = players[iframeId];
// //     if (!player) {
// //       console.error("No player found for iframe ID:", iframeId);
// //       return;
// //     }

// //     player
// //       .getDuration()
// //       .then((duration) => {
// //         if (time >= 0 && time <= duration) {
// //           player
// //             .setCurrentTime(time)
// //             .then(() => {
// //               console.log(`Video set to ${time} seconds`);
// //               player.pause().catch((error) => {
// //                 console.error("Error pausing the video:", error);
// //               });
// //             })
// //             .catch((error) => {
// //               console.error("Error setting current time:", error);
// //             });
// //         } else {
// //           console.error("Seek time is out of range:", time);
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Error getting video duration:", error);
// //       });
// //   }

// // });
// //range indicator coontorls test
// // document.addEventListener("DOMContentLoaded", function () {
// //   const players = {};

// //   // Initialize Vimeo players and ensure they are ready
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     const iframe = section.querySelector(".polar-iframe-container iframe");
// //     if (iframe) {
// //       const player = new Vimeo.Player(iframe);
// //       players[iframe.id] = player;

// //       // Ensure the player is ready before interacting
// //       player.on("loaded", () => {
// //         console.log(`Player for ${iframe.id} is ready`);
// //         player
// //           .play()
// //           .then(() => {
// //             return player.pause();
// //           })
// //           .catch((error) => {
// //             console.error("Error starting and pausing the video:", error);
// //           });
// //       });

// //       // Sync the range input with video playback
// //       const rangeInput = section.querySelector(".polar-video-range");
// //       if (rangeInput) {
// //         player.on("timeupdate", () => {
// //           player.getDuration().then((duration) => {
// //             player.getCurrentTime().then((currentTime) => {
// //               const fraction = (currentTime / duration) * 100;
// //               rangeInput.value = fraction;
// //             });
// //           });
// //         });
// //       }
// //     }
// //   });

// //   // Handle range input changes
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     const rangeInput = section.querySelector(".polar-video-range");
// //     if (rangeInput) {
// //       rangeInput.addEventListener("input", function () {
// //         const iframe = section.querySelector(".polar-iframe-container iframe");
// //         const player = players[iframe.id];
// //         if (player) {
// //           const fraction = parseFloat(rangeInput.value) / 100;
// //           player
// //             .getDuration()
// //             .then((duration) => {
// //               const newTime = fraction * duration;
// //               player.setCurrentTime(newTime).catch((error) => {
// //                 console.error("Error setting video time:", error);
// //               });
// //             })
// //             .catch((error) => {
// //               console.error("Error getting video duration:", error);
// //             });
// //         }
// //       });
// //     }
// //   });

// //   // Handle scroll event to update the range input
// //   document.querySelectorAll(".polar-project-section").forEach((section) => {
// //     section.addEventListener("scroll", function () {
// //       const iframe = section.querySelector(".polar-iframe-container iframe");
// //       const player = players[iframe.id];
// //       const rangeInput = section.querySelector(".polar-video-range");

// //       if (player && rangeInput) {
// //         const sectionHeight = section.scrollHeight;
// //         const viewportHeight = section.clientHeight;
// //         const scrollTop = section.scrollTop;

// //         // Calculate scroll fraction
// //         const scrollFraction = scrollTop / (sectionHeight - viewportHeight);

// //         // Update range input value
// //         rangeInput.value = scrollFraction * 100;

// //         // Update video time
// //         player
// //           .getDuration()
// //           .then((duration) => {
// //             const newTime = scrollFraction * duration;
// //             player.setCurrentTime(newTime).catch((error) => {
// //               console.error("Error setting video time:", error);
// //             });
// //           })
// //           .catch((error) => {
// //             console.error("Error getting video duration:", error);
// //           });
// //       }
// //     });
// //   });

// //   // Handle navigation icon clicks
// //   document.querySelectorAll(".polar-nav-icon").forEach((icon) => {
// //     icon.addEventListener("click", function () {
// //       const seekTime = parseFloat(this.getAttribute("data-seek-time"));
// //       const iframeId = this.getAttribute("data-iframe-id");
// //       seekTo(seekTime, iframeId);
// //     });
// //   });

// //   function seekTo(time, iframeId) {
// //     const player = players[iframeId];
// //     if (!player) {
// //       console.error("No player found for iframe ID:", iframeId);
// //       return;
// //     }

// //     player
// //       .getDuration()
// //       .then((duration) => {
// //         if (time >= 0 && time <= duration) {
// //           player
// //             .setCurrentTime(time)
// //             .then(() => {
// //               console.log(`Video set to ${time} seconds`);
// //               player.pause().catch((error) => {
// //                 console.error("Error pausing the video:", error);
// //               });
// //             })
// //             .catch((error) => {
// //               console.error("Error setting current time:", error);
// //             });
// //         } else {
// //           console.error("Seek time is out of range:", time);
// //         }
// //       })
// //       .catch((error) => {
// //         console.error("Error getting video duration:", error);
// //       });
// //   }
// // });
// // NEW APPROACH, COMPLETELY NEW. USING THE SLIDER COVERING SECTION ADN ATTACHING SCROLL
// // var iframe = document.getElementById("vimeo-player");
// // var player = new Vimeo.Player(iframe);
// // var range = document.getElementById("video-progress");
// // var section = document.querySelector(".scroll-section");

// // // Update video based on range input
// // range.addEventListener("input", function () {
// //   player.getDuration().then(function (duration) {
// //     var newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Update range based on scroll position
// // section.addEventListener("scroll", function () {
// //   var scrollTop = section.scrollTop;
// //   var maxScrollTop = section.scrollHeight - section.clientHeight;
// //   var scrollPercent = scrollTop / maxScrollTop;

// //   range.value = scrollPercent * 100;
// // });

// // NEW APPROACH V2
// // const iframe = document.getElementById("vimeo-player");
// // const player = new Vimeo.Player(iframe);
// // const range = document.getElementById("video-progress");
// // const section = document.querySelector(".scroll-section");

// // // Update video based on range input
// // range.addEventListener("input", () => {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Update range based on scroll position
// // section.addEventListener("scroll", () => {
// //   const scrollTop = section.scrollTop;
// //   const maxScrollTop = section.scrollHeight - section.clientHeight;
// //   const scrollPercent = scrollTop / maxScrollTop;

// //   range.value = scrollPercent * 100;
// // });

// // // Update range based on mouse scroll
// // range.addEventListener("wheel", (event) => {
// //   event.preventDefault();
// //   const delta = event.deltaY > 0 ? 1 : -1;
// //   let newValue = parseInt(range.value) + delta;

// //   // Ensure value stays within bounds
// //   newValue = Math.min(Math.max(newValue, 0), 100);

// //   range.value = newValue;
// //   player.getDuration().then((duration) => {
// //     const newTime = (newValue / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });
// // NEW V2.1
// // const iframe = document.getElementById("polar-vimeoVideo1");
// // const player = new Vimeo.Player(iframe);
// // const range = document.getElementById("video-progress");
// // const section = document.querySelector(".scroll-section");
// // console.log(range);
// // console.log(section);
// // console.log(iframe);
// // // Update video based on range input
// // range.addEventListener("input", () => {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Update range based on video time update
// // player.on("timeupdate", ({ seconds, duration }) => {
// //   const percent = (seconds / duration) * 100;
// //   range.value = percent;
// // });

// // // Update range based on scroll position
// // section.addEventListener("scroll", () => {
// //   const scrollTop = section.scrollTop;
// //   const maxScrollTop = section.scrollHeight - section.clientHeight;
// //   const scrollPercent = scrollTop / maxScrollTop;

// //   range.value = scrollPercent * 100;
// //   player.getDuration().then((duration) => {
// //     const newTime = scrollPercent * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Update range based on mouse scroll
// // range.addEventListener("wheel", (event) => {
// //   event.preventDefault();
// //   const delta = event.deltaY > 0 ? 0.1 : -0.1;
// //   let newValue = parseFloat(range.value) + delta;

// //   // Ensure value stays within bounds
// //   newValue = Math.min(Math.max(newValue, 0), 100);

// //   range.value = newValue.toFixed(1);
// //   player.getDuration().then((duration) => {
// //     const newTime = (newValue / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });
// // NEW VERSION 3 RANGE TO SCROLL SYNC --------------------------------------
// // const iframe = document.getElementById("polar-vimeoVideo1");
// // const player = new Vimeo.Player(iframe);
// // const range = document.getElementById("video-progress");
// // const section = document.querySelector(".scroll-section");

// // let scrollValue = 0;

// // // Update video based on range input
// // range.addEventListener("input", () => {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Sync range with video playback
// // player.on("timeupdate", ({ seconds, duration }) => {
// //   const percent = (seconds / duration) * 100;
// //   range.value = percent;
// //   scrollValue = percent;
// // });

// // // Update range based on scroll position
// // section.addEventListener("scroll", () => {
// //   const scrollTop = section.scrollTop;
// //   const maxScrollTop = section.scrollHeight - section.clientHeight;
// //   const scrollPercent = scrollTop / maxScrollTop;

// //   scrollValue = scrollPercent * 100;
// //   range.value = scrollValue;
// //   player.getDuration().then((duration) => {
// //     const newTime = scrollPercent * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Update range based on mouse scroll
// // range.addEventListener("wheel", (event) => {
// //   event.preventDefault();
// //   const delta = event.deltaY > 0 ? 1 : -1;
// //   scrollValue = Math.min(Math.max(scrollValue + delta, 0), 100);

// //   range.value = scrollValue.toFixed(1);
// //   player.getDuration().then((duration) => {
// //     const newTime = (scrollValue / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });
// // NEW APPROACH V2.2 --------------------------------- this one works
// // const iframe = document.getElementById("polar-vimeoVideo1");
// // const player = new Vimeo.Player(iframe);
// // const range = document.getElementById("video-progress");
// // const section = document.querySelector(".scroll-section");

// // // Update video based on range input
// // range.addEventListener("input", () => {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Sync range with video playback
// // player.on("timeupdate", ({ seconds, duration }) => {
// //   const percent = (seconds / duration) * 100;
// //   range.value = percent;
// // });

// // // Update range based on mouse scroll
// // range.addEventListener("wheel", (event) => {
// //   event.preventDefault();
// //   event.stopPropagation();

// //   if (event.deltaY < 0) {
// //     range.valueAsNumber = Math.min(range.valueAsNumber + 1, 100);
// //   } else {
// //     range.valueAsNumber = Math.max(range.valueAsNumber - 1, 0);
// //   }

// //   // Dispatch change event to update video
// //   const changeEvent = new Event("change", { bubbles: true, cancelable: true });
// //   range.dispatchEvent(changeEvent);
// // });

// // // Update video based on range change
// // range.addEventListener("change", () => {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });
// // NEW V2.3 PAUSING VIDEO AFTER 0,2 SECONDS AND MANUALLY USER CONTROL.
// // const iframe = document.getElementById("polar-vimeoVideo1");
// // const player = new Vimeo.Player(iframe);
// // const range = document.getElementById("video-progress");

// // // Autoplay briefly and then pause
// // player.on("play", () => {
// //   setTimeout(() => {
// //     player.pause();
// //   }, 200); // Pause after 0.2 seconds
// // });

// // // Update video based on range input
// // range.addEventListener("input", () => {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Sync range with video playback
// // player.on("timeupdate", ({ seconds, duration }) => {
// //   const percent = (seconds / duration) * 100;
// //   range.value = percent;
// // });

// // // Update range based on mouse scroll
// // range.addEventListener("wheel", (event) => {
// //   event.preventDefault();
// //   event.stopPropagation();

// //   if (event.deltaY < 0) {
// //     range.valueAsNumber = Math.min(range.valueAsNumber + 1, 100);
// //   } else {
// //     range.valueAsNumber = Math.max(range.valueAsNumber - 1, 0);
// //   }

// //   // Dispatch change event to update video
// //   const changeEvent = new Event("change", { bubbles: true, cancelable: true });
// //   range.dispatchEvent(changeEvent);
// // });

// // // Update video based on range change
// // range.addEventListener("change", () => {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });
// // NEW V2.4 FIXING JITTER SCROLLING ------------------- smoother but not fixed.working
// // const iframe = document.getElementById("polar-vimeoVideo1");
// // const player = new Vimeo.Player(iframe);
// // const range = document.getElementById("video-progress");

// // // Autoplay briefly and then pause
// // player.on("play", () => {
// //   setTimeout(() => {
// //     player.pause();
// //   }, 200); // Pause after 0.2 seconds
// // });

// // // Update video based on range input
// // range.addEventListener("input", () => {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Sync range with video playback
// // player.on("timeupdate", ({ seconds, duration }) => {
// //   const percent = (seconds / duration) * 100;
// //   range.value = percent;
// // });

// // // Update range and video based on scroll position
// // window.addEventListener("scroll", () => {
// //   updatePlayback();
// // });

// // range.addEventListener("wheel", (event) => {
// //   event.preventDefault();
// //   event.stopPropagation();

// //   if (event.deltaY < 0) {
// //     range.valueAsNumber = Math.min(range.valueAsNumber + 1, 100);
// //   } else {
// //     range.valueAsNumber = Math.max(range.valueAsNumber - 1, 0);
// //   }

// //   updatePlayback();
// // });

// // // Function to update playback
// // function updatePlayback() {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // }
// //NEW V2.6 --- NOT WORKED
// // const iframe = document.getElementById("polar-vimeoVideo1");
// // const player = new Vimeo.Player(iframe);
// // const range = document.getElementById("video-progress");

// // let debounceTimeout;

// // // Autoplay briefly and then pause
// // player.on("play", () => {
// //   setTimeout(() => {
// //     player.pause();
// //   }, 200);
// // });

// // // Update video based on range input
// // range.addEventListener("input", () => {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // });

// // // Sync range with video playback
// // player.on("timeupdate", ({ seconds, duration }) => {
// //   const percent = (seconds / duration) * 100;
// //   range.value = percent;
// // });

// // // Update range and video based on scroll position
// // window.addEventListener("scroll", () => {
// //   if (debounceTimeout) clearTimeout(debounceTimeout);
// //   debounceTimeout = setTimeout(updatePlayback, 50);
// // });

// // range.addEventListener("wheel", (event) => {
// //   event.preventDefault();
// //   event.stopPropagation();

// //   if (event.deltaY < 0) {
// //     range.valueAsNumber = Math.min(range.valueAsNumber + 1, 100);
// //   } else {
// //     range.valueAsNumber = Math.max(range.valueAsNumber - 1, 0);
// //   }

// //   updatePlayback();
// // });

// // // Function to update playback
// // function updatePlayback() {
// //   player.getDuration().then((duration) => {
// //     const newTime = (range.value / 100) * duration;
// //     player.setCurrentTime(newTime);
// //   });
// // }
// // V2.7 ------- the one before this is the working version . interpolating here
// // const iframe = document.getElementById("polar-vimeoVideo1");
// // const player = new Vimeo.Player(iframe);
// // const range = document.getElementById("video-progress");

// // let scrollTimeout;

// // // Autoplay briefly and then pause
// // player.on("play", () => {
// //   setTimeout(() => {
// //     player.pause();
// //   }, 200);
// // });

// // // Update video based on range input
// // range.addEventListener("input", () => {
// //   updatePlayback();
// // });

// // // Sync range with video playback
// // player.on("timeupdate", ({ seconds, duration }) => {
// //   const percent = (seconds / duration) * 100;
// //   range.value = percent;
// // });

// // // Smoothly update range and video based on scroll position
// // window.addEventListener("scroll", () => {
// //   if (scrollTimeout) clearTimeout(scrollTimeout);
// //   scrollTimeout = setTimeout(() => {
// //     updatePlaybackSmooth();
// //   }, 50);
// // });

// // range.addEventListener("wheel", (event) => {
// //   event.preventDefault();
// //   event.stopPropagation();

// //   if (event.deltaY < 0) {
// //     range.valueAsNumber = Math.min(range.valueAsNumber + 1, 100);
// //   } else {
// //     range.valueAsNumber = Math.max(range.valueAsNumber - 1, 0);
// //   }

// //   updatePlaybackSmooth();
// // });

// // // Smooth playback function
// // function updatePlaybackSmooth() {
// //   player.getDuration().then((duration) => {
// //     const targetTime = (range.value / 100) * duration;
// //     player.getCurrentTime().then((currentTime) => {
// //       const step = (targetTime - currentTime) / 10; // Adjust step for smoothness
// //       let current = currentTime;

// //       function smoothStep() {
// //         if (Math.abs(targetTime - current) > Math.abs(step)) {
// //           current += step;
// //           player.setCurrentTime(current);
// //           requestAnimationFrame(smoothStep);
// //         } else {
// //           player.setCurrentTime(targetTime);
// //         }
// //       }
// //       smoothStep();
// //     });
// //   });
// // }
// }

//WORKING CODE TO SCROLLS.
// const iframe = document.getElementById("polar-vimeoVideo1");
// const player = new Vimeo.Player(iframe);
// const range = document.getElementById("video-progress");

// // Autoplay briefly and then pause
// player.on("play", () => {
//   setTimeout(() => {
//     player.pause();
//   }, 200); // Pause after 0.2 seconds
// });

// // Update video based on range input
// range.addEventListener("input", updatePlayback);

// // Sync range with video playback
// player.on("timeupdate", ({ seconds, duration }) => {
//   const percent = (seconds / duration) * 100;
//   range.value = percent;
// });

// // Update range and video based on scroll position
// window.addEventListener("scroll", () => {
//   updatePlaybackSmooth();
// });

// range.addEventListener("wheel", (event) => {
//   event.preventDefault();
//   event.stopPropagation();

//   if (event.deltaY < 0) {
//     range.valueAsNumber = Math.min(range.valueAsNumber + 1, 100);
//   } else {
//     range.valueAsNumber = Math.max(range.valueAsNumber - 1, 0);
//   }

//   updatePlaybackSmooth();
// });

// // Function to update playback
// function updatePlayback() {
//   player.getDuration().then((duration) => {
//     const newTime = (range.value / 100) * duration;
//     player.setCurrentTime(newTime);
//   });
// }

// // Function to update playback smoothly
// function updatePlaybackSmooth() {
//   player.getDuration().then((duration) => {
//     const newTime = (range.value / 100) * duration;
//     player.setCurrentTime(newTime);
//   });
// }
//NEW V3.0 ADDING NAVIGAION
const iframe = document.getElementById("polar-vimeoVideo1");
const player = new Vimeo.Player(iframe);
const range = document.getElementById("video-progress");
const navIcons = document.querySelectorAll(".polar-nav-icon");

// Autoplay briefly and then pause
player.on("play", () => {
  setTimeout(() => {
    player.pause();
  }, 200);
});

// Update video based on range input
range.addEventListener("input", updatePlayback);

// Sync range with video playback
player.on("timeupdate", ({ seconds, duration }) => {
  const percent = (seconds / duration) * 100;
  range.value = percent;
});

// Update range and video based on scroll position
window.addEventListener("scroll", updatePlaybackSmooth);

range.addEventListener("wheel", (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (event.deltaY > 0) {
    range.valueAsNumber = Math.min(range.valueAsNumber + 1, 100);
  } else {
    range.valueAsNumber = Math.max(range.valueAsNumber - 1, 0);
  }

  updatePlaybackSmooth();
});

// Function to update playback
function updatePlayback() {
  player.getDuration().then((duration) => {
    const newTime = (range.value / 100) * duration;
    player.setCurrentTime(newTime);
  });
}

// Function to update playback smoothly
function updatePlaybackSmooth() {
  player.getDuration().then((duration) => {
    const newTime = (range.value / 100) * duration;
    player.setCurrentTime(newTime);
  });
}

// Navigation function
navIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    const seekTime = parseFloat(icon.dataset.seekTime);
    player.setCurrentTime(seekTime);
  });
});
