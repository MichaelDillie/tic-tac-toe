var prompt = require('prompt-sync').prompt;
var board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
];
var usedMoves = [];
var userInput = '';
var x = '';
var y = '';
var counter = 1;
var playerCount = 1;

//

var playerTurn = function() {
    if(playerCount % 2 === 0) {
        return player2;
    }
    else {
        return player1;
    }
}

var turnCounter = function() {
    if (counter % 2 === 0) {
        return 'O';
    } else {
        return 'X';
    }
}

var allowedMoves = function() {
    if (userInput === '1 1' || userInput === '1 2' || userInput === '1 3' || userInput === '2 1' || userInput === '2 2' || userInput === '2 3' || userInput === '3 1' || userInput === '3 2' || userInput === '3 3') {
        userInput = userInput.split(' ');
        x = parseInt(userInput[0]);
        y = parseInt(userInput[1]);
        return true;
    } else {
        return false;
    }
}


console.log('Welcome to EXTREAM TIC-TAC-TOE\n' +
    'ARE YOU READY TO BEGIN TAC, TACIN, AND TOEIN??????? (yes or no)');
var ready = prompt();
if (ready === 'yes') {
    console.log('Then lets begin.\n' +
        'Player one enter your name');
    var player1 = prompt();
    if (player1 === 'aaron' || player1 === 'Aaron' || player1 === 'allen' || player1 === 'Allen') {
        while (true) {
            console.log('GOT YOU!!!');
        }
    } else {
        console.log('Player two enter your name');
        var player2 = prompt();
        console.log('Awsome!' + ' ' + player1 + ' ' + 'your up first');
        var printBorad = function() {
            console.log(
                '       1     ' + ' 2      ' + '3        \n' +
                '   ~~~~~~~~~~~~~~~~~~~~~~ \n' +
                '1  ' + '|     ' + board[0][0] + '|     ' + board[0][1] + '|     ' + board[0][2] + '|\n' +
                '   ~~~~~~~~~~~~~~~~~~~~~~ \n' +
                '2  ' + '|     ' + board[1][0] + '|     ' + board[1][1] + '|     ' + board[1][2] + '|\n' +
                '   ~~~~~~~~~~~~~~~~~~~~~~ \n' +
                '3  ' + '|     ' + board[2][0] + '|     ' + board[2][1] + '|     ' + board[2][2] + '|\n' +
                '   ~~~~~~~~~~~~~~~~~~~~~~ \n'
            );
        }
        printBorad();












        userInput = prompt();
        if (allowedMoves()) {
            board[x - 1][y - 1] = turnCounter();
            usedMoves.push();
            counter = counter += 1;
            playerCount = playerCount += 1;
            // win();
            printBorad();
        } else {
            while(userInput != allowedMoves) {
                console.log('Try again')
                prompt();
                printBorad();
            }
        }
    }
}
