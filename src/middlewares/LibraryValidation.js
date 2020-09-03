const LibraryModel = require('../model/LibraryModel');
const { exists } = require('../model/LibraryModel');

const LibraryValidation = async (req, res, next) => {
    const { title, description, avatar_url, publishing_company, authors, category, _id } = req.body

    if(!title) return res.status(400).json({error: 'Title é obrigatório'});
    else if(!description) return res.status(400).json({error: 'description é obrigatório'});
    else if(!avatar_url) return res.status(400).json({error: 'avatar_url é obrigatório'});
    else if(!publishing_company) return res.status(400).json({error: 'publishing_company é obrigatório'});
    else if(!authors) return res.status(400).json({error: 'authors é obrigatório'});
    else if(!category) return res.status(400).json({error: 'category é obrigatório'});

    else {
        const exists = await LibraryModel.findOne({'_id': {'$in': _id}})

        if(exists){
            return res.status(400).json({ error: 'já existe uma obra com esse nome' });
        }
        next()
    }
}

module.exports = LibraryValidation;