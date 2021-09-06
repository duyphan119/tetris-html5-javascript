const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, c.height / 2 - 50, c.height);
const size = 25;
const infoScore = document.querySelector('.score');
const colorShape = [
    '#E5E7E7',
    '#1CBC83',
    '#7DBC1C',
    '#3F0FAD',
    '#AF6B4D',
    '#B377D1',
    '#01FFB0',
    '#FF019E',
    '#B2BAB9',
];
let stopped = false;
var score = 0;
var next = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
]
var board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

const width = board[0].length;
const height = board.length;
const tShape = [
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 1, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 1, 0]
    ]
];

const oShape = [
    [[1, 1],
    [1, 1]]
];
const iShape = [
    [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [1, 1, 1, 1],
        [0, 0, 0, 0]
    ],
    [
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0],
        [0, 1, 0, 0]
    ],
    [
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0],
        [0, 0, 1, 0]
    ]
];
const lShape = [
    [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [1, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 1],
        [1, 1, 1],
        [0, 0, 0]
    ],
];
const zShape = [
    [
        [0, 0, 0],
        [1, 1, 0],
        [0, 1, 1]
    ],
    [
        [0, 1, 0],
        [1, 1, 0],
        [1, 0, 0]
    ],
    [
        [1, 1, 0],
        [0, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 0, 1],
        [0, 1, 1],
        [0, 1, 0]
    ],
];

const lReverseShape = [
    [
        [0, 1, 0],
        [0, 1, 0],
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ],
    [
        [0, 1, 1],
        [0, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 1]
    ],
];
const zReverseShape = [
    [
        [0, 0, 0],
        [0, 1, 1],
        [1, 1, 0]
    ],
    [
        [1, 0, 0],
        [1, 1, 0],
        [0, 1, 0]
    ],
    [
        [0, 1, 1],
        [1, 1, 0],
        [0, 0, 0]
    ],
    [
        [0, 1, 0],
        [0, 1, 1],
        [0, 0, 1]
    ],
];

let shapes = [tShape, oShape, iShape, lShape, zShape, lReverseShape, zReverseShape];
let randomShape = Math.floor(Math.random() * shapes.length);
let randomNext = Math.floor(Math.random() * shapes.length);
let randomRotaion = Math.floor(Math.random() * shapes[randomShape].length);
let randomRotaionNext = Math.floor(Math.random() * shapes[randomNext].length);
let currentIndex = {
    row: 0,
    col: 3,
    size: shapes[randomShape][randomRotaion][0].length,
    shape: shapes[randomShape][randomRotaion]
};
let nextIndex = {
    row: 0,
    col: 0,
    size: shapes[randomNext][randomRotaionNext][0].length,
    shape: shapes[randomNext][randomRotaionNext]
};
window.addEventListener("keydown", keyPush);

let timer;
let speed = 600;
setColor();

function keyPush(event) {
    switch (event.keyCode) {
        case 27:
            stopped = startOrPause();
            break;
        case 37:
            moveLeft();
            break;
        case 38:
            rotate();
            break;
        case 39:
            moveRight();
            break;
        case 40:
            moveDown();
            break;
    }
}
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
function game(time = 0) {
    var deltaTime = time - lastTime;
    lastTime = time;
    dropCounter += deltaTime;
    undraw();
    draw();
    setColor();
    freeze();
    addScore();
    if (dropCounter > dropInterval) {
        currentIndex.row++;
        dropCounter = 0;
    }
    if (!gameOver()) {
        window.requestAnimationFrame(game);
    }
}
timer = window.requestAnimationFrame(game);
function undraw() {
    for (let i = currentIndex.row - 1; i < currentIndex.row + currentIndex.size; i++) {
        for (let j = currentIndex.col - 1; j < currentIndex.col + currentIndex.size; j++) {
            if (i >= 0 && j >= 0 && board[i][j] == 1) {
                board[i][j] = 0;
            }
        }
    }
}
function undrawNext() {

    for (let i = 0; i < next.length; i++) {
        for (let j = 0; j < next[0].length; j++) {
            if (next[i][j] == 1) {
                next[i][j] = 0;
            }
        }
    }
}
function drawNext() {

    for (let i = 0; i < nextIndex.size; i++) {
        for (let j = 0; j < nextIndex.size; j++) {
            if (next[i + nextIndex.row][j + nextIndex.col] == 0) {
                next[i + nextIndex.row][j + nextIndex.col] = nextIndex.shape[i][j];
            }
        }
    }
    next.forEach((row, y) => {
        row.forEach((col, x) => {
            if (col == 0) {
                ctx.fillStyle = 'yellow';
                ctx.fillRect(x * size + 1 + 300, y * size + 1, size - 2, size - 2);
            }
            if (col == 1) {
                ctx.fillStyle = 'pink';
                ctx.fillRect(x * size + 1 + 300, y * size + 1, size - 2, size - 2);
            }
        });
    });
}
function draw() {
    for (let i = 0; i < currentIndex.size; i++) {
        for (let j = 0; j < currentIndex.size; j++) {
            if (board[i + currentIndex.row][j + currentIndex.col] == 0) {
                board[i + currentIndex.row][j + currentIndex.col] = currentIndex.shape[i][j];
            }
        }
    }
    undrawNext();
    drawNext();
}
function setColor() {
    board.forEach((row, y) => {
        row.forEach((col, x) => {
            if (y < height - 1) {
                if (y > 3) {
                    if (col == 0) {
                        ctx.fillStyle = colorShape[0];
                        ctx.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
                    }
                } else {
                    if (col == 0) {
                        ctx.fillStyle = colorShape[colorShape.length - 1];
                        ctx.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
                    }
                }
                if (col == 1) {
                    ctx.fillStyle = colorShape[randomShape + 1];
                    ctx.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
                }
                if (col == -1) {
                    ctx.fillStyle = 'blue';
                    ctx.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
                }
                if (col == 4) {
                    ctx.fillStyle = 'red';
                    ctx.fillRect(x * size + 1, y * size + 1, size - 2, size - 2);
                }
            }
        });
    });
}

