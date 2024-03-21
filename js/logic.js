var rows = document.getElementsByTagName("tr");
var input = document.getElementsByTagName('td');

var switchMistakes = document.getElementById("switches-container")
var showMistakes = document.getElementsByClassName("switches-container")[0].querySelectorAll('input')[0]
var showMistakesButton = document.getElementById("showMistakesButton")

var mistakesToggle = true
var errors = false

switchMistakes.addEventListener("click", () => {
    mistakesToggle = showMistakes.checked
})

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
        this.blur()
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
            errors = false
            checkWin()
            if (errors==false){
                alert("Congratulations!")
                let inputs = document.querySelectorAll("input[type=number]")
                inputs.forEach(function(input){
                    input.disabled = true
                })
            }
            else{
                alert("You have errors!")
            }
        }
    }

    function checkWin(){
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)   
        let duplicates = []

        for (r=0; r<9; r++){
            duplicates.push(findDuplicates(board[r]))
            if (duplicates[r].length > 0){
                errors = true
            }
        }
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
            this.addEventListener('keyup', (event) => {
                if (this.style.color == "red"){
                    this.style.color = 'rgb(102, 102, 102)'
                }
                if (this.value != "" && (event.which == 8 || event.which == 46)){
                    this.value = ""
                }
            })
            for (x=0; x<cols.length; x++){
                for (y=0; y<rows.length; y++){
                    if((this.parentNode.parentNode == rows[y] && this.value == rows[y].children[x].innerText) || 
                        (rows[y].children[x].innerText == 0 && this.parentNode.parentNode == rows[y] && this.parentNode !== rows[y].children[x] && this.value == rows[y].children[x].children[0].value)){
                            this.style.color = 'red';
                            alert("You have duplicate values in row " + (y+1).toString())
                            errors = true
                            return
                        }
                    else if((cols[x].includes(this.parentNode) && this.value == cols[x][y].innerText) ||
                        (cols[x][y].innerText == 0 && cols[x].includes(this.parentNode) && this.parentNode !== cols[x][y] && this.value == cols[x][y].children[0].value)){
                            this.style.color = 'red';
                            alert("You have duplicate values in column " + (x+1).toString())
                            errors = true
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
                            errors = true
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
        cell = document.getElementsByName('num')[r];
        cell.addEventListener('input', check, false);
        if (mistakesToggle){
            cell.addEventListener('input', rules, false);
        }
    }

}

function selectDiff(diff) {
    fetch("https://sugoku.onrender.com/board?difficulty=" + diff)
        .then(async response => {let wait = (await response.json()); 
                alert(capitalizeFirstLetter(diff) + " Level - Let's play"); 
                let board = wait.board;
                drawBoard(board);
                })
        .catch(error => {console.log("")})
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

var CA = document.getElementById('resetBoard');
CA.addEventListener('click', reset);
function reset(){
    let inputs = document.querySelectorAll("input[type=number]")
    inputs.forEach(function(input){
        input.value = "";
    })
}

function newG(diff){
    selectDiff(diff);
}

function Undo(){
    document.execCommand("undo", false, null)
}
function Redo(){
    document.execCommand("redo", false, null)
}

function openModal(){
    document.getElementById("selectLevel").children[0].classList.add("active")
    document.getElementById("selectLevel").classList.add("active")
}
function closeModal(){
    document.getElementById("selectLevel").children[0].classList.remove("active")
    document.getElementById("selectLevel").classList.remove("active")
}