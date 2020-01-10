document.querySelector('.field').addEventListener('click', (event) => {
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
        }
    }
    document.addEventListener('keydown', keyHandler);
});

