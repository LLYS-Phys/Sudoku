var rows = document.getElementsByTagName("tr");
var input = document.getElementsByTagName('td');

function drawBoard(board){
    console.dir(rows[0].children[0]);
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
                rows[z].children[x].style.borderRightWidth = '0.5vw';
            }
        }
    }

// console.log(rows[0].children[1].firstElementChild.value);
// console.log(rows[2].children[2].innerText);

    function check(){
        if(this.value == parseInt(this.value)){
            console.dir(this);
            console.log(this.value);
            console.dir(this.parentNode);
            if(this.value < 1 || this.value > 9){
                this.value = "";
                alert("Please use numbers between 1 and 9");
                console.log(this);
            }

//            for(m=0; m<9; m++){
//                for(n=0; n<9; n++){
//                    if(this.value == rows[m].children[n].innerText){
//                        console.log(rows[m].children[n]);
//                        this.value="";
//                        alert("You have the same value in the same row");
//                        return;
//                    }
//                }
//            }

        }
        else{
            alert("Please use numbers between 1 and 9")
            this.value = ""
        }
    }

    function rules(){

        let row1 = rows[0];
        let row2 = rows[1];
        let row3 = rows[2];
        let row4 = rows[3];
        let row5 = rows[4];
        let row6 = rows[5];
        let row7 = rows[6];
        let row8 = rows[7];
        let row9 = rows[8];

        let col1 = [
            rows[0].children[0],
            rows[1].children[0],
            rows[2].children[0],
            rows[3].children[0],
            rows[4].children[0],
            rows[5].children[0],
            rows[6].children[0],
            rows[7].children[0],
            rows[8].children[0]
        ]
        let col2 = [
            rows[0].children[1],
            rows[1].children[1],
            rows[2].children[1],
            rows[3].children[1],
            rows[4].children[1],
            rows[5].children[1],
            rows[6].children[1],
            rows[7].children[1],
            rows[8].children[1]
        ]
        let col3 = [
            rows[0].children[2],
            rows[1].children[2],
            rows[2].children[2],
            rows[3].children[2],
            rows[4].children[2],
            rows[5].children[2],
            rows[6].children[2],
            rows[7].children[2],
            rows[8].children[2]
        ]
        let col4 = [
            rows[0].children[3],
            rows[1].children[3],
            rows[2].children[3],
            rows[3].children[3],
            rows[4].children[3],
            rows[5].children[3],
            rows[6].children[3],
            rows[7].children[3],
            rows[8].children[3]
        ]
        let col5 = [
            rows[0].children[4],
            rows[1].children[4],
            rows[2].children[4],
            rows[3].children[4],
            rows[4].children[4],
            rows[5].children[4],
            rows[6].children[4],
            rows[7].children[4],
            rows[8].children[4]
        ]
        let col6 = [
            rows[0].children[5],
            rows[1].children[5],
            rows[2].children[5],
            rows[3].children[5],
            rows[4].children[5],
            rows[5].children[5],
            rows[6].children[5],
            rows[7].children[5],
            rows[8].children[5]
        ]
        let col7 = [
            rows[0].children[6],
            rows[1].children[6],
            rows[2].children[6],
            rows[3].children[6],
            rows[4].children[6],
            rows[5].children[6],
            rows[6].children[6],
            rows[7].children[6],
            rows[8].children[6]
        ]
        let col8 = [
            rows[0].children[7],
            rows[1].children[7],
            rows[2].children[7],
            rows[3].children[7],
            rows[4].children[7],
            rows[5].children[7],
            rows[6].children[7],
            rows[7].children[7],
            rows[8].children[7]
        ]
        let col9 = [
            rows[0].children[8],
            rows[1].children[8],
            rows[2].children[8],
            rows[3].children[8],
            rows[4].children[8],
            rows[5].children[8],
            rows[6].children[8],
            rows[7].children[8],
            rows[8].children[8]
        ]
        let mat1 = [
            rows[0].children[0],
            rows[0].children[1],
            rows[0].children[2],
            rows[1].children[0],
            rows[1].children[1],
            rows[1].children[2],
            rows[2].children[0],
            rows[2].children[1],
            rows[2].children[2]
        ]
        let mat2 = [
            rows[0].children[3],
            rows[0].children[4],
            rows[0].children[5],
            rows[1].children[3],
            rows[1].children[4],
            rows[1].children[5],
            rows[2].children[3],
            rows[2].children[4],
            rows[2].children[5] 
        ]
        let mat3 = [
            rows[0].children[6],
            rows[0].children[7],
            rows[0].children[8],
            rows[1].children[6],
            rows[1].children[7],
            rows[1].children[8],
            rows[2].children[6],
            rows[2].children[7],
            rows[2].children[8],
        ]
        let mat4 = [
            rows[3].children[0],
            rows[3].children[1],
            rows[3].children[2],
            rows[4].children[0],
            rows[4].children[1],
            rows[4].children[2],
            rows[5].children[0],
            rows[5].children[1],
            rows[5].children[2]
        ]
        let mat5 = [
            rows[3].children[3],
            rows[3].children[4],
            rows[3].children[5],
            rows[4].children[3],
            rows[4].children[4],
            rows[4].children[5],
            rows[5].children[3],
            rows[5].children[4],
            rows[5].children[5] 
        ]
        let mat6 = [
            rows[3].children[6],
            rows[3].children[7],
            rows[3].children[8],
            rows[4].children[6],
            rows[4].children[7],
            rows[4].children[8],
            rows[5].children[6],
            rows[5].children[7],
            rows[5].children[8],
        ]
        let mat7 = [
            rows[6].children[0],
            rows[6].children[1],
            rows[6].children[2],
            rows[7].children[0],
            rows[7].children[1],
            rows[7].children[2],
            rows[8].children[0],
            rows[8].children[1],
            rows[8].children[2]
        ]
        let mat8 = [
            rows[6].children[3],
            rows[6].children[4],
            rows[6].children[5],
            rows[7].children[3],
            rows[7].children[4],
            rows[7].children[5],
            rows[8].children[3],
            rows[8].children[4],
            rows[8].children[5] 
        ]
        let mat9 = [
            rows[6].children[6],
            rows[6].children[7],
            rows[6].children[8],
            rows[7].children[6],
            rows[7].children[7],
            rows[7].children[8],
            rows[8].children[6],
            rows[8].children[7],
            rows[8].children[8],
        ]

        if(this.value == parseInt(this.value)){

            for(j1=0; j1<9; j1++){
                if(this.parentNode.parentNode == row1 && this.value == row1.children[j1].innerText){
                    alert("You have duplicate values in row 1")
                }
            }
            for(j2=0; j2<9; j2++){
                if(this.parentNode.parentNode == row2 && this.value == row2.children[j2].innerText){
                    alert("You have duplicate values in row 2")
                }
            }
            for(j3=0; j3<9; j3++){
                if(this.parentNode.parentNode == row3 && this.value == row3.children[j3].innerText){
                    alert("You have duplicate values in row 3")
                }
            }
            for(j4=0; j4<9; j4++){
                if(this.parentNode.parentNode == row4 && this.value == row4.children[j4].innerText){
                    alert("You have duplicate values in row 4")
                }
            }
            for(j5=0; j5<9; j5++){
                if(this.parentNode.parentNode == row5 && this.value == row5.children[j5].innerText){
                    alert("You have duplicate values in row 5")
                }
            }
            for(j6=0; j6<9; j6++){
                if(this.parentNode.parentNode == row6 && this.value == row6.children[j6].innerText){
                    alert("You have duplicate values in row 6")
                }
            }
            for(j7=0; j7<9; j7++){
                if(this.parentNode.parentNode == row7 && this.value == row7.children[j7].innerText){
                    alert("You have duplicate values in row 7")
                }
            }
            for(j8=0; j8<9; j8++){
                if(this.parentNode.parentNode == row8 && this.value == row8.children[j8].innerText){
                    alert("You have duplicate values in row 8")
                }
            }
            for(j9=0; j9<9; j9++){
                if(this.parentNode.parentNode == row9 && this.value == row9.children[j9].innerText){
                    alert("You have duplicate values in row 9")
                }
            
 //               }
//                let row = rows[j1]
//                for(j2=0;j2<9; j2++){
//                    if(this.value == row.children[j2].innerText){
//                        alert("ifdjg")
//                    }
 //               }
            
//                if(this.value == row1[0].innerText){
//                    alert("You have the same value twice in that row!")
//                }
//                if(this.value == row2[1].innerText){
//                    alert("You have the same value twice in that row!")
//                }
//                if(this.value == row3[2].innerText){
//                    alert("You have the same value twice in that row!")
//                }
//                if(this.value == row4[3].innerText){
//                    alert("You have the same value twice in that row!")
//                }
//                if(this.value == row5[4].innerText){
//                    alert("You have the same value twice in that row!")
//                }
//                if(this.value == row6[5].innerText){
//                    alert("You have the same value twice in that row!")
//                }
//                if(this.value == row7[6].innerText){
//                    alert("You have the same value twice in that row!")
//                }
//                if(this.value == row8[7].innerText){
//                    alert("You have the same value twice in that row!")
//                }
//                if(this.value == row9[8].innerText){
//                    alert("You have the same value twice in that row!")
//                }
            }
        
        }

//        for(i1=0; i1<9; i1++){
//            for(j1=0; j1<input.length; j1++){
//                if(i1 !== j1){
//                    console.dir(row1[j1].children[0])
//                        if(row1[i1].innerText === row1[j1].children[0].value){
//                            alert("nonono")
//                    }
//                }
//            }
//        }



        
//        for(m1=0; m1<9; m1++){
//            if(this.value == row1.children[m1].innerText){
//                console.log(row1.children);
//               this.value = "";
//                alert("You have the same value twice in that row!");
//                return;
//            }
//        }
//        for(m2=0; m2<9; m2++){
//            if(this.value == row2.children[m2].innerText){
//                this.value = "";
//                alert("You have the same value twice in that row!");
//                return;
//            }
//        }
//        for(m3=0; m3<9; m3++){
//            if(this.value == row3.children[m3].innerText){
//                this.value = "";
//                alert("You have the same value twice in that row!");
//                return;
//            }
//        }
//        for(m4=0; m4<9; m4++){
//            if(this.value == row4.children[m4].innerText){
//                this.value = "";
//                alert("You have the same value twice in that row!");
//                return;
//            }
//        }
//        for(m5=0; m5<9; m5++){
//            if(this.value == row5.children[m5].innerText){
//                this.value = "";
//                alert("You have the same value twice in that row!");
//                return;
//            }
//        }
//        for(m6=0; m6<9; m6++){
//            if(this.value == row6.children[m6].innerText){
//                this.value = "";
//                alert("You have the same value twice in that row!");
//                return;
//            }
//        }
//        for(m7=0; m7<9; m7++){
//            if(this.value == row7.children[m7].innerText){
//                this.value = "";
//                alert("You have the same value twice in that row!");
//                return;
//            }
//        }
//        for(m8=0; m8<9; m8++){
//            if(this.value == row8.children[m8].innerText){
//                this.value = "";
//                alert("You have the same value twice in that row!");
//                return;
//            }
//        }
//        for(m9=0; m9<9; m9++){
//            if(this.value == row9.children[m9].innerText){
//                this.value = "";
//                alert("You have the same value twice in that row!");
//                return;
//            }
//        }
    }

    for(r=0; r<81; r++){
    input2 = document.getElementsByName('num')[r];
//    console.log(input2);
    input2.addEventListener('blur', check, false);
    input2.addEventListener('blur', rules, false);
}
    for(t=0; t<9; t++){
//        console.log(rows[t]);
//        console.log(rows[t].children)
    }

 //   document.getElementsByTagName('input').style.color = "yellow";
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