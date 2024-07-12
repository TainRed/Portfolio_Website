// console.log("iframe linked");
document.addEventListener("DOMContentLoaded", function () {
  var iframes = document.querySelectorAll("iframe");
  var players = [];
  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  iframes.forEach(function (iframe) {
    var player = new Vimeo.Player(iframe);
    players.push(player);

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          players.forEach(function (p) {
            if (p !== player) {
              p.pause();
            }
          });
          player.play();
        } else {
          player.pause();
        }
      });
    }, options);

    observer.observe(iframe);
  });
});
