document.querySelector('.field').addEventListener('click', (event)=>{
   event.preventDefault();
   event.stopPropagation();
   // console.log(event.target);
   // console.log(event.firstChild);
    function removed () {
        console.log('removed')
    }
    let clickedDiv = event.target;
    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        event.stopPropagation();
        let pressedButton = event.key;
        // console.log(clickedDiv.innerHTML);
        clickedDiv.innerHTML = event.key;
    });
    document.removeEventListener('keydown', removed)

});

