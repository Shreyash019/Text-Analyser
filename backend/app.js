const express = require('express');
const app = express();
const textRouter = require('./routes/textRoute');
const multer = require('multer');
const path = require('path');
const cors = require('cors')
const bodyParser = require('body-parser');
// const File = require('./model/textModel')

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('./uploads', express.static(path.join(__dirname, 'uploads')))

app.use('/api/v1/text', textRouter)

module.exports = app
