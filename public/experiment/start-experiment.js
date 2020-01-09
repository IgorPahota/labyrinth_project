let savedField = {
    name: 'test',
    dateOfCreation: new Date(),
    field: [[],[],[],[],[],[],[],[],[],[],[]]
};

 async function startExperiment() {
     for (let i = 0; i < 11; i++) {
         // let dataRow = document.getElementById('111').children[i]
         // console.log(dataRow);
         // console.log(savedField.field[i])
         for (let j = 0; j <= 10; j++) {
             let color = document.getElementById(`111`).children[i].children[j].getAttribute('dataColor');
             // console.log(color);
             let letter = document.getElementById(`111`).children[i].children[j].innerHTML
             let mouse = document.getElementById(`111`).children[i].children[j].getAttribute('dataMouse');
             let column = document.getElementById(`111`).children[i].children[j].getAttribute('dataColumn');
             let row = document.getElementById(`111`).children[i].children[j].getAttribute('dataRow');
             // console.log(savedField.field[i])
             savedField.field[i].push(

                 {
                     color,
                     letter,
                     mouse,
                     column,
                     row
                 }

             )
         }

     }

         const response = await fetch (`/`,{
             method: 'POST',
             headers: {'content-type': 'application/json'},
             body: JSON.stringify({ savedField })

         });
     const data = await response.json();
     console.log(data)
     // window.location.href=`/experiment/${data}`
     location.assign(`/experiment/${data}`)
         // console.log(savedField);


 }

