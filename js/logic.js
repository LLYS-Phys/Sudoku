var rows = document.getElementsByTagName("tr");
var input = document.getElementsByTagName('td');

var switchMistakes = document.getElementById("switches-container")
var showMistakes = document.getElementsByClassName("switches-container")[0].querySelectorAll('input')[0]
var showMistakesButton = document.getElementById("showMistakesButton")

var mistakesToggle = true
var errors = false

var counter = 0
var tempValue
var clear = false

var headerTitleBg = ""
var headerTitleEn = ""

var inputColor = "#666666"

var resetBoard = document.getElementById('resetBoard');

resetBoard.disabled = true
resetBoard.classList.add('disabled')

const beforeUnloadHandler = (event) => {
    event.preventDefault()
    event.returnValue = true;
};

document.querySelectorAll('.color').forEach(function(color){
    color.addEventListener('click', function(){
        if (color.id == "gray" || color.id == "grayButton"){
            inputColor = "#666666"
            document.querySelectorAll('.color').forEach(function(color){
                color.classList.remove('active')
            })
            color.classList.add('active')
        }
        else if (color.id == "yellow" || color.id == "yellowButton"){
            inputColor = "#8B8000"
            document.querySelectorAll('.color').forEach(function(color){
                color.classList.remove('active')
            })
            color.classList.add('active')
        }
        else if (color.id == "green" || color.id == "greenButton"){
            inputColor = "#008000"
            document.querySelectorAll('.color').forEach(function(color){
                color.classList.remove('active')
            })
            color.classList.add('active')
        }
        else{
            inputColor = "#0000FF"
            document.querySelectorAll('.color').forEach(function(color){
                color.classList.remove('active')
            })
            color.classList.add('active')
        }

        document.querySelector("#color").value = inputColor
        document.querySelector("#color_mobile").value = inputColor
    })
})

document.querySelector("#color").addEventListener("change", () => {
    inputColor = document.querySelector("#color").value
    hoverColors()
})

document.querySelector("#color_mobile").addEventListener("change", () => {
    inputColor = document.querySelector("#color_mobile").value
    hoverColors()
})

function hoverColors(){
    let colors = ["#666666", "#8B8000", "#008000", "#0000FF"]
    document.querySelectorAll('.color').forEach(function(color){
        color.classList.remove('active')
    })
    colors.forEach(function(color){
        if (inputColor == color){
            document.querySelectorAll('.color').forEach(function(color){
                color.classList.remove('active')
            })
            if (color == colors[0]){
                document.querySelectorAll('.color')[0].classList.add("active")
            }
            else if (color == colors[1]){
                document.querySelectorAll('.color')[1].classList.add("active")
            }
            else if (color == colors[2]){
                document.querySelectorAll('.color')[2].classList.add("active")
            }
            else if (color == colors[3]){
                document.querySelectorAll('.color')[3].classList.add("active")
            }
        }
    })
}

switchMistakes.addEventListener("click", () => {
    mistakesToggle = showMistakes.checked
})

