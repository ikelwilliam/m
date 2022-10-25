var rows = 3;
var columns = 3;

var currTile;
var otherTile;

var turns = 0;

var imgOrder = ["3", "5", "8", "4", "1", "6", "7", "2", "9"];

window.onload = function() {
	for (let r=0; r < rows; r++) {
		for (let c=0; c < columns; c++) {

			let tile = document.createElement("img");
			tile.id = r.toString() + "-" + c.toString();
			tile.src = imgOrder.shift() + ".jpg";

			tile.addEventListener("dragstart", dragStart);
			tile.addEventListener("dragover", dragOver);
			tile.addEventListener("dragenter", dragEnter);
			tile.addEventListener("dragleave", dragLeave);
			tile.addEventListener("drop", dragDrop);
			tile.addEventListener("dragend", dragEnd);

			document.getElementById("board").append(tile);
		}
	}
}

function dragStart() {
	currTile = this;
}

function dragOver(e) {
	e.preventDefault();
}

function dragEnter(e) {
	e.preventDefault();
}

function dragLeave(e) {
	
}

function dragDrop(e) {
	otherTile = this;
}

function dragEnd(e) {

	if (!otherTile.src.includes("9.jpg")) {
		return;
	}

	let cuuCoords = currTile.id.split("-");
	let r = parseInt(cuuCoords[0]);
	let c = parseInt(cuuCoords[1]);

	let otherCoords = otherTile.id.split("-");
	let r2 = parseInt(otherCoords[0]);
	let c2 = parseInt(otherCoords[1]);

	let moveLeft = r == r2 && c2 == c-1;
	let moveRight = r == r2 && c2 == c+1;

	let moveUp = c == c2 && r2 == r-1;
	let moveDown = c == c2 && r2 == r+1;

	let isAdjacent = moveLeft || moveRight || moveUp || moveDown;

	if (isAdjacent){
	let cuurImg = currTile.src;
	let otherImg = otherTile.src;

	currTile.src = otherImg;
	otherTile.src = cuurImg;

	turns += 1;
	document.getElementById("turns").innerText = turns;

	}
}