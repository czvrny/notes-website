function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  var container = document.getElementById("#container");

  container.addEventListener("mousemove", function(event) {
    var color = randomColor();
    var offsetX = (event.clientX - container.getBoundingClientRect().left - container.clientWidth / 2) / 10;
    var offsetY = (event.clientY - container.getBoundingClientRect().top - container.clientHeight / 2) / 10;
    var blur = 20;

    container.style.boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${color}`;
  });

  container.addEventListener("mouseleave", function() {
    container.style.boxShadow = "none";
  });