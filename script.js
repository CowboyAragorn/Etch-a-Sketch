let squareCount = 16;





function createSquares (){
    for (let i = 1; i <= squareCount; i++){
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
        for (let i2 = 1; i2 <= squareCount; i2++){
                squareRow = document.createElement("div")
                let attRow = document.createAttribute("class");
                    attRow.value = "squaresRow"
                    squareRow.setAttributeNode(attRow);
                squareColumn.append(squareRow);
        }
}
}




createSquares();


let elements = document.getElementsByClassName("squaresRow");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", function () { 
        elements[i].style.backgroundColor = "red";
    
    });
}