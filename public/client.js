document.querySelector('.field').addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.id);
    const response = await fetch ('/',{
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({value: event.target.id})

    })

});
