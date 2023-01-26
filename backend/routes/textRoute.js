const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const uploader = require('../utils/utilMulter')
const textController = require('../controller/textController');

// Calling the 'multer' function
const upload = multer({
    storage: uploader.files.mfStorage,
    // fileFilter : multerFilter,
    fileFilter: uploader.files.allowedFiles 
})



router.route('/').get(textController.getTextManipulationHome)
router.route('/fileupload').post(upload.single('files'), textController.uploadFileForAnalysis)


module.exports = router;