const express = require("express");
const mongoose = require('mongoose');
const Lab = require('../models/labyrinth');
const router = express.Router();
const fs = require('fs')



// Seeder
router.get('/seed', (req, res) => {
    let testField = new Lab ({
        name: 'main'
    });
    testField.save();
    res.send('seed done')
});


router.get('/', async (req, res) => {
    res.redirect('/field')
})

router.post('/', async (req, res) => {
    let newField = new Lab ({
        experimentName: req.body.savedField.experimentName,
        experimentNumber: req.body.savedField.experimentNumber,
        mouseNumber: req.body.savedField.mouseNumber,
        dateOfCreation: req.body.savedField.dateOfCreation,
        field: req.body.savedField.field
    })
   await newField.save()
    let currentField = await Lab.findOne({dateOfCreation: req.body.savedField.dateOfCreation})
    res.json(currentField._id)
})

router.post('/experiment', async (req, res) => {
    let currentExperiment = await Lab.findOne({_id:req.body.protocol[0]})
    // let resultArray = currentExperiment._update.result;
    currentExperiment.result = req.body.protocol[1]
    await currentExperiment.save()
    console.log(currentExperiment)
    // resultArray.map(element=>{
    //     let firstElement = element[0].toString()
    //     let secondElement = element[1].toString()
    //     // let oneElement = element.toString()
    //     fs.appendFileSync('./public/new.txt', `\n${firstElement};${secondElement}`)
    // })


        // fs.writeFileSync('./public/new.txt', resultArray);

    res.end()
})

router.post('/experiment', async (req, res) => {
    let currentExperiment = await Lab.findOne({_id:req.body.protocol[0]})
    // let resultArray = currentExperiment._update.result;
    currentExperiment.result = req.body.protocol[1]
    await currentExperiment.save()
    // console.log(currentExperiment)
    // resultArray.map(element=>{
    //     let firstElement = element[0].toString()
    //     let secondElement = element[1].toString()
    //     // let oneElement = element.toString()
    //     fs.appendFileSync('./public/new.txt', `\n${firstElement};${secondElement}`)
    // })


        // fs.writeFileSync('./public/new.txt', resultArray);

    res.end()
})

router.get('/experiment/:id', async (req, res) =>{
    let id = req.params.id
    let test = await Lab.findOne({_id:id})
    let a = test.field[0]
        b = test.field[1],
        c = test.field[2],
        d = test.field[3],
        e = test.field[4],
        f = test.field[5],
        g = test.field[6],
        h = test.field[7],
        i = test.field[8],
        j = test.field[9],
        k = test.field[10]
    await res.render('current', {a, b, c, d, e, f, g, h, i, j, k, test})
})

router.get('/experiment/:id/result', async (req, res) => {
    // console.log(req.params.id)

    let currentExperiment = await Lab.findOne({_id:req.params.id});
    // let resultArray = currentExperiment._update;
    console.log(currentExperiment)



    res.end()

})

router.get('/field', async (req, res) => {
    let test = await Lab.find({});
    let a = test[0].field[0],
        b = test[0].field[1],
        c = test[0].field[2],
        d = test[0].field[3],
        e = test[0].field[4],
        f = test[0].field[5],
        g = test[0].field[6],
        h = test[0].field[7],
        i = test[0].field[8],
        j = test[0].field[9],
        k = test[0].field[10]
     await res.render('field', {a, b, c, d, e, f, g, h, i, j, k})
});

router.get('/protocol', async (req, res) => {
    res.render('protocol')

});

router.get('/experiments', async (req,res) => {
    let allFields = await Lab.find({});
    res.render('experiments', {allFields})
})


module.exports = router;
