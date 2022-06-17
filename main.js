let scoreX = 0;
let scoreO = 0;

function placeMark(cell){  
    if(notWon()){
        var button = document.getElementById('b'+cell);
        var playerTurn = document.getElementById('result-display');
        if(button.textContent == ''){
            if(checkTurn()){
                button.textContent = 'O';
                button.className = 'btn btn-primary';
                playerTurn.innerText = 'Player X turn'
            }
            else{
                button.textContent = 'X';
                button.className = 'btn btn-danger';
                playerTurn.innerText = 'Player O turn'
            }
        }

        if(!checkWin()){
            checkTie();
        }
    }
}

function reset(){
    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'+i.toString());
        button.textContent = '';
        button.className = 'btn btn-secondary';
    }
    var result = document.getElementById('result-display');
    result.textContent = 'Tic-Tac-Toe';
}

function checkTurn(){
    var count = 0;
    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'+i.toString());
        if(button.textContent != '')
            count += 1;
    }
    return count%2;
}

function checkWin(){
    var values = '_'; //Underscore is for easier visualization of the board for the if statements below
    var winningCells = '';

    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'+i.toString());
        if(button.textContent == ''){
            values = values.concat(' ');
        }
        else{
            values = values.concat(button.textContent);
        }
    }

    if(values[1] == values[2] && values[1] == values[3] && values[1] != ' ')
        winningCells = '123';
    else if(values[4] == values[5] && values[4] == values[6] && values[4] != ' ')
        winningCells = '456';
    else if(values[7] == values[8] && values[9] == values[7] && values[7] != ' ')
        winningCells = '789';
    else if(values[1] == values[4] && values[1] == values[7] && values[1] != ' ')
        winningCells = '147';
    else if(values[2] == values[5] && values[2] == values[8] && values[2] != ' ')
        winningCells = '258';
    else if(values[3] == values[6] && values[3] == values[9] && values[3] != ' ')
        winningCells = '369';
    else if(values[1] == values[5] && values[1] == values[9] && values[1] != ' ')
        winningCells = '159';
    else if(values[3] == values[5] && values[3] == values[7] && values[3] != ' ')
        winningCells = '357';

    if(winningCells != ''){
        var char = '';
        for (var i = 0; i < 3; i++) {
            var button = document.getElementById('b'+winningCells[i]);
            button.className = 'btn btn-success';
            char = button.textContent;
        }

        var result = document.getElementById('result-display');
        result.textContent = `Player ${char} wins`;

        if(char==='X'){
            scoreX++
        }else{
            scoreO++
        }

        document.getElementById('scoreX').innerText = scoreX;
        document.getElementById('scoreO').innerText = scoreO;

    }

    return (winningCells != '');
}

function notWon(){
    var result = true;
    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'+i.toString());
        if(button.className == 'btn btn-success')
            result = false;
    }

    return result;
}

function checkTie(){
    var result = true;
    for (var i = 1; i < 10; i++) {
        var button = document.getElementById('b'+i.toString());
        if(button.textContent == '')
            result = false;
    }
    
    if(result){
        var result = document.getElementById('result-display');
        result.textContent = 'Draw! No one wins!';
    }
}