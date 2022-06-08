'use strict';

const { Clothes } = require('../models/index');

const app = require('express');
const clothesRouter = app.Router();

// RESTful Route Delectation 
clothesRouter.get('/clothe', getClothes);
clothesRouter.get('/clothe/:id', getOneClothe);
clothesRouter.post('/clothe', createClothe);
clothesRouter.put('/clothe/:id', updateClothe);
clothesRouter.delete('/clothe/:id', deleteClothe);

async function getClothes(req, res){
    let allClothes = await Clothes.read();
    res.status(200).json(allClothes);
}

async function getOneClothe(req, res){
    let id = req.params.id;
    let record = await Clothes.read(id);
    res.status(200).json(record); 
}

async function createClothe(req, res){
    let obj = req.body;
    let creatRecord = await Clothes.create(obj);
    res.status(201).json(creatRecord);
}

async function updateClothe(req, res){
    let id = req.params.id;
    let obj = req.body;
    let updateRecord = await Clothes.update(id, obj);
    res.status(201).json(updateRecord);
}

async function deleteClothe(req, res){
    let id = req.params.id;
    let deleteRecord = await Clothes.delete(id);
    res.status(204).send(deleteRecord);
}

module.exports = clothesRouter;

