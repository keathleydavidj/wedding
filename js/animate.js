$(function() {
  var mainCanvas = document.querySelector("#myCanvas");
  var mainContext = mainCanvas.getContext("2d");

  var canvasWidth = mainCanvas.width;
  var canvasHeight = mainCanvas.height;

  function drawCircle() {
    mainContext.clearRect(0, 0, canvasWidth, canvasHeight);

    // color in the background
    mainContext.fillStyle = "#EEEEEE";
    mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

    // draw the circle
    mainContext.beginPath();

    var radius = 175;
    mainContext.arc(225, 225, radius, 0, Math.PI * 2, false);
    mainContext.closePath();

    // color in the circle
    mainContext.fillStyle = "#006699";
    mainContext.fill();
  }
  drawCircle();
});

  function drawWaves() {

    // var counter = 0;
    // // 100 iterations
    // var increase = Math.PI * 2 / 100;

    // for ( i = 0; i <= 1; i += 0.01 ) {
    //   x = i;
    //   y = Math.sin( counter ) / 2 + 0.5;
    //   counter += increase;
    // }

  }
