let adding = false;

const addLetters = (event) => {
    event.stopPropagation();
    let clickedDiv = event.target;
    const keyHandler = (event) => {
        event.preventDefault();
        if (event.keyCode >= 48 && event.keyCode <= 90) {
            clickedDiv.style.fontWeight = 'bold';
            clickedDiv.style.fontSize = '20px';
            clickedDiv.setAttribute('letter', event.key);
            clickedDiv.innerHTML = event.key;
            document.removeEventListener('keydown', keyHandler);
        } else if (event.keyCode === 8) {
            clickedDiv.style.fontWeight = 'normal';
            clickedDiv.style.fontSize = '16px';
            clickedDiv.innerHTML = clickedDiv.attributes.id.value
            document.removeEventListener('keydown', keyHandler);
        }
    }
    document.addEventListener('keydown', keyHandler);
}

function addLetter() {
    if (adding === false) {
        let button = document.getElementById('mazeBuildLetterAdd');
        button.innerHTML = "Построить лабиринт";
        document.querySelector('.field').addEventListener('click', addLetters);
        adding = true
    } else {
        let button = document.getElementById('mazeBuildLetterAdd');
        button.innerHTML = "Добавить контрольную точку";
        document.querySelector('.field').removeEventListener('click', addLetters);
        adding = false
    }
}


