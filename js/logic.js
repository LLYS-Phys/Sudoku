var rows = document.getElementsByTagName("tr");
var input = document.getElementsByTagName('td');

function drawBoard(board){
    for(let i=0; i<rows.length; i++){
        for(let j=0; j<rows.length; j++){
            rows[i].children[j].innerHTML = board[i][j];
        }
    }
    
    for(k=0; k<81; k++){
        if(input[k].innerHTML == 0){
            input[k].outerHTML = "<td><input type='number' name='num'></td>";
        }
    }

    for(z=0; z<9; z++){
        for(x=0; x<9; x++){
            if(x==2 || x==5){
                rows[z].children[x].classList.add("col");
            }
        }
    }

    function check(){
        if(this.value == parseInt(this.value)){
            if(this.value < 1 || this.value > 9){
                this.value = "";
                alert("Please use numbers between 1 and 9");
            }
        }

        for (i=0; i<81; i++){
            let row = Math.floor(i/9)
            let col = i%9
            if (input[i].children[0] != undefined && input[i].children[0].value != ""){
                board[row][col] = parseInt(input[i].children[0].value)
            }
            else{
                board[row][col] = 0
            }
        }

        counter = 0
        for (r=0; r<9; r++){
            for (c=0; c<9; c++){
                if (board[r][c] == 0){
                    counter+=1
                }
            }
        }

        if (counter==0){
            alert("Congratulations!")
        }

        // console.log(board)
    }

    function rules(){
        let col1 = [], col2 = [], col3 = [], col4 = [], col5 = [], col6 = [], col7 = [], col8 = [], col9 = []

        for (i=0; i<rows.length; i++){
            col1.push(rows[i].children[0])
            col2.push(rows[i].children[1])
            col3.push(rows[i].children[2])
            col4.push(rows[i].children[3])
            col5.push(rows[i].children[4])
            col6.push(rows[i].children[5])
            col7.push(rows[i].children[6])
            col8.push(rows[i].children[7])
            col9.push(rows[i].children[8])
        }

        let cols = [col1,col2,col3,col4,col5,col6,col7,col8,col9]

        let mat1 = [], mat2 = [], mat3 = [], mat4 = [], mat5 = [], mat6 = [], mat7 = [], mat8 = [], mat9 = []

        for (j1=0; j1<3; j1++){
            for (j2=0; j2<3; j2++){
                mat1.push(rows[j1].children[j2])
                mat2.push(rows[j1].children[j2+3])
                mat3.push(rows[j1].children[j2+6])
                mat4.push(rows[j1+3].children[j2])
                mat5.push(rows[j1+3].children[j2+3])
                mat6.push(rows[j1+3].children[j2+6])
                mat7.push(rows[j1+6].children[j2])
                mat8.push(rows[j1+6].children[j2+3])
                mat9.push(rows[j1+6].children[j2+6])
            }
        }

        let mats = [mat1,mat2,mat3,mat4,mat5,mat6,mat7,mat8,mat9]

        if(this.value == parseInt(this.value)){
            for (x=0; x<cols.length; x++){
                for (y=0; y<rows.length; y++){
                    if((this.parentNode.parentNode == rows[y] && this.value == rows[y].children[x].innerText) || 
                        (rows[y].children[x].innerText == 0 && this.parentNode.parentNode == rows[y] && this.parentNode !== rows[y].children[x] && this.value == rows[y].children[x].children[0].value)){
                            this.style.color = 'red';
                            alert("You have duplicate values in row " + (y+1).toString())
                            return
                        }
                    else if((cols[x].includes(this.parentNode) && this.value == cols[x][y].innerText) ||
                        (cols[x][y].innerText == 0 && cols[x].includes(this.parentNode) && this.parentNode !== cols[x][y] && this.value == cols[x][y].children[0].value)){
                        this.style.color = 'red';
                        alert("You have duplicate values in column " + (x+1).toString())
                        return
                    }
                    else if((mats[x].includes(this.parentNode) && this.value == mats[x][y].innerText) || 
                        (mats[x][y].innerText == 0 && mats[x].includes(this.parentNode) && this.parentNode !== mats[x][y] && this.value == mats[x][y].children[0].value)){
                        this.style.color = 'red';
                        let number_namings = ["1st", "2nd", "3rd", "th"]
                        let number = ""
                        if (x<3){
                            number = number_namings[x]
                        }
                        else{
                            number = (x+1).toString() + number_namings[3]
                        }
                        alert("You have duplicate values in the " + number + " 3x3 range")
                        return
                    }
                    else{
                        this.style.color = 'rgb(102, 102, 102)'
                    }
                }
            }
        }
    }

    for(r=0; r<81; r++){
        input2 = document.getElementsByName('num')[r];
        input2.addEventListener('blur', check, false);
        input2.addEventListener('blur', rules, false);
    }
}
   
var sel = document.getElementById('diffDrop').children;
document.getElementById('diffDrop').addEventListener("change", seli);
function seli() {
    if(sel[0].selected == true){
        fetch("https://sugoku.onrender.com/board")
        .then(async response => {let wait = (await response.json()); 
                alert("Choose level"); 
                let board = wait.board;
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }
    
    if(sel[1].selected == true){
        fetch("https://sugoku.onrender.com/board?difficulty=easy")
        .then(async response => {let wait = (await response.json()); 
                alert("Easy Level - Let's play"); 
                let board = wait.board;
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }
    
    if(sel[2].selected == true){
        fetch("https://sugoku.onrender.com/board?difficulty=medium")
        .then(async response => {let wait = (await response.json()); 
                alert("Medium Level - Let's play"); 
                let board = wait.board;
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }

    if(sel[3].selected == true){
        fetch("https://sugoku.onrender.com/board?difficulty=hard")
        .then(async response => {let wait = (await response.json()); 
                alert("Hard Level - Let's play"); 
                let board = wait.board;
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }
    
    if(sel[4].selected == true){
        fetch("https://sugoku.onrender.com/board?difficulty=random")
        .then(async response => {let wait = (await response.json()); 
                alert("Random Level - Let's play"); 
                let board = wait.board;
                drawBoard(board);
                })
        .catch(error => {console.log("")})    }
        }    

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

function Undo(){
    document.execCommand("undo", false, null)
}
function Redo(){
    document.execCommand("redo", false, null)
}