function drawBoard(board){
    let rows = document.getElementsByTagName("tr");
    console.dir(rows[0].children[0]);
    for(let i=0; i<rows.length; i++){
        for(let j=0; j<rows.length; j++){
            rows[i].children[j].innerHTML = board[i][j];
        }
    }
    
    for(k=0; k<81; k++){
        if(input[k].innerHTML == 0){
            input[k].outerHTML = "<td><input type='number' name='num'></td>"
            
        }
    }

    for(z=0; z<9; z++){
        for(x=0; x<9; x++){
            if(x==2 || x==5){
                rows[z].children[x].style.borderRightWidth = '0.5vw';
            }
        }
    }

    function check(){
        if(this.value == parseInt(this.value)){
            console.log(this.value);
            console.log(this.parentNode);
            if(this.value < 1 || this.value > 9){
                this.value = "";
                alert("Please use numbers between 1 and 9");
                console.log(this);
            }
        }
        else{
            alert("Please use numbers between 1 and 9")
            this.value = ""
        }
    }

    for(r=0; r<81; r++){
    input2 = document.getElementsByName('num')[r];
//    console.log(input2);
    input2.addEventListener('blur', check, false)
}
}
   
var sel = document.getElementById('diffDrop').children;
document.getElementById('diffDrop').addEventListener("change", seli);
function seli() {
    if(sel[0].selected == true){
        fetch("https://sugoku.herokuapp.com/board")
        .then(async response => {let wait = (await response.json()); 
                console.log(wait);
                alert("Choose level"); 
                let board = wait.board;
                console.log(board);
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }
    
    if(sel[1].selected == true){
        fetch("https://sugoku.herokuapp.com/board?difficulty=easy")
        .then(async response => {let wait = (await response.json()); 
                console.log(wait);
                alert("Easy Level - Let's play"); 
                let board = wait.board;
                console.log(board);
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }
    
    if(sel[2].selected == true){
        fetch("https://sugoku.herokuapp.com/board?difficulty=medium")
        .then(async response => {let wait = (await response.json()); 
                console.log(wait);
                alert("Medium Level - Let's play"); 
                let board = wait.board;
                console.log(board);
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }

    if(sel[3].selected == true){
        fetch("https://sugoku.herokuapp.com/board?difficulty=hard")
        .then(async response => {let wait = (await response.json()); 
                console.log(wait);
                alert("Hard Level - Let's play"); 
                let board = wait.board;
                console.log(board);
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }
    
    if(sel[4].selected == true){
        fetch("https://sugoku.herokuapp.com/board?difficulty=random")
        .then(async response => {let wait = (await response.json()); 
                console.log(wait);
                alert("Random Level - Let's play"); 
                let board = wait.board;
                console.log(board);
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }
        }    

var input = document.getElementsByTagName('td');

var CA = document.getElementById('clearAll');
CA.addEventListener('click', clear);
function clear(){
    for(i=0; i<81; i++){
        input[i].innerText = "";
    }
    alert("Board Cleared. Select Level")
}

var NG = document.getElementById('game');
NG.addEventListener('click', newG());
function newG(){
    seli();
}