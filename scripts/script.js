function clickMe(){
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

function openSide() {
    document.getElementById("sidebar").hidden = false;
    document.getElementById("openSide").hidden = true;
}

function closeSide() {
    document.getElementById("sidebar").className = "sideClose";

    setTimeout(() => {
        document.getElementById("sidebar").hidden = true;
        document.getElementById("openSide").hidden = false;
        document.getElementById("sidebar").className = "sideBar";
    }, 490);
}

function goto(url) {
    closeSide();
    window.open(url, "_blank");
}