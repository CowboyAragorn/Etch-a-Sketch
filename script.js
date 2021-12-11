let squareCount = 16;

//let squareContainer = document.querySelector("#squareContainer");
//let squareColumn = document.createElement("div");
//let attCol = document.createAttribute("class");
//attCol.value = "squares"
//squareColumn.setAttributeNode(attCol);

console.log(squareCount);
function createSquares (){
    for (i = 0; i <= squareCount; i++){
        console.log("i = " + i);
        console.log("SC = " +squareCount);
        let squareColumn = document.createElement("div");
            let attCol = document.createAttribute("class");
                attCol.value = "squaresCol"
                squareColumn.setAttributeNode(attCol);
            let attCol2 = document.createAttribute("id");
                attCol2.value = i;
                squareColumn.setAttributeNode(attCol2);
            squareContainer.append(squareColumn);
        for (i2 = 1; i2 <= squareCount; i2++){
            let squareRow = document.createElement("div")
                let attRow = document.createAttribute("class");
                    attRow.value = "squaresRow"
                    squareRow.setAttributeNode(attRow);
                squareColumn.append(squareRow);
        }
}
}
createSquares();