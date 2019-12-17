const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir')

//iniciando o app
const app = express();

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useUnifiedTopology: true,
    useNewUrlParser: true
});

requireDir('./src/models');

const Product = mongoose.model('Product');

//primeira rota
app.get('/', (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build fansmsa',
        url: 'http://github.com'
    })
    return res.send('Hello teste');
});

app.listen(3001);