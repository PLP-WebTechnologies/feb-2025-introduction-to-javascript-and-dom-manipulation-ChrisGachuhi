// Change text content dynamically
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("description").textContent = "The text has been changed!";
});

// Modify CSS styles dynamically
document.getElementById("changeColorBtn").addEventListener("click", function() {
    let box = document.getElementById("box");
    box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "lightcoral" : "lightblue";
});

// Add a new element
document.getElementById("addElementBtn").addEventListener("click", function() {
    let newParagraph = document.createElement("p");
    newParagraph.textContent = "This is a dynamically added paragraph!";
    newParagraph.id = "dynamicPara";
    document.getElementById("container").appendChild(newParagraph);
});

// Remove the added element
document.getElementById("removeElementBtn").addEventListener("click", function() {
    let dynamicPara = document.getElementById("dynamicPara");
    if (dynamicPara) {
        dynamicPara.remove();
    }
});