function drawBoard(board){
    resetBoard.disabled = false
    resetBoard.classList.remove('disabled')
    window.addEventListener("beforeunload", beforeUnloadHandler);

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

    function focus(){
        this.classList.add('active')
        tempValue = this.valueAsNumber
        this.value = ""
        document.querySelectorAll(".button").forEach(function(button){
            button.disabled = true
            button.classList.add('disabled')
        })
    }
    function unfocus(){
        this.classList.remove('active')
        if (clear == false){
            if (this.value == ""){
                this.value = tempValue
            }
        }
        else{
            this.value = ""
            clear = false
        }
        setTimeout(() => {
            document.querySelectorAll(".button").forEach(function(button){
                button.disabled = false
                button.classList.remove('disabled')
            })
        }, 200);
    }

    function clearField(){
        clear = true
        this.blur()
    }

    function check(){
        this.blur()
        this.addEventListener('keyup', (event) => {
            if (event.which == 8 || event.which == 46){
                check()
            }
        })
        if(this.value == parseInt(this.value)){
            if(this.value < 1 || this.value > 9){
                this.value = "";
                document.documentElement.lang == "en" ? openInfoWindow("Please use numbers between 1 and 9", 0) : openInfoWindow("Моля използвай числа между 1 и 9", 0)
            }
        }

        for (i=0; i<81; i++){
            let row = Math.floor(i/9)
            let col = i%9
            if (input[i].children[0] != undefined && input[i].children[0].value != ""){
                board[row][col] = parseInt(input[i].children[0].value)
            }
            else if (input[i].children[0] != undefined && input[i].children[0].value == ""){
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
            errors = false
            checkWin()
            if (errors==false){
                document.documentElement.lang == "en" ? openInfoWindow("Congratulations!", displayTime) : openInfoWindow("Поздравления!", displayTime)
                let inputs = document.querySelectorAll("input[type=number]")
                inputs.forEach(function(input){
                    input.disabled = true
                    input.classList.add("solved")
                    stopStopwatch()
                })
            }
            else{
                document.documentElement.lang == "en" ? openInfoWindow("You have errors!", 1) : openInfoWindow("Имате грешки!", 1)
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
                    this.style.color = inputColor
                }
                if (this.value != "" && (event.which == 8 || event.which == 46)){
                    this.value = ""
                    this.blur()
                }
            })
            for (x=0; x<cols.length; x++){
                for (y=0; y<rows.length; y++){
                    if((this.parentNode.parentNode == rows[y] && this.value == rows[y].children[x].innerText) || 
                        (rows[y].children[x].innerText == 0 && this.parentNode.parentNode == rows[y] && this.parentNode !== rows[y].children[x] && this.value == rows[y].children[x].children[0].value)){
                            this.style.color = 'red';
                            document.documentElement.lang == "en" ? openInfoWindow("You have duplicate values in row " + (y+1).toString(), 1) : openInfoWindow("Имате грешка на ред " + (y+1).toString(), 1)
                            errors = true
                            return
                        }
                    else if((cols[x].includes(this.parentNode) && this.value == cols[x][y].innerText) ||
                        (cols[x][y].innerText == 0 && cols[x].includes(this.parentNode) && this.parentNode !== cols[x][y] && this.value == cols[x][y].children[0].value)){
                            this.style.color = 'red';
                            document.documentElement.lang == "en" ? openInfoWindow("You have duplicate values in column " + (x+1).toString(), 1) : openInfoWindow("Имате грешка в колона " + (x+1).toString(), 1)
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
                            document.documentElement.lang == "en" ? openInfoWindow("You have duplicate values in the " + number + " 3x3 range", 1) :  openInfoWindow("Имате грешка в квадрат " + (x+1).toString(), 1)
                            errors = true
                            return
                    }
                    else{
                        this.style.color = inputColor
                    }
                }
            }
        }
    }

    for(r=0; r<81; r++){
        let cell = document.getElementsByName('num')[r];
        if (cell != undefined){
            cell.addEventListener('focus', focus, false);
            cell.addEventListener('blur', unfocus, false);
            cell.addEventListener('dblclick', clearField, false)
            cell.addEventListener('input', check, false);
            if (mistakesToggle){
                cell.addEventListener('input', rules, false);
            }
        }
    }

}

