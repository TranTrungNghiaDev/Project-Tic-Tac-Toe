const gameBoard = (function gameBoard() {
    let table = [
        null, null, null,
        null, null, null,
        null, null, null
    ];

    function addPlayerMove(cellOfTable, valueOfCell) {
        if (table[cellOfTable] === null) {
            table[cellOfTable] = valueOfCell;
        }
        else {
            alert("Your cell has been taken. Please choose another cell");
        }
    }

    return { table, addPlayerMove }
})();

function Player(name, choice) {
    this.name = name;
    this.choice = choice;
    this.chooseCell = (cellOfTable) => {
        gameBoard.addPlayerMove(cellOfTable, choice);
        displayInfo.alterInfo();
        gameManager.checkGameState(cellOfTable);
    }
}

const gameManager = (function gameManager() {
    let theWinner = null;
    let playerTurn = "firstPlayer";
    let isGameOVer = false;

    function findTheWinner(choice) {
        if(choice === "X") {
            theWinner = firstPlayer.name;
        }
        else {
            theWinner = secondPlayer.name;
        }
    }

    function checkGameState(cellOfTable) {
        let table = gameBoard.table;
        switch (cellOfTable) {
            case 0:
                if (table[0] === table[1] && table[0] === table[2]) {
                    findTheWinner(table[0]);
                }
                else if (table[0] === table[3] && table[0] === table[6]) {
                    findTheWinner(table[0]);
                }
                else if (table[0] === table[4] && table[0] === table[8]) {
                    findTheWinner(table[0]);
                }
                break;

            case 1:
                if(table[1] === table[0] && table[1] === table[2]) {
                    findTheWinner(table[1]);
                }
                else if (table[1] === table[4] === table[7]) {
                    findTheWinner(table[1]);
                }
                break;
            case 2:
                if(table[2] === table[0] && table[2] === table[1]) {
                    findTheWinner(table[2]);
                }
                else if (table[2] === table[5] && table[2] === table[8]) {
                    findTheWinner(table[2]);
                }
                else if (table[2] === table[4] && table[2] === table[6]) {
                    findTheWinner(table[2]);
                }
                break;
            case 3:
                if(table[3] === table[4] && table[3] === table[5]) {
                    findTheWinner(table[3]);
                }
                else if (table[3] === table[0] && table[3] === table[6]) {
                    findTheWinner(table[3]);
                }
                break;
            case 4:
                if(table[4] === table[3] && table[4] === table[5]) {
                    findTheWinner(table[4]);
                }
                else if (table[4] === table[1] && table[4] === table[7]) {
                    findTheWinner(table[4]);
                }
                else if (table[4] === table[0] && table[4] === table[8]) {
                    findTheWinner(table[4]);
                }
                else if (table[4] === table[2] && table[4] === table[6]) {
                    findTheWinner(table[4]);
                }
                break;
            case 5:
                if(table[5] === table[2] && table[5] === table[8]) {
                    findTheWinner(table[5]);
                }
                else if (table[5] === table[3] && table[5] === table[4]) {
                    findTheWinner(table[5]);
                }
                break;
            case 6:
                if(table[6] === table[7] && table[6] === table[8]) {
                    findTheWinner(table[6]);
                }
                else if (table[6] === table[0] && table[6] === table[3]) {
                    findTheWinner(table[6]);
                }
                else if (table[6] === table[4] && table[6] === table[2]) {
                    findTheWinner(table[6]);
                }
                break;
            case 7:
                if(table[7] === table[6] && table[7] === table[8]) {
                    findTheWinner(table[7]);
                }
                else if (table[7] === table[1] && table[7] === table[4]) {
                    findTheWinner(table[7]);
                }
                break;
            case 8:
                if(table[8] === table[6] && table[8] === table[7]) {
                    findTheWinner(table[8]);
                }
                else if (table[8] === table[2] && table[8] === table[5]) {
                    findTheWinner(table[8]);
                }
                else if (table[8] === table[4] && table[8] === table[0]) {
                    findTheWinner(table[8]);
                }
                break;
            default:
                break;
        }

        // If finded the winner
        if(theWinner !== null) {
            alert(`The winner is : ${theWinner}`);
            isGameOVer = true;
        }
        // If not finded the winner
        else {
            // If all cell are taken and not find the winner so the result is tier
            if(!table.includes(null)) {
                alert("Tier");
                isGameOVer = true;
            }
        }
    }

    function checkWhoseTurn() {
        return playerTurn;
    }

    function changeTurn() {
        if(playerTurn === "firstPlayer") {
            playerTurn = "secondPlayer";
        }
        else {
            playerTurn = "firstPlayer";
        }
    }

    function resetGame() {
        gameBoard.table = [
            null, null, null,
            null, null, null,
            null, null, null
        ];

        gameBoardBtn.forEach((element) => {
            element.textContent = ""
        });

        theWinner = null;
        isGameOVer = false;
    }

    function checkGameOver() {
        return isGameOVer;
    }

    return { checkGameState, checkWhoseTurn, changeTurn, resetGame, checkGameOver}
})();

/* Game Start */
let firstPlayer = null;
let secondPlayer = null;

const gameBeginBtn = document.querySelector("#gameBegin");
const dialog = document.querySelector("#dialog");
gameBeginBtn.addEventListener("click", () => {
    dialog.showModal();
});

const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", () => {
    gameManager.resetGame();
    let firstPlayerName = document.querySelector("#first-player").value;
    let secondPlayerName = document.querySelector("#second-player").value;

    firstPlayer = new Player(firstPlayerName, "X");
    secondPlayer = new Player(secondPlayerName, "O");
})

/* Gameboard Button */
const gameBoardBtn = document.querySelectorAll(".gameBoard-btn");
gameBoardBtn.forEach((element) => {
    element.addEventListener("click", () => {
        if(firstPlayer === null || secondPlayer === null) {
            alert("Please start the game");
        }
        else if(element.textContent !== "") {
            alert("This cell has been taken");
        }
        else {
            if(!gameManager.checkGameOver()) {
                let currentTurn = gameManager.checkWhoseTurn();
                if (currentTurn === "firstPlayer") {
                    element.textContent = "X";
                }
                else {
                    element.textContent = "O";
                }
                let id = Number(element.id);
                gameBoard.table[id] = element.textContent;
                gameManager.changeTurn();
                gameManager.checkGameState(id);
            }
            else {
                alert("The game is over ! You must reset the game ");
            }
        }
    });
})