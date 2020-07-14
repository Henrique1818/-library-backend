const Data = require('../model/Data.json');
const fs = require('fs');


class UseLibrary {
    create(req, res){
        let { title, editora, foto, autores } = req.body

        if(!req.body.title) return res.status(400).json({error: 'titulo é obrigatorio'})
        if(!req.body.editora) return res.status(400).json({error: 'editora é obrigatorio'})
        if(!req.body.foto) return res.status(400).json({error: 'foto é obrigatorio'})
        if(!req.body.autores) return res.status(400).json({error: 'autores é obrigatorio'})

        
        const id = Number(Data.books.length + 1);

        Data.books.push({
            id,
            title,
            editora,
            foto,
            autores
        });

        fs.writeFile("src/model/Data.json", JSON.stringify(Data, null, 2), (err) => {
            if(err) return res.status(500).json({err: 'Write file error'})
        })

        return res.status(200).json({books: Data.books})
    }
    alter(req, res){
    }
}

module.exports = new UseLibrary();