const express = require('express');
const router = express.Router();
const multer = require('multer');
const textController = require('../controller/textController');

let timo;
const mfStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        timo = Date.now()
        req.timoeto = timo

        cb(null, timo+'-'+file.originalname)
    }
  })

const  allowedFiles = function(req, file, cb) {
    // Accept txt only
    if (!file.originalname.match(/\.(txt)$/)) {
        req.fileValidationError = 'Only txt file type are allowed!';
        return cb(new Error('Only txt file type  are allowed!'), false);
    }
    cb(null, true);
}

const upload = multer({
    storage: mfStorage,
    fileFilter: allowedFiles 
})
//router.route('/').get(textController.getAllFileAvailableForManipulation)
router.route('/data').get(textController.getSingleFileAvailableForManipulation)
router.route('/fileupload').post(upload.single('files'), textController.uploadFileForAnalysis)

module.exports = router;