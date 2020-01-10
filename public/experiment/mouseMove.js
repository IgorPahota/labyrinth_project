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
                event.preventDefault();
                mouse.style.backgroundColor = prevColor;
                moveColumn = mouse.attributes.dataColumn.value;
                moveRow = Number(mouse.attributes.dataRow.value) + 1;
                mouse.setAttribute('dataMouse', 'false');

                nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
                nextCell.setAttribute('dataMouse', true);
                nextCell.style.backgroundColor = 'black';
                if (mouse.attributes.letter) {
                    document.querySelector('.actions').value += mouse.attributes.letter.value;
                    let newAction = mouse.attributes.letter.value;
                    protocol.push([count, newAction])
                }
                console.log(protocol)
                break;
            } else {
                break
            }
        case 'ArrowUp':
            if (mouse.attributes.dataRow.value > 1 && (document.querySelector(`div[dataRow="${mouse.attributes.dataRow.value - 1}"][dataColumn="${mouse.attributes.dataColumn.value}"]`)).style.backgroundColor !== 'darkblue') {
                event.preventDefault();
                mouse.style.backgroundColor = prevColor;
                moveColumn = mouse.attributes.dataColumn.value;
                moveRow = mouse.attributes.dataRow.value - 1;
                mouse.setAttribute('dataMouse', 'false');

                nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
                nextCell.setAttribute('dataMouse', true);
                nextCell.style.backgroundColor = 'black';
                if (mouse.attributes.letter) {
                    document.querySelector('.actions').value += mouse.attributes.letter.value;
                    let newAction = mouse.attributes.letter.value;
                    protocol.push([count, newAction])
                }
                console.log(protocol)
                break;
            } else {
                break
            }
        case 'ArrowLeft':
            if (mouse.attributes.dataColumn.value > 1 && (document.querySelector(`div[dataRow="${mouse.attributes.dataRow.value}"][dataColumn="${mouse.attributes.dataColumn.value - 1}"]`)).style.backgroundColor !== 'darkblue') {
                mouse.style.backgroundColor = prevColor;
                moveColumn = mouse.attributes.dataColumn.value - 1;
                moveRow = mouse.attributes.dataRow.value;
                mouse.setAttribute('dataMouse', 'false');

                nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
                nextCell.setAttribute('dataMouse', true);
                nextCell.style.backgroundColor = 'black';
                if (mouse.attributes.letter) {
                    document.querySelector('.actions').value += mouse.attributes.letter.value;
                    let newAction = mouse.attributes.letter.value;
                    protocol.push([count, newAction])
                }
                console.log(protocol)
                break;
            } else {
                break
            }
        case 'ArrowRight':
            if (mouse.attributes.dataColumn.value < 11 && (document.querySelector(`div[dataRow="${mouse.attributes.dataRow.value}"][dataColumn="${Number(mouse.attributes.dataColumn.value) + 1}"]`)).style.backgroundColor !== 'darkblue') {
                mouse.style.backgroundColor = prevColor;
                moveColumn = Number(mouse.attributes.dataColumn.value) + 1;
                moveRow = mouse.attributes.dataRow.value;
                mouse.setAttribute('dataMouse', 'false');

                nextCell = document.querySelector(`div[dataRow="${moveRow}"][dataColumn="${moveColumn}"]`);
                nextCell.setAttribute('dataMouse', true);
                nextCell.style.backgroundColor = 'black';
                if (mouse.attributes.letter) {
                    document.querySelector('.actions').value += mouse.attributes.letter.value;
                    let newAction = mouse.attributes.letter.value;
                    protocol.push([count, newAction])
                }
                console.log(protocol)
                break;
            } else {
                break
            }
    }
});

