let colors = ["lightblue", "lightgreen", "lightyellow", "lavender", "lightpink"];
let index = 0;
function changeColor() {
    document.body.style.backgroundColor = colors[index];
    index = (index + 1) % colors.length;
}
function changeHeading() {
    let input = document.getElementById("inputText").value;
    document.getElementById("heading").innerText = input;
}
function increaseFont() {
    let h1 = document.getElementById("heading");
    let size = window.getComputedStyle(h1).fontSize;
    size = parseInt(size);
    h1.style.fontSize = (size + 5) + "px";
}
function togglePara() {
    let para = document.getElementById("para");
    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}