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
        gameManager.checkGameOver(cellOfTable);
    }
}



const gameManager = (function gameManager() {
    function checkGameOver(cellOfTable) {
        let table = gameBoard.table;
        switch (cellOfTable) {
            case 0:
                if (table[0] === table[1] && table[0] === table[2]) {
                    alert("Game Over !");
                }
                else if (table[0] === table[3] && table[0] === table[6]) {
                    alert("Game Over !");
                }
                else if (table[0] === table[4] && table[0] === table[8]) {
                    alert("Game Over !");
                }
                break;

            case 1:
                if(table[1] === table[0] && table[1] === table[2]) {
                    alert("Game Over");
                }
                else if (table[1] === table[4] === table[7]) {
                    alert("Game Over");
                }
                break;
            case 2:
                if(table[2] === table[0] && table[2] === table[1]) {
                    alert("Game Over");
                }
                else if (table[2] === table[5] && table[2] === table[8]) {
                    alert("Game Over");
                }
                else if (table[2] === table[4] && table[2] === table[6]) {
                    alert("Game Over");
                }
                break;
            case 3:
                if(table[3] === table[4] && table[3] === table[5]) {
                    alert("Game Over");
                }
                else if (table[3] === table[0] && table[3] === table[6]) {
                    alert("Game Over");
                }
                break;
            case 4:
                if(table[4] === table[3] && table[4] === table[5]) {
                    alert("Game Over");
                }
                else if (table[4] === table[1] && table[4] === table[7]) {
                    alert("Game Over");
                }
                else if (table[4] === table[0] && table[4] === table[8]) {
                    alert("Game Over");
                }
                else if (table[4] === table[2] && table[4] === table[6]) {
                    alert("Game Over");
                }
                break;
            case 5:
                if(table[5] === table[2] && table[5] === table[8]) {
                    alert("Game Over");
                }
                else if (table[5] === table[3] && table[5] === table[4]) {
                    alert("Game Over");
                }
                break;
            case 6:
                if(table[6] === table[7] && table[6] === table[8]) {
                    alert("Game Over");
                }
                else if (table[6] === table[0] && table[6] === table[3]) {
                    alert("Game Over");
                }
                else if (table[6] === table[4] && table[6] === table[2]) {
                    alert("Game Over");
                }
                break;
            case 7:
                if(table[7] === table[6] && table[7] === table[8]) {
                    alert("Game Over");
                }
                else if (table[7] === table[1] && table[7] === table[4]) {
                    alert("Game Over");
                }
                break;
            case 8:
                if(table[8] === table[6] && table[8] === table[7]) {
                    alert("Game Over");
                }
                else if (table[8] === table[2] && table[8] === table[5]) {
                    alert("Game Over");
                }
                else if (table[8] === table[4] && table[8] === table[0]) {
                    alert("Game Over");
                }
                break;
            default:
                break;
        }
    }

    return { checkGameOver }
})();
