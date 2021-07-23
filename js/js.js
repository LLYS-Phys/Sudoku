let response = fetch("https://sugoku.herokuapp.com/board");
fetch("https://sugoku.herokuapp.com/board")
    .then(response => { alert("Successfully connected") })
    .catch(error => {alert("You could not reach the server. Please refresh")})


function show(select){
    if(select.value==0){
        document.getElementById("default").style.display = "block"
    }
    else{document.getElementById("default").style.display = "none"};
    if(select.value==1){
        document.getElementById("easy").style.display = "block"
    }
    else{document.getElementById("easy").style.display = "none"};
    if(select.value==2){
        document.getElementById("medium").style.display = "block"
    }
    else{document.getElementById("medium").style.display = "none"};
    if(select.value==3){
        document.getElementById("hard").style.display = "block"
    }
    else{document.getElementById("hard").style.display = "none"};
    if(select.value==4){
        document.getElementById("random").style.display = "block"
    }
    else{document.getElementById("random").style.display = "none"};
}
