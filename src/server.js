const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

app.use(morgan('dev'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({ extended: true }));


app.listen(port, () => { console.log(`Servidor establecido en el puerto ${port}`) });