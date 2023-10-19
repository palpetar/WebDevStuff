var current = null;
var mouseOverButtons = false;

function moveToMouse(e) {
    if (current && !mouseOverButtons) {
        current.style.left = e.pageX - 75 + "px";
        current.style.top = e.pageY - 75 + "px";
        updateCurrentPosition();
    }
}

function addBorderAndSelect(e) {
    if (!current) {
        r.style.borderWidth = "0px";
        g.style.borderWidth = "0px";
        b.style.borderWidth = "0px";
    }

    var elem;
    switch (e.keyCode) {
        case 82:
            elem = document.getElementById("r");
            break;
        case 71:
            elem = document.getElementById("g");
            break;
        case 66:
            elem = document.getElementById("b");
    }
    if (elem) {
        current = elem;
        elem.style.borderWidth = "15px";
        elem.style.borderStyle = "solid";
        elem.style.borderColor = "white";
        updateCurrentPosition();
    }
}

function moveOnClick(e) {
    if (current && !mouseOverButtons) {
        const moveAmount = parseInt(document.getElementById("moveAmount").value) || 50;
        let topPosition = parseInt(current.style.top) || 0;
        let leftPosition = parseInt(current.style.left) || 0;
        switch (e.keyCode) {
            case 38:
                topPosition -= moveAmount;
                break;
            case 40:
                topPosition += moveAmount;
                break;
            case 37:
                leftPosition -= moveAmount;
                break;
            case 39:
                leftPosition += moveAmount;
                break;
        }

        current.style.top = `${topPosition}px`;
        current.style.left = `${leftPosition}px`;
        updateCurrentPosition();
    }
}

function moveDirection(direction) {
    if (current) {
        const moveAmount = parseInt(document.getElementById("moveAmount").value) || 50;
        let topPosition = parseInt(current.style.top) || 0;
        let leftPosition = parseInt(current.style.left) || 0;
        switch (direction) {
            case 'top':
                topPosition -= moveAmount;
                break;
            case 'top-right':
                topPosition -= moveAmount;
                leftPosition += moveAmount;
                break;
            case 'right':
                leftPosition += moveAmount;
                break;
            case 'bottom-right':
                topPosition += moveAmount;
                leftPosition += moveAmount;
                break;
            case 'bottom':
                topPosition += moveAmount;
                break;
            case 'bottom-left':
                topPosition += moveAmount;
                leftPosition -= moveAmount;
                break;
            case 'left':
                leftPosition -= moveAmount;
                break;
            case 'top-left':
                topPosition -= moveAmount;
                leftPosition -= moveAmount;
                break;
        }

        current.style.top = `${topPosition}px`;
        current.style.left = `${leftPosition}px`;
        updateCurrentPosition();
    }
}

function updateCurrentPosition() {
    const topPosition = parseInt(current.style.top) || 0;
    const leftPosition = parseInt(current.style.left) || 0;
    document.getElementById("currentPosition").textContent = `Current Position: (${leftPosition}, ${topPosition})`;
}

document.querySelectorAll('.direction-button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        mouseOverButtons = true;
    });

    button.addEventListener('mouseleave', () => {
        mouseOverButtons = false;
    });

    button.addEventListener('mousedown', (e) => {
        moveDirection(e.target.id);
    });
});

document.addEventListener('click', moveToMouse);
document.addEventListener('keydown', addBorderAndSelect);
document.addEventListener('keydown', moveOnClick);
