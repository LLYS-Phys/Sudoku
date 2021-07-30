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
       //     console.log(row1.children[1].firstElementChild.value);
            for(j1=0; j1<9; j1++){
                if(this.parentNode.parentNode == row1 && this.value == row1.children[j1].innerText){
             //       console.dir(row1.children[j1].children[0].value);
                    this.style.color = 'red';
                    alert("You have duplicate values in row 1")
                    return
                }
                else if(row1.children[j1].innerText == 0 && this.parentNode.parentNode == row1 && this.parentNode !== row1.children[j1] && this.value == row1.children[j1].children[0].value){
                    console.log(this.parentNode.parentNode);
                    console.log(this);
                    this.style.color = 'red';
                    alert("You have duplicate values in row 1")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            
            for(j2=0; j2<9; j2++){
                if(this.parentNode.parentNode == row2 && this.value == row2.children[j2].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 2")
                    return
                }
                else if(row2.children[j2].innerText == 0 && this.parentNode.parentNode == row2 && this.parentNode !== row2.children[j2] && this.value == row2.children[j2].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 2")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j3=0; j3<9; j3++){
                if(this.parentNode.parentNode == row3 && this.value == row3.children[j3].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 3")
                    return
                }
                else if(row3.children[j3].innerText == 0 && this.parentNode.parentNode == row3 && this.parentNode !== row3.children[j3] && this.value == row3.children[j3].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 3")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j4=0; j4<9; j4++){
                if(this.parentNode.parentNode == row4 && this.value == row4.children[j4].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 4")
                    return
                }
                else if(row4.children[j4].innerText == 0 && this.parentNode.parentNode == row4 && this.parentNode !== row4.children[j4] && this.value == row4.children[j4].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 4")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j5=0; j5<9; j5++){
                if(this.parentNode.parentNode == row5 && this.value == row5.children[j5].innerText){
                    alert("You have duplicate values in row 5")
                }
                else if(row5.children[j5].innerText == 0 && this.parentNode.parentNode == row5 && this.parentNode !== row5.children[j5] && this.value == row5.children[j5].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 5")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102'}
            }
            for(j6=0; j6<9; j6++){
                if(this.parentNode.parentNode == row6 && this.value == row6.children[j6].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 6")
                    return
                }
                else if(row6.children[j6].innerText == 0 && this.parentNode.parentNode == row6 && this.parentNode !== row6.children[j6] && this.value == row6.children[j6].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 6")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j7=0; j7<9; j7++){
                if(this.parentNode.parentNode == row7 && this.value == row7.children[j7].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 7")
                    return
                }
                else if(row7.children[j7].innerText == 0 && this.parentNode.parentNode == row7 && this.parentNode !== row7.children[j7] && this.value == row7.children[j7].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 7")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j8=0; j8<9; j8++){
                if(this.parentNode.parentNode == row8 && this.value == row8.children[j8].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 8")
                    return
                }
                else if(row8.children[j8].innerText == 0 && this.parentNode.parentNode == row8 && this.parentNode !== row8.children[j8] && this.value == row8.children[j8].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 8")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j9=0; j9<9; j9++){
                if(this.parentNode.parentNode == row9 && this.value == row9.children[j9].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 9")
                    return
                }
                else if(row9.children[j9].innerText == 0 && this.parentNode.parentNode == row9 && this.parentNode !== row9.children[j9] && this.value == row9.children[j9].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in row 9")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j10=0; j10<9; j10++){
                if(col1.includes(this.parentNode) && this.value == col1[j10].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 1")
                    return
                }
                else if(col1[j10].innerText == 0 && col1.includes(this.parentNode) && this.parentNode !== col1[j10] && this.value == col1[j10].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 1")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j11=0; j11<9; j11++){
                if(col2.includes(this.parentNode) && this.value == col2[j11].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 2")
                    return
                }
                else if(col2[j11].innerText == 0 && col2.includes(this.parentNode) && this.parentNode !== col2[j11] && this.value == col2[j11].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 2")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j12=0; j12<9; j12++){
                if(col3.includes(this.parentNode) && this.value == col3[j12].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 3")
                    return
                }
                else if(col3[j12].innerText == 0 && col3.includes(this.parentNode) && this.parentNode !== col3[j12] && this.value == col3[j12].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 3")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j13=0; j13<9; j13++){
                if(col4.includes(this.parentNode) && this.value == col4[j13].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 4")
                    return
                }
                else if(col4[j13].innerText == 0 && col4.includes(this.parentNode) && this.parentNode !== col4[j13] && this.value == col4[j13].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 4")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j14=0; j14<9; j14++){
                if(col5.includes(this.parentNode) && this.value == col5[j14].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 5")
                    return
                }
                else if(col5[j14].innerText == 0 && col5.includes(this.parentNode) && this.parentNode !== col5[j14] && this.value == col5[j14].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 5")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j15=0; j15<9; j15++){
                if(col6.includes(this.parentNode) && this.value == col6[j15].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 6")
                    return
                }
                else if(col6[j15].innerText == 0 && col6.includes(this.parentNode) && this.parentNode !== col6[j15] && this.value == col6[j15].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 6")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j16=0; j16<9; j16++){
                if(col7.includes(this.parentNode) && this.value == col7[j16].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 7")
                    return
                }
                else if(col7[j16].innerText == 0 && col7.includes(this.parentNode) && this.parentNode !== col7[j16] && this.value == col7[j16].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 7")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j17=0; j17<9; j17++){
                if(col8.includes(this.parentNode) && this.value == col8[j17].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 8")
                    return
                }
                else if(col8[j17].innerText == 0 && col8.includes(this.parentNode) && this.parentNode !== col8[j17] && this.value == col8[j17].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 8")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j18=0; j18<9; j18++){
                if(col9.includes(this.parentNode) && this.value == col9[j18].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 9")
                    return
                }
                else if(col9[j18].innerText == 0 && col9.includes(this.parentNode) && this.parentNode !== col9[j18] && this.value == col9[j18].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in column 9")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }

            for(j19=0; j19<9; j19++){
                if(mat1.includes(this.parentNode) && this.value == mat1[j19].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 1st 3x3 range")
                    return
                }
                else if(mat1[j19].innerText == 0 && mat1.includes(this.parentNode) && this.parentNode !== mat1[j19] && this.value == mat1[j19].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 1st 3x3 range")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j20=0; j20<9; j20++){
                if(mat2.includes(this.parentNode) && this.value == mat2[j20].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 1st 3x3 range")
                    return
                }
                else if(mat2[j20].innerText == 0 && mat2.includes(this.parentNode) && this.parentNode !== mat2[j20] && this.value == mat2[j20].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 2nd 3x3 range")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j21=0; j21<9; j21++){
                if(mat3.includes(this.parentNode) && this.value == mat3[j21].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 3rd 3x3 range")
                    return
                }
                else if(mat3[j21].innerText == 0 && mat3.includes(this.parentNode) && this.parentNode !== mat3[j21] && this.value == mat3[j21].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 3rd 3x3 range")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j22=0; j22<9; j22++){
                if(mat4.includes(this.parentNode) && this.value == mat4[j22].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 4th 3x3 range")
                    return
                }
                else if(mat4[j22].innerText == 0 && mat4.includes(this.parentNode) && this.parentNode !== mat4[j22] && this.value == mat4[j22].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 4th 3x3 range")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j23=0; j23<9; j23++){
                if(mat5.includes(this.parentNode) && this.value == mat5[j23].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 5th 3x3 range")
                    return
                }
                else if(mat5[j23].innerText == 0 && mat5.includes(this.parentNode) && this.parentNode !== mat5[j23] && this.value == mat5[j23].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 5th 3x3 range")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j24=0; j24<9; j24++){
                if(mat6.includes(this.parentNode) && this.value == mat6[j24].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 6th 3x3 range")
                    return
                }
                else if(mat6[j24].innerText == 0 && mat6.includes(this.parentNode) && this.parentNode !== mat6[j24] && this.value == mat6[j24].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 6th 3x3 range")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j25=0; j25<9; j25++){
                if(mat7.includes(this.parentNode) && this.value == mat7[j25].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 7th 3x3 range")
                    return
                }
                else if(mat7[j25].innerText == 0 && mat7.includes(this.parentNode) && this.parentNode !== mat7[j25] && this.value == mat7[j25].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 7th 3x3 range")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j26=0; j26<9; j26++){
                if(mat8.includes(this.parentNode) && this.value == mat8[j26].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 8th 3x3 range")
                    return
                }
                else if(mat8[j26].innerText == 0 && mat8.includes(this.parentNode) && this.parentNode !== mat8[j26] && this.value == mat8[j26].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 8th 3x3 range")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(j27=0; j27<9; j27++){
                if(mat9.includes(this.parentNode) && this.value == mat9[j27].innerText){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 9th 3x3 range")
                    return
                }
                else if(mat9[j27].innerText == 0 && mat9.includes(this.parentNode) && this.parentNode !== mat9[j27] && this.value == mat9[j27].children[0].value){
                    this.style.color = 'red';
                    alert("You have duplicate values in the 9th 3x3 range")
                    return
                }
                else{this.style.color = 'rgb(102, 102, 102)'}
            }
            for(r=0; r<9; r++){
                if(row1.children[r].innerText == 0 && 
                    row2.children[r].innerText == 0 &&
                    row3.children[r].innerText == 0 &&
                    row4.children[r].innerText == 0 &&
                    row5.children[r].innerText == 0 &&
                    row6.children[r].innerText == 0 &&
                    row7.children[r].innerText == 0 &&
                    row8.children[r].innerText == 0 &&
                    row9.children[r].innerText == 0){
                    if(row1.children[r].children[0].value !== "" &&
                    row2.children[r].children[0].value !== "" &&
                    row3.children[r].children[0].value !== "" &&
                    row4.children[r].children[0].value !== "" &&
                    row5.children[r].children[0].value !== "" &&
                    row6.children[r].children[0].value !== "" &&
                    row7.children[r].children[0].value !== "" &&
                    row8.children[r].children[0].value !== "" &&
                    row9.children[r].children[0].value !== ""
                    ){
                        alert("Congratulations")
                    }
                }
            }
        }
    }

//    else if(row7.children[j7].innerText == 0 && this.parentNode.parentNode == row7 && this.parentNode !== row7.children[j7] && this.value == row7.children[j7].children[0].value){
//        this.style.color = 'red';
//        alert("You have duplicate values in row 7")
//        return
//    }

    for(r=0; r<81; r++){
    input2 = document.getElementsByName('num')[r];
//    console.log(input2);
    input2.addEventListener('blur', check, false);
    input2.addEventListener('blur', rules, false);

//    if(input[r].innerText !== 0 || "" && input[r].children[0].value !==0 || ""){
//        alert("Congratulations!")
//    }
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

function Undo(){
    document.execCommand("undo", false, null)
}
function Redo(){
    document.execCommand("redo", false, null)
}