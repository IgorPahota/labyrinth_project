let clickCount = 0;

document.querySelector('.keyboard').addEventListener('click', function (event) {
    function singleClick() {
        document.querySelector('.actions').value += event.target.parentElement.firstChild.innerText;
    }

    function doubleClick() {
        document.querySelector('.actions').value += event.target.parentElement.lastChild.innerText;
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
