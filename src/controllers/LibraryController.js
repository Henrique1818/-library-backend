const LibraryModel = require('../model/LibraryModel');
const { response } = require('express');

class LibraryController {
    async create(req, res){
        const library = new LibraryModel(req.body);
        await library
        .save()
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        });
    }

    async update(req, res) {
        await LibraryModel.findByIdAndUpdate({'_id': req.params.id}, req.body, { new: true })
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).jsom(error);
        })
    }

    async all(req, res) {
        await LibraryModel.find({})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async show(req, res){ 
        await LibraryModel.findById(req.params.id)
        .then(response => {
            if(response)
            return res.status(200).json(response);
            else
            return res.status(404).json({error: 'obra não encontrada'})
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async delete(req, res){
        await LibraryModel.deleteOne({'_id': req.params.id})
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }

    async filterCategory(req, res){
        await LibraryModel.find({"category": {"$in": req.query.category}})
        .sort('category')
        .then(response => {
            return res.status(200).json(response);
        })
        .catch(error => {
            return res.status(500).json(error);
        })
    }
}

module.exports = new LibraryController();