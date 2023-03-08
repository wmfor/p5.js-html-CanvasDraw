//Created by Weston Forbes 4/14/2017

//This is the brush size value variable;
var BRUSH_SIZE = 10;

//This is the square brush option variable.
var squareBrush = false;

//This is the circular brush option variable.
var circularBrush = true;

//This is the background color variable.
var BackgroundColor = 102;

//This is the erasing option variable;
var ErasingOption = false;

//This is the drawing option variable.
var DrawingOption = true;


//This is the variable for the brush size value button.
var BrushCount;

function setup() {
    //This creates the canvas so you can start putting things on it (circles, squares, rectangles, ect).
    createCanvas(1920, 800);

    //This command sets the background to the specified background color value, which
    //you can change at the top of this code.
    background(BackgroundColor, BackgroundColor, BackgroundColor);

    //Create the reset canvas button.
    var resetButton = createButton("Reset Canvas");


    //Create the bigger brush button.
    var addButton = createButton("Bigger Brush");

    //Create the brush size value button.
    BrushCount = createButton(BRUSH_SIZE);

    //Create the smaller brush button.
    var subtractButton = createButton("Smaller Brush");



    //Create the square brush option button.
    var SquareBrushButton = createButton("Square Brush");

    //Create the circle brush option button.
    var CircleBrushButton = createButton("Circular Brush");

    //Create the drawing option button.
    var drawingoptionButton = createButton("Drawing");

    //Create the erasing option button.
    var erasingoptionButton = createButton("Erasing");


    //If you click the reset button execute the (resetSketch) function.
    resetButton.mousePressed(resetSketch);

    //If you click the add-button execute the (AddToBrushSize) function.
    addButton.mousePressed(AddToBrushSize);

    //If you click the subtract-button execute the (SubtractFromBrushSize) function.
    subtractButton.mousePressed(SubtractFromBrushSize);

    //If you click the square-brush-button execute the (SwitchToSquareBrush) function.
    SquareBrushButton.mousePressed(SwitchToSquareBrush);

    //If you click the circle-brush-button execute the (SwitchToCircleBrush) function.
    CircleBrushButton.mousePressed(SwitchToCircleBrush);

    //If you click on the draw-option button execute the (draw) function.
    drawingoptionButton.mousePressed(Draw);

     //If you click on the erase-option button execute the (erase) function.
    erasingoptionButton.mousePressed(Erase);

}

//This clears the page of all your drawing, and also resets the page color.
function resetSketch() {
    clear();
    background(BackgroundColor, BackgroundColor, BackgroundColor);
}

//This makes the brush bigger by making the BRUSH_SIZE value increase.
function AddToBrushSize() {
    BRUSH_SIZE++;
}

//This makes the brush smaller by making the BRUSH_SIZE value decrease.
function SubtractFromBrushSize() {
    BRUSH_SIZE--;
}

//This function is used for when you click the square brush
//button, so the program can know when you'd like to use
// a square brush instead of a circular brush.
function SwitchToSquareBrush() {
    circularBrush = false;
    squareBrush = true;
}


//This function is used for when you click the circular brush
//button, so the program can know when you'd like to use
// a square brush instead of a square brush.
function SwitchToCircleBrush() {
    squareBrush = false;
    circularBrush = true;
}


//This function is called when you click the erase button,
//so the program can know when you'd like to erase.
function Erase() {
    DrawingOption = false;
    ErasingOption = true;
}


//This function is called when you click the draw button,
//so the program can know when you'd like to erase.
function Draw() {
    ErasingOption = false;
    DrawingOption = true;
}



//If you drag the mouse it will execute these commands.
function mouseDragged() {
    //The circles or (Ellipses) we're making don't have an outline.
    noStroke();


    //If you're currently drawing, then it will make the ellipse or rect you're drawing with black, you can
    //change the color of the shape with the (0,0,0), just go to an online color picker and use the RGB numbers.
    if (DrawingOption) {
        fill(0, 0, 0);
        //Fills your shape with a color.
    }

    //If you're currently erasing then it will make the ellipse or rect you're drawing with the color of the background, so
    //it will create the effect that it is erasing.
    if (ErasingOption) {
        fill(BackgroundColor, BackgroundColor, BackgroundColor);
        //Fills your shape with the background color.
    }


    if (circularBrush) {
        //Creating an ellipse, it is materialized at the mouseX position, and the mouseY position, so where the mouse currently is, and then the size is taken from the BRUSH_SIZE variable, which
        // you get when you press the bigger and smaller brush buttons.
        ellipse(mouseX, mouseY, BRUSH_SIZE, BRUSH_SIZE);
    }

    if (squareBrush) {
        //Same properties as above with the ellipse, but this time it is with a rectangle or square, a 'rect'.
        rect(mouseX, mouseY, BRUSH_SIZE, BRUSH_SIZE);
    }

}

 //This is so if you just click it will do the same thing as if you drag the mouse, displayed in the
    //function above.
function mousePressed() {

    noStroke();



    if (DrawingOption) {
        fill(0, 0, 0);
    }
    if (ErasingOption) {
        fill(BackgroundColor, BackgroundColor, BackgroundColor);
    }


    if (circularBrush) {
        ellipse(mouseX, mouseY, BRUSH_SIZE, BRUSH_SIZE);
    }

    if (squareBrush) {
        rect(mouseX, mouseY, BRUSH_SIZE, BRUSH_SIZE);
    }


}


function draw() {
    //Changing the BRUSH_SIZE button text.
    BrushCount.elt.innerHTML = BRUSH_SIZE;

    //If the brush size is less than or equals zero, the brush size equals zero, meaning it cannot be further lowered.
    if (BRUSH_SIZE <= 0) {
        BRUSH_SIZE = 0;
    }
}
