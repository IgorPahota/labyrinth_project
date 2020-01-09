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
