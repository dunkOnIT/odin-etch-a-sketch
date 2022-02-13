// Variables and Elements

let etchBlocks = document.querySelectorAll(".etch-block")
console.log(etchBlocks)

// Logic

function toggleColour(block, color = "black") {
    let bgColor = window.getComputedStyle(block).backgroundColor;
    console.log(bgColor)

    if (bgColor == "rgb(245, 245, 245)") {
        console.log("Current color = whitesmoke")
        block.style.backgroundColor = color;
    } else {
        console.log("Colored in currently")
        block.style.backgroundColor = "whitesmoke";
    }
}

// Event Listeners

etchBlocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
        console.log("Something!")
        toggleColour(block)
    });
});