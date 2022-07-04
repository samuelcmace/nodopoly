const boardObject = document.getElementById("board");
const boardContext = boardObject.getContext("2d");

boardObject.width = innerWidth;
boardObject.height = innerHeight;

const WidthOverHeight = innerWidth / innerHeight
const HeightOverWidth = innerHeight / innerWidth

boardContext.fillStyle = 'green';
boardContext.fillRect(0, 0, 200, 200);