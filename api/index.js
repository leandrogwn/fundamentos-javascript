const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser({extended: true}))

app.get('/', (req, res) => {
    res.status(200).send('Ola mundo');
})

app.post('/', (req, res)=>{
    res.status(201).send(req.body);
})

app.put('/:id', (req, res)=>{
    res.status(202).send({
        codigo: req.params.id,
        corpo:req.body
    })
})

app.delete('/:id',(req, res)=>{
    res.status(204).send(req.params.id);
})

app.listen(3000, () => {
    console.log('Api iniciada.')
})