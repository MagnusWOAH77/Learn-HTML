function click_me(){
    switch (parseInt(Math.random()*5)){
        case 0:
            window.alert("You are bad");
            break;
        case 1: 
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
            break;
        case 2:
            window.open("https://www.youtube.com/watch?v=FtutLA63Cp8", "_blank");
            break;
        case 3:
            window.open("homo.html", "_blank")
            break;
        case 4:
            window.open("rainbow.html", "_blank");
            break;
    }  
}

function closeSide() {
    var bar = document.getElementById("sideBar");
    bar.hidden = true;
}