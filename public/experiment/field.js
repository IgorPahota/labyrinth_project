
let color = 'lightgrey';
let positionChecker = false;

function positionStart() {
    if (!document.querySelector('[dataMouse=true]')) {
        positionChecker = true;
        console.log('positionChecker = true')
    }
}

document.querySelector(".field").addEventListener('click', function (event) {
    if (positionChecker) {
        let element = event.target;
        element.setAttribute("dataMouse", true)
        element.style.backgroundColor = 'black';
        positionChecker = false;
    }
})


function changeColor(element, newColor) {
    color = newColor;
    let buttons = document.getElementsByClassName('constBtn');
    for (i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = 'lightgrey';
    }
    element.style.backgroundColor = newColor;

};

function colorClick(element, newColor) {
    newColor = color;
    element.setAttribute("dataColor", newColor);
    element.style.backgroundColor = newColor;
};

function deleteAction() {

    let actionInput = document.getElementsByClassName('actions');
    // console.log(actionInput[0].value)
    actionInput[0].value = actionInput[0].value.slice(0,-1);
}

let protocol = [[],[]];

async function protocolSend () {
    let idArr = window.location.pathname.split('/')
    let id = idArr[2];
    protocol[0].push(id)
    const response = await fetch ('/experiment', {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify({protocol})
    });

}

function redirect() {
    let idArr = window.location.pathname.split('/')
    let id = idArr[2];
    console.log(id);
    location.assign(`/experiment/${id}/result`)
}


