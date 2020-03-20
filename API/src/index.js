const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require('mongoose');
const routes = require('./app/controllers/cardsController');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false }));
app.use(cors());
app.use(routes);


mongoose.connect('mongodb+srv://dionart:camisetas123@cluster0-veaas.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true, 
    useFindAndModify: false,
});


app.listen(3333);