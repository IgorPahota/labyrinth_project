let clickCount = 0;

document.querySelector('.keyboard').addEventListener('click', function (event) {
    function singleClick() {
        document.querySelector('.actions').value += event.target.parentElement.firstChild.innerText + '-';
        document.querySelector('.actions').value += count + ','
    }

    function doubleClick() {
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

let color = 'grey';

function changeColor(newColor) {
    color = newColor;
};

function colorClick(element, newColor) {
    newColor = color;
    element.setAttribute("dataColor", newColor);
    element.style.backgroundColor = newColor;
    if (newColor === 'green') {
        element.setAttribute("dataMouse", true)
    }
};

// document.addEventListener('keydown', (e) => {
//     let mouse = document.querySelector('[dataMouse=true]');
//     let prevColor = mouse.attributes.dataColor.value;
//     mouse.style.backgroundColor = 'black';
//     let moveColumn;
//     let moveRow;
//     let nextCell;
//     switch (e.key) {
//         case 'ArrowDown':
//             mouse.style.backgroundColor = prevColor;
//             document.querySelector('.actions').value += mouse.innerHTML + '-';
//             document.querySelector('.actions').value += count + ',';
//             moveColumn = mouse.attributes.dataColumn.value;
//             moveRow = Number(mouse.attributes.dataRow.value) + 1;
//             mouse.setAttribute('dataMouse', 'false');
//
//             console.log(moveRow);
//             console.log(moveColumn);
//             nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
//             nextCell.setAttribute('dataMouse', true);
//             nextCell.style.backgroundColor = 'black';
//             break;
//         case 'ArrowUp':
//             mouse.style.backgroundColor = prevColor;
//             document.querySelector('.actions').value += mouse.innerHTML + '-';
//             document.querySelector('.actions').value += count + ',';
//             moveColumn = mouse.attributes.dataColumn.value;
//             moveRow = mouse.attributes.dataRow.value - 1;
//             mouse.setAttribute('dataMouse', 'false');
//
//             console.log(moveRow);
//             console.log(moveColumn);
//             nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
//             nextCell.setAttribute('dataMouse', true);
//             nextCell.style.backgroundColor = 'black';
//             break;
//         case 'ArrowLeft':
//             console.log(e.key)
//             mouse.style.backgroundColor = prevColor;
//             document.querySelector('.actions').value += mouse.innerHTML + '-';
//             document.querySelector('.actions').value += count + ',';
//             moveColumn = mouse.attributes.dataColumn.value - 1;
//             moveRow = mouse.attributes.dataRow.value;
//             mouse.setAttribute('dataMouse', 'false');
//
//             console.log(moveRow);
//             console.log(moveColumn);
//             nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
//             nextCell.setAttribute('dataMouse', true);
//             nextCell.style.backgroundColor = 'black';
//             break;
//         case 'ArrowRight':
//             mouse.style.backgroundColor = prevColor;
//             document.querySelector('.actions').value += mouse.innerHTML + '-';
//             document.querySelector('.actions').value += count + ',';
//             moveColumn = Number(mouse.attributes.dataColumn.value) + 1;
//             moveRow = mouse.attributes.dataRow.value;
//             mouse.setAttribute('dataMouse', 'false');
//
//             console.log(moveRow);
//             console.log(moveColumn);
//             nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
//             nextCell.setAttribute('dataMouse', true);
//             nextCell.style.backgroundColor = 'black';
//             break;
//     }
// });

