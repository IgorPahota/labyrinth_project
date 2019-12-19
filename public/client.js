document.querySelector('.field').addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.id);
    const response = await fetch('/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({value: event.target.id})

    });


    console.log(event.target)

    console.log(event.target.innerText)



});


let clickCount = 0;

document.querySelector('.keyboard').addEventListener('click', function (event) {
    function singleClick() {
        console.log(event.target.parentElement.firstChild.innerText);
    }

    function doubleClick() {
        console.log(event.target.parentElement.lastChild.innerText);
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

})


// addEventListener('dblclick', async (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     console.log(event.target.parentElement.lastChild.innerText)
// const response = await fetch('/field', {
//     method: "POST",
//     headers: {'Content-type': 'application/json'},
//     body: JSON.stringify({})
// })
// })

// document.querySelector('.keyboard').removeEventListener('dblclick', () => {})
//
// document.querySelector('.keyboard').addEventListener('click', async (event) => {
//     event.preventDefault();
//     event.stopPropagation();
//     console.log(event.target.parentElement.firstChild.innerText)
// const response = await fetch('/field', {
//     method: "POST",
//     headers: {'Content-type': 'application/json'},
//     body: JSON.stringify({})
// })
// })









let color = 'lightgrey';

function changeColor(newColor) {
    color = newColor;
    console.log(color)
}


