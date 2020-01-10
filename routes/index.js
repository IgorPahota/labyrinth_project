const express = require("express");
const mongoose = require('mongoose');
const Lab = require('../models/labyrinth');
const router = express.Router();



// Seeder
router.get('/', (req, res) => {
    let testField = new Lab ({
        name: 'main'
    });
    testField.save();
    res.send('seed done')
});

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



module.exports = router;
