document.querySelector('.field').addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();
    console.log(event.target.id)
});
