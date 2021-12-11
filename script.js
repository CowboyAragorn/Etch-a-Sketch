let squareCount
chooseSquares();




function createSquares (){
    console.log(squareCount);
    for (let i = 1; i <= squareCount; i++){
        let squareColumn = document.createElement("div");
            let attCol = document.createAttribute("class");
                attCol.value = "squaresCol"
                squareColumn.setAttributeNode(attCol);
            let attCol2 = document.createAttribute("id");
                attCol2.value = i;
                squareColumn.setAttributeNode(attCol2);
            squareContainer.append(squareColumn);
        for (let i2 = 1; i2 <= squareCount; i2++){
                squareRow = document.createElement("div")
                let attRow = document.createAttribute("class");
                    attRow.value = "squaresRow"
                    squareRow.setAttributeNode(attRow);
                squareColumn.append(squareRow);
        }
}
}



function paint(){
    let elements = document.getElementsByClassName("squaresRow");

    for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("mouseover", function () { 
            elements[i].style.backgroundColor = "red";
        
        });
    }

}

let resetBtn = document.querySelector("#resetBtn")
      resetBtn.addEventListener('click', cleanSlate);
    resetBtn.addEventListener('click', deSquare);
     resetBtn.addEventListener('click', deSquare);
    resetBtn.addEventListener('click', chooseSquares);
    resetBtn.addEventListener('click', createSquares);
    resetBtn.addEventListener('click', paint);


function cleanSlate() {
    
    let elements = document.getElementsByClassName("squaresRow");

    for (let i = 0; i < elements.length; i++) {
            elements[i].style.backgroundColor = "white";
        }
    }


// Removes appended squares so that a new selection can be made//
function deSquare(){
    let elements = document.querySelectorAll(".squaresRow");
    let elements2 = document.querySelectorAll(".squaresCol");

    for (let i = 0; i < elements.length; i++) {
        elements[i].remove();
    
    }

    for (let i = 0; i < elements2.length; i++) {
        elements2[i].remove();

    }

}

function chooseSquares(){
   squareCount = prompt("How Many Squares for your Etch-a-Sketch. Please chooose between 1 & 100");
    if (squareCount > 100 || squareCount === 0) {
        alert("My apologies, that is simply too many or too few squares. Please select again.")
        chooseSquares();
    }
    else {
        return squareCount
    }

    };




createSquares();
paint();



   


