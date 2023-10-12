function moveToMouse(e){ //alert("Hello from moveToClick")
    //alert(e.pageX + " / " +  e.pageY);
    var elem = document.getElementById("r");
    elem.style.left = e.pageX - 75 + "px";
    elem.style.top = e.pageY -75 + "px";
}

onclick = moveToMouse;
//document.addEventListener("click", moveToMouse);