let clickCount = 0;

document.querySelector('.keyboard').addEventListener('click', function (event) {
    function singleClick() {
        console.log(event.target.parentElement.firstChild)
        document.querySelector('.actions').value += event.target.parentElement.firstChild.innerText + '-';
        document.querySelector('.actions').value += count + ','
    }

    function doubleClick() {
        console.log(event.target.parentElement.lastChild)
        document.querySelector('.actions').value += event.target.parentElement.lastChild.innerText + '-';
        document.querySelector('.actions').value += count + ','
    }

    clickCount++;
    if (clickCount === 1) {
        singleClickTimer = setTimeout(function () {
            clickCount = 0;
            singleClick();
        }, 400);
    } else if (clickCount === 2) {
        clearTimeout(singleClickTimer);
        clickCount = 0;


        doubleClick();
    }
});

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

function currentColor(element, newColor) {
    newColor = color;
    element = document.getElementById('currentColor')
    element.style.backgroundColor = newColor;
    switch (newColor) {
        case 'lightgrey':
            element.innerHTML = "ПОЛЕ";
            break;
        case 'darkblue':
            element.innerHTML = "СТЕНА";
            break;
        case 'violet':
            element.innerHTML = "ЛОЖНАЯ КОРМУШКА";
            break;
        case 'orange':
            element.innerHTML = "КОРМУШКА";
            break;
        case 'green':
            element.innerHTML = "ВХОД";
            break;
        case 'lightblue':
            element.innerHTML = "ВЫХОД";
            break;
    }
}

document.addEventListener('keydown', (e) => {
    let mouse = document.querySelector('[dataMouse=true]');
    let prevColor = mouse.attributes.dataColor.value;
    mouse.style.backgroundColor = 'black';
    let moveColumn;
    let moveRow;
    let nextCell;
    switch (e.key) {
        case 'ArrowDown':
            if (mouse.attributes.dataRow.value < 11 && (document.querySelector(`div[dataRow="${Number(mouse.attributes.dataRow.value) + 1}"][dataColumn="${mouse.attributes.dataColumn.value}"]`)).style.backgroundColor !== 'darkblue') {
                mouse.style.backgroundColor = prevColor;
                document.querySelector('.actions').value += mouse.innerHTML + '-';
                document.querySelector('.actions').value += count + ',';
                moveColumn = mouse.attributes.dataColumn.value;
                moveRow = Number(mouse.attributes.dataRow.value) + 1;
                mouse.setAttribute('dataMouse', 'false');

                nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
                nextCell.setAttribute('dataMouse', true);
                nextCell.style.backgroundColor = 'black';
                break;
            } else {
                break
            }
        case 'ArrowUp':
            if (mouse.attributes.dataRow.value > 1 && (document.querySelector(`div[dataRow="${mouse.attributes.dataRow.value - 1}"][dataColumn="${mouse.attributes.dataColumn.value}"]`)).style.backgroundColor !== 'darkblue') {
                mouse.style.backgroundColor = prevColor;
                document.querySelector('.actions').value += mouse.innerHTML + '-';
                document.querySelector('.actions').value += count + ',';
                moveColumn = mouse.attributes.dataColumn.value;
                moveRow = mouse.attributes.dataRow.value - 1;
                mouse.setAttribute('dataMouse', 'false');

                nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
                nextCell.setAttribute('dataMouse', true);
                nextCell.style.backgroundColor = 'black';
                break;
            } else {
                break
            }
        case 'ArrowLeft':
            if (mouse.attributes.dataColumn.value > 1 && (document.querySelector(`div[dataRow="${mouse.attributes.dataRow.value}"][dataColumn="${mouse.attributes.dataColumn.value - 1}"]`)).style.backgroundColor !== 'darkblue') {
                console.log(e.key)
                mouse.style.backgroundColor = prevColor;
                document.querySelector('.actions').value += mouse.innerHTML + '-';
                document.querySelector('.actions').value += count + ',';
                moveColumn = mouse.attributes.dataColumn.value - 1;
                moveRow = mouse.attributes.dataRow.value;
                mouse.setAttribute('dataMouse', 'false');

                nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
                nextCell.setAttribute('dataMouse', true);
                nextCell.style.backgroundColor = 'black';
                break;
            } else {
                break
            }
        case 'ArrowRight':
            if (mouse.attributes.dataColumn.value < 11 && (document.querySelector(`div[dataRow="${mouse.attributes.dataRow.value}"][dataColumn="${Number(mouse.attributes.dataColumn.value) + 1}"]`)).style.backgroundColor !== 'darkblue') {
                mouse.style.backgroundColor = prevColor;
                document.querySelector('.actions').value += mouse.innerHTML + '-';
                document.querySelector('.actions').value += count + ',';
                moveColumn = Number(mouse.attributes.dataColumn.value) + 1;
                moveRow = mouse.attributes.dataRow.value;
                mouse.setAttribute('dataMouse', 'false');

                nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
                nextCell.setAttribute('dataMouse', true);
                nextCell.style.backgroundColor = 'black';
                break;
            } else {
                break
            }
    }
});