function selectDiff(diff) {
    fetch("https://sugoku.onrender.com/board?difficulty=" + diff)
        .then(async response => {
                let wait = (await response.json()); 
                inputColor = "#666666"
                document.querySelector("#color").value = "#666666"
                document.querySelector("#color_mobile").value = "#666666"
                let board = wait.board
                if (board){
                    document.getElementById("loader-overlay").classList.remove("active")
                    let bg_diff
                    if (diff=="easy"){ bg_diff = "Лесно" }
                    else if (diff=="medium"){ bg_diff = "Средно" }
                    else if (diff=="hard"){ bg_diff = "Трудно" }
                    else if (diff=="random"){ bg_diff = "Случайно" }
                    document.documentElement.lang == "en" ? document.getElementById("title").textContent = `Level: ${capitalizeFirstLetter(diff)}` : document.getElementById("title").textContent = `Ниво: ${bg_diff}`
                    headerTitleEn = `Level: ${capitalizeFirstLetter(diff)}`
                    headerTitleBg = `Ниво: ${bg_diff}`
                    drawBoard(board);
                    resetStopwatch()
                    startStopwatch()
                }
                })
        .catch(error => {document.documentElement.lang == "en" ? openInfoWindow("Network problem, please try again later!", 0) : openInfoWindow("Проблеми с връзката, моля опитайте по-късно!", 0)})
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reset(){
    let inputs = document.querySelectorAll("input[type=number]")
    inputs.forEach(function(input){
        input.value = "";
        input.disabled = false;
        input.classList.remove("solved")
        inputColor = "#666666"
        document.querySelector("#color").value = inputColor
        document.querySelector("#color_mobile").value = inputColor
        hoverColors()
    })
    document.getElementById("resetConfirmation").children[0].classList.remove("active")
    document.getElementById("resetConfirmation").classList.remove("active")
    resetStopwatch()
    startStopwatch()
}

function newG(diff){
    document.getElementById("selectLevel").children[0].classList.remove("active")
    document.getElementById("loader-overlay").classList.add("active")
    selectDiff(diff);
}

function gameplayToggle(){
    let container = document.getElementById("gameplay-container")
    let toggle = document.getElementById("pipe")

    if (container.classList.contains('active')){
        container.classList.add('inactive')
        container.classList.remove('active')
        toggle.innerText="Show"
    }
    else{
        container.classList.add('active')
        container.classList.remove('inactive')
        toggle.innerText="Hide"
        setTimeout(() => {
            window.scrollBy({
                top: 10000,
                behavior: "smooth",
            });
        }, 100);
    }
}

function openModal(){
    document.getElementById("selectLevel").children[0].classList.add("active")
    document.getElementById("selectLevel").classList.add("active")
}
function closeModal(){
    document.getElementById("selectLevel").children[0].classList.remove("active")
    document.getElementById("selectLevel").classList.remove("active")
}

function openColorChange(){
    document.getElementById("changeColor").children[0].classList.add("active")
    document.getElementById("changeColor").classList.add("active")
}
function closeColorChange(){
    document.getElementById("changeColor").children[0].classList.remove("active")
    document.getElementById("changeColor").classList.remove("active")
}

function openConfirmation(){
    document.getElementById("resetConfirmation").children[0].classList.add("active")
    document.getElementById("resetConfirmation").classList.add("active")
}
function closeConfirmation(){
    document.getElementById("resetConfirmation").children[0].classList.remove("active")
    document.getElementById("resetConfirmation").classList.remove("active")
}

function openInfoWindow(info, additional){
    document.getElementById("infoScreen").children[0].classList.add("active")
    document.getElementById("infoScreen").classList.add("active")
    if (additional == 1){
        if (document.documentElement.lang == "en"){
            document.getElementById("infoScreen").querySelector(".infoPopup").innerHTML = `
                <p class="infoText">${info}</p>
                <p class="infoText">You can delete any number you have entered by double clicking on it.</p>`
        }
        else{
            document.getElementById("infoScreen").querySelector(".infoPopup").innerHTML = `
                <p class="infoText">${info}</p>
                <p class="infoText">Може да изтриете цифра като натиснете 2 пъти върху нея.</p>`
        }
    }
    else if (additional == 0){
        document.getElementById("infoScreen").querySelector(".infoPopup").innerHTML = `<p class="infoText">${info}</p>`
    }
    else{
        if (document.documentElement.lang == "en"){
            document.getElementById("infoScreen").querySelector(".infoPopup").innerHTML = `
                <p class="infoText">${info}</p>
                <p class="infoText">Your time is: ${additional}</p>`
        }
        else{
            document.getElementById("infoScreen").querySelector(".infoPopup").innerHTML = `
                <p class="infoText">${info}</p>
                <p class="infoText">Времето ви за решаване е: ${additional}</p>`
        }
    }
}
function closeInfoWindow(){
    document.getElementById("infoScreen").children[0].classList.remove("active")
    document.getElementById("infoScreen").classList.remove("active")
}

document.addEventListener('keydown', function(e) {
    let keyCode = e.keyCode;
    if (keyCode === 27) {//keycode is an Integer, not a String
        closeModal()
        closeColorChange()
        closeConfirmation()
        closeInfoWindow()
    }
});

document.querySelectorAll(".overlay").forEach(function(overlay){
    overlay.addEventListener("click", (event) => {
        if (event.target.classList.contains("overlay")){
            closeModal()
            closeColorChange()
            closeConfirmation()
            closeInfoWindow()
        }
    })
})

window.addEventListener("load", () => {document.documentElement.lang = localStorage.getItem('langSet'), textChange()})

function changeLang (lang) {
    document.documentElement.lang = lang
    localStorage.setItem('langSet', lang);
    textChange()
}

function textChange(){
    document.documentElement.lang === "bg" 
            ? ( document.getElementsByClassName("language-selector")[0].children[1].selected = true, document.getElementsByClassName("language-selector")[0].children[0].selected = false )
            : ( document.getElementsByClassName("language-selector")[0].children[0].selected = true, document.getElementsByClassName("language-selector")[0].children[1].selected = false )

    if (document.documentElement.lang === "bg"){
        document.title = "Судоку Загадки"
        headerTitleBg == "" ? document.getElementById("title").textContent = "Судоку" : document.getElementById("title").textContent = headerTitleBg
        document.getElementById("gameSetup").textContent = "Настройки на играта:"
        document.getElementById("game").textContent = "Нова игра"
        document.getElementById("resetBoard").textContent = "Рестарт на игра"
        document.getElementById("inputColor").textContent = "Цвят на писане:"
        document.getElementById("customInputColor").textContent = "Друг цвят на писане:"
        document.getElementById("color-toggle").textContent = "Промени цвета на писане"
        document.getElementById("grayButton").textContent = "Сив"
        document.getElementById("yellowButton").textContent = "Жълт"
        document.getElementById("greenButton").textContent = "Зелен"
        document.getElementById("blueButton").textContent = "Син"
        document.getElementById("customColorPopup").textContent = "Друг цвят на писане:"
        document.getElementById("gameplay-toggle").innerHTML = `<span id="pipe">Покажи</span> инструкции за играта`
        document.getElementById("gameplayTitle").textContent = "Инструкции:"
        document.getElementById("gameplay").children[0].textContent = "Натиснете Нова игра за да изберете трудност и дали искате известия за грешки"
        document.getElementById("gameplay").children[1].textContent = "Натиснете Рестарт на игра за да рестартирате текущото судоку"
        document.getElementById("gameplay").children[2].textContent = "Натиснете свободна клетка за да въведете цифрата, която смятате, че трябва да е там"
        document.getElementById("gameplay").children[3].textContent = "Натиснете клетка, която вече сте попълнили за да редактирате въведената цифра (ако натиснете на друго място без да промените цифрата, ще се върне предишната)"
        document.getElementById("gameplay").children[4].textContent = "Натиснете 2 пъти върху попълнена клетка, за да изтриете въведената там цифра"
        document.getElementById("easy").textContent = "Лесно"
        document.getElementById("medium").textContent = "Средно"
        document.getElementById("hard").textContent = "Трудно"
        document.getElementById("random").textContent = "Случайно"
        document.getElementById("showMistakesButton").textContent = "Покажи грешките"
        document.getElementById("hideMistakesButton").textContent = "Скрий грешките"
        document.getElementById("show").textContent = "Покажи грешките"
        document.getElementById("hide").textContent = "Скрий грешките"
        document.getElementById("resetConfirm").textContent = "Сигурен ли сте, че искате да рестартирате играта?"
        document.getElementById("yes").textContent = "Да"
        document.getElementById("no").textContent = "Не"
    }
    else{
        document.title = "Sudoku Puzzles"
        headerTitleEn == "" ? document.getElementById("title").textContent = "Sudoku" : document.getElementById("title").textContent = headerTitleEn
        document.getElementById("gameSetup").textContent = "Game Setup:"
        document.getElementById("game").textContent = "New Game"
        document.getElementById("resetBoard").textContent = "Reset Board"
        document.getElementById("inputColor").textContent = "Input Color:"
        document.getElementById("customInputColor").textContent = "Custom Input Color:"
        document.getElementById("color-toggle").textContent = "Change Input Color"
        document.getElementById("grayButton").textContent = "Gray"
        document.getElementById("yellowButton").textContent = "Yellow"
        document.getElementById("greenButton").textContent = "Green"
        document.getElementById("blueButton").textContent = "Blue"
        document.getElementById("customColorPopup").textContent = "Custom Input Color:"
        document.getElementById("gameplay-toggle").innerHTML = `<span id="pipe">Show</span> Gameplay Instructions`
        document.getElementById("gameplayTitle").textContent = "Gameplay:"
        document.getElementById("gameplay").children[0].textContent = "Click New Game to select a difficulty level and whether you would like to be notified for any mistakes"
        document.getElementById("gameplay").children[1].textContent = "Click Reset Board to restart your current board"
        document.getElementById("gameplay").children[2].textContent = "Click on any free cell to enter the number you think should be there"
        document.getElementById("gameplay").children[3].textContent = "Click on any cell that you have already filled to edit the number in it (if you click away, your previously entered number would remain there)"
        document.getElementById("gameplay").children[4].textContent = "Double click on any cell that you have filled with a number to delete that number"
        document.getElementById("easy").textContent = "Easy"
        document.getElementById("medium").textContent = "Medium"
        document.getElementById("hard").textContent = "Hard"
        document.getElementById("random").textContent = "Random"
        document.getElementById("showMistakesButton").textContent = "Show Mistakes"
        document.getElementById("hideMistakesButton").textContent = "Hide Mistakes"
        document.getElementById("show").textContent = "Show Mistakes"
        document.getElementById("hide").textContent = "Hide Mistakes"
        document.getElementById("resetConfirm").textContent = "Are you sure you want to reset the board?"
        document.getElementById("yes").textContent = "Yes"
        document.getElementById("no").textContent = "No"
    }
}


// Stopwatch

var startTime; // to keep track of the start time
var stopwatchInterval; // to keep track of the interval
var elapsedPausedTime = 0; // to keep track of the elapsed time while stopped
var displayTime

function startStopwatch() {
if (!stopwatchInterval) {
    startTime = new Date().getTime() - elapsedPausedTime; // get the starting time by subtracting the elapsed paused time from the current time
    stopwatchInterval = setInterval(updateStopwatch, 1000); // update every second
}
}

function stopStopwatch() {
    clearInterval(stopwatchInterval); // stop the interval
    elapsedPausedTime = new Date().getTime() - startTime; // calculate elapsed paused time
    stopwatchInterval = null; // reset the interval variable
}

function resetStopwatch() {
    stopStopwatch(); // stop the interval
    elapsedPausedTime = 0; // reset the elapsed paused time variable
}

function updateStopwatch() {
    var currentTime = new Date().getTime(); // get current time in milliseconds
    var elapsedTime = currentTime - startTime; // calculate elapsed time in milliseconds
    var seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
    var minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
    var hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
    displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds); // format display time
}

function pad(number) {
    // add a leading zero if the number is less than 10
    return (number < 10 ? "0" : "") + number;
}