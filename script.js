//Declarations for range and slider//

let rangeInput = document.querySelector("#myRange").value;
let range = document.querySelector("#myRange")
let rangeOutput = document.querySelector('#rangeOutput')
let squareCount = rangeInput

//Slider Events//
range.addEventListener("mouseup", deSquare);
range.addEventListener('mouseup', createSquares);
range.addEventListener('mouseup', paintColor);




//Creates squares by first generating columns and then boxes in rows to fill those columns. Flexbox sorts them into correct rows.//
function createSquares() {
    console.log(squareCount);
    squareCount = range.value;
    for (let i = 1; i <= squareCount; i++) {
        let squareColumn = document.createElement("div");
        squareColumn.classList.add('squaresCol')
        squareContainer.append(squareColumn);
        for (let i2 = 1; i2 <= squareCount; i2++) {
            squareRow = document.createElement("div")
            squareRow.classList.add('squaresRow')
            squareColumn.append(squareRow);
        }
    }
    rangeOutput.innerText = squareCount + "x" + squareCount

}//button declarations//
let colorx = 'black';
let blackBtn = document.querySelector('#blackBtn')
let colorPicker = document.querySelector('#colorPicker')
let eraser = document.querySelector('#eraser')
let rainbow = document.querySelector('#rainbow')


//Event listeners for the buttons, routes to painting with their assigned color//

blackBtn.addEventListener('mouseup', function() {
    colorx = 'black';
    paintColor();
});

colorPicker.addEventListener('input', function () {
    colorx = colorPicker.value;
    paintColor();
});


eraser.addEventListener('click', function () {
    colorx = 'white';
});
eraser.addEventListener('click', paintColor);

rainbow.addEventListener('click', rainbowColor);


//Paints by adding an event listener to every box waiting for the mouse to come over to change background//
function paintColor() {
    let elements = document.getElementsByClassName("squaresRow");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", function () {
            elements[i].style.backgroundColor = colorx;
        });
    }
}
//Rainbow needed its own function with its own variable. Think I could have made some of the declarations a little cleaner earlier to fix this//
let colory = ' '
function rainbowColor() {
    let elements = document.getElementsByClassName("squaresRow");
    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", function () {
            elements[i].style.backgroundColor = colory
            rainbowColorGenerator();
        });
    }
}







//generator for rainbow colors//
function rainbowColorGenerator() {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    colory = "rgb(" + r + "," + g + "," + b + ")";
}



//sets background color to white for every square, resetting without changing currently selected color//
function cleanSlate() {

    let elements = document.getElementsByClassName("squaresRow");

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = "white";
    }
}


// Removes appended squares so that a new selection can be made//
function deSquare() {
    let elements = document.querySelectorAll(".squaresRow");
    let elements2 = document.querySelectorAll(".squaresCol");

    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();

    }

    for (let i = 0; i < elements2.length; i++) {
        elements2[i].remove();

    }

}



//button to clear slate//
let resetBtn = document.querySelector("#resetBtn")
resetBtn.addEventListener('click', cleanSlate);







createSquares();
paintColor();
