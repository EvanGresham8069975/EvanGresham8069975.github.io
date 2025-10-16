$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(100, 200, 200, 15);
    createPlatform(1050, 650, 300, 20);
 createPlatform(1000, 540, 300, 20);
 createPlatform(950, 430, 300, 20);
 createPlatform(500, 400, 200, 20);
 createPlatform(750, 500, 100, 10);
createPlatform(700, 290, 200, 20);
createPlatform(900, 200, 20, 100);
createPlatform(500, 200, 100, 20);
    // TODO 3 - Create Collectables
createCollectable("steve", 100, 100);
createCollectable("steve", 100, 100);
createCollectable("steve", 100, 100);
createCollectable("steve", 100, 100);
createCollectable("steve", 100, 100);
createCollectable("steve", 100, 100);
createCollectable("steve", 100, 100);
createCollectable("steve", 100, 100);
createCollectable("steve", 100, 100);
createCollectable("steve", 100, 100);
createCollectable("diamond", 900, 100);
createCollectable("grace", 1100, 230);
    // TODO 4 - Create Cannons
createCannon("right", 300, 1500)
createCannon("bottom", 300, 1000)
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
