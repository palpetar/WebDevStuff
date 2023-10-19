var current = null;

function moveToMouse(e){ //alert("Hello from moveToClick")
    //alert(e.pageX + " / " +  e.pageY);
    /* var elem = document.getElementById("r");
    elem.style.left = e.pageX - 75 + "px";
    elem.style.top = e.pageY -75 + "px"; */
    current.style.left = e.pageX - 75 + "px";
    current.style.top = e.pageY -75 + "px";
}

function addBorderAndSelect(e){
    //alert(e.keyCode);
    
    r.style.borderWidth = "0px";
    g.style.borderWidth = "0px";
    b.style.borderWidth = "0px";
    var elem;
    switch(e.keyCode){
        case 82:
            elem = document.getElementById("r");
            break;
        case 71:
            elem = document.getElementById("g");
            break;
        case 66:
            elem = document.getElementById("b");
    }
    current = elem;
    elem.style.borderWidth = "15px";
    elem.style.borderStyle = "solid";
    elem.style.borderColor = "white";
}

onclick = moveToMouse;
//document.addEventListener("click", moveToMouse);
onkeydown = addBorderAndSelect;
//document.addEventListener("keydown", moveLeft);