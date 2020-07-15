const Data = require('../model/Data.json');
const fs = require('fs');


class UseLibrary {
    create(req, res){

        const { title } = req.body 

        const existsBook = Data.books.find(book => {
            if(title == book.title) return res.status(400).json({error: 'Obra ja existe'})
        })

        if(!existsBook) {

            if(!req.body.title) return res.status(400).json({error: 'titulo é obrigatorio'})
            if(!req.body.editora) return res.status(400).json({error: 'editora é obrigatorio'})
            if(!req.body.foto) return res.status(400).json({error: 'foto é obrigatorio'})
            if(!req.body.autores) return res.status(400).json({error: 'autores é obrigatorio'})
            
            let id = 0
            const lastBook = Data.books[Data.books.length -1]

            if(lastBook) {
                id = lastBook.id + 1
            }

            Data.books.push({
                ...req.body,
                id
            });

            fs.writeFile('src/model/Data.json', JSON.stringify(Data, null, 2), (err) => {
                if(err) return res.status(500).json({err: 'Write file error'})
            })
            
            return res.status(200).json({books: Data.books})
        }

    }

    update(req, res) {
        const { id } = req.params

        let index = 0;

        const foundBook = Data.books.find((book, foundIndex) => {
            if(id == book.id) {
                index = foundIndex
                return true
            }
        })

        if(!foundBook) return res.status(404).json({error: 'Not found Book'});

        if(!req.body.title) return res.status(400).json({error: 'titulo é obrigatorio'})
        if(!req.body.editora) return res.status(400).json({error: 'editora é obrigatorio'})
        if(!req.body.foto) return res.status(400).json({error: 'foto é obrigatorio'})
        if(!req.body.autores) return res.status(400).json({error: 'autores é obrigatorio'})

        const book = {
            ...foundBook,
            ...req.body
        }

        Data.books[index] = book

        fs.writeFile('src/model/Data.json', JSON.stringify(Data, null, 2), (err) => {
            if(err) return res.status(500).json(err)

            return res.status(200).json({ book })
        } )
    }

    all(req, res) {
        const book = Data.books.map(book => {
            const newBook = {
                ...book
            }

            return newBook
        })
        
        return res.status(200).json({ book })
    }

    show(req, res){
        const { id } = req.params

        const foundBook = Data.books.find((book) => {
            return id == book.id
        })

        if(!foundBook) return res.status(404).json({error: 'Book not found'})

        return res.status(200).json({book: foundBook})
    }

    delete(req, res){
        const { id } = req.params

        const filterBook = Data.books.filter((book) => {
            return book.id != id
        })

        Data.books = filterBook

        fs.writeFile('src/model/Data.json', JSON.stringify(Data, null, 2), (err) => {
            return res.status(500).json(err)
        })

        return res.status(200).json(Data.books)
    }
}

module.exports = new UseLibrary();