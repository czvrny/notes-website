function randomColor() {
    var r = Math.floor(Math.random() * 1);
    var g = Math.floor(Math.random() * 1);
    var b = Math.floor(Math.random() * 1);
    return "rgb(" + r+200  + "," + 211 + "," + 255 + ")";
  }

  var container = document.getElementById("container");

  function setInitialShadow() {
var color = randomColor();
var offsetX = 0;
var offsetY = 0;
var blur = 50;
container.style.boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${color}`;
}

setInitialShadow(); 
container.addEventListener("mouseenter", function() {
isMouseOver = true;
});

container.addEventListener("mouseleave", function() {
isMouseOver = false;
setInitialShadow(); // Przywróć początkowy cień po opuszczeniu diva
});

  container.addEventListener("mousemove", function(event) {
    var color = randomColor();
    var offsetX = (event.clientX - container.getBoundingClientRect().left - container.clientWidth / 4) / 10;
    var offsetY = (event.clientY - container.getBoundingClientRect().top - container.clientHeight / 4) / 10;
    var blur = 50;

    container.style.boxShadow = `${offsetX}px ${offsetY}px ${blur}px ${color}`;
  });

  container.addEventListener("mouseleave", function() {
    container.style.boxShadow = "none";
    setInitialShadow();
  });