function moveLeft() {
    undraw();
    currentIndex.col--;
    //Check 1 column equal 0
    var count1 = 0;
    var count2 = 0;
    for (let i = 0; i < currentIndex.size; i++) {
        if (currentIndex.shape[i][0] == 0) {
            count1++;
        }
        if (currentIndex.shape[i][1] == 0) {
            count2++;
        }
    }

    if (currentIndex.col == -2 && count1 == currentIndex.size && count2 != currentIndex.size) {
        currentIndex.col++;
    }
    if (currentIndex.col == -3 && count2 == currentIndex.size) {
        currentIndex.col++;
    }
    if (currentIndex.col == -1 && count1 != currentIndex.size) {
        currentIndex.col++;
    }
}
function moveRight() {
    undraw();
    currentIndex.col++;
    var count1 = 0;
    var count2 = 0;
    //Check 1 column all element equal 0
    for (let i = 0; i < currentIndex.size; i++) {
        if (currentIndex.shape[i][currentIndex.shape.length - 1] == 0) {
            count1++;
        }
        if (currentIndex.shape[i][currentIndex.shape.length - 2] == 0) {
            count2++;
        }
    }
    if (currentIndex.col > width - currentIndex.size + 1 && count1 == currentIndex.size && count2 != currentIndex.size) {
        currentIndex.col--;
    }
    if (currentIndex.col > width - currentIndex.size + 2 && count2 == currentIndex.size) {
        currentIndex.col--;
    }
    if (currentIndex.col > width - currentIndex.size && count1 != currentIndex.size) {
        currentIndex.col--;
    }
}

function update() {
    for (let i = 0; i < currentIndex.size; i++) {
        for (let j = 0; j < currentIndex.size; j++) {
            if (board[i + currentIndex.row][j + currentIndex.col] == 1) {
                board[i + currentIndex.row][j + currentIndex.col] = -1;
            }
        }
    }
    randomShape = randomNext;
    randomNext = Math.floor(Math.random() * shapes.length);
    randomRotaion = randomRotaionNext;
    randomRotaionNext = Math.floor(Math.random() * shapes[randomNext].length);
    nextIndex = {
        row: 0,
        col: 0,
        size: shapes[randomNext][randomRotaionNext][0].length,
        shape: shapes[randomNext][randomRotaionNext]
    };
    currentIndex = {
        row: 0,
        col: 3,
        size: shapes[randomShape][randomRotaion][0].length,
        shape: shapes[randomShape][randomRotaion]
    };
    dropInterval = 1000;
}

function freeze() {
    var checkFreeze = false;
    for (let i = 0; i < currentIndex.size; i++) {
        for (let j = 0; j < currentIndex.size; j++) {
            if (board[i + currentIndex.row][j + currentIndex.col] == 1 && board[i + currentIndex.row + 1][j + currentIndex.col] == -1) {
                checkFreeze = true;
                break;
            }
        }
    }
    if (checkFreeze) {
        update();
    }
}
function gameOver() {
    var gameover = false;
    for (let i = 4; i > 0; i--) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] == -1) {
                gameover = true;
                break;
            }
        }
    }
    return gameover;
}
function startOrPause() {
    return !stopped;
}
function rotate() {
    if (currentIndex.col >= 0 && currentIndex.col <= width - currentIndex.size) {
        randomRotaion++;
        if (randomRotaion == shapes[randomShape].length) {
            randomRotaion = 0;
        }
        currentIndex.shape = shapes[randomShape][randomRotaion];
    }
};
function moveDown() {
    dropInterval = 1;
}
function addScore() {
    let index = board.findIndex(row => row.every(col => col == -1));
    while (index != -1) {
        if (index != 24) {
            board.splice(index, 1);
            board.splice(0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
            score += 10;
        } else {
            break;
        }
        index = board.findIndex(row => row.every(col => col == -1));
    }
    infoScore.innerHTML = score;
}