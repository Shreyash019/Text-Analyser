const express = require('express');
const router = express.Router();
const multer = require('multer');
const uploader = require('../utils/utilMulter')
const textController = require('../controller/textController');


const upload = multer({
    storage: uploader.files.mfStorage,
    fileFilter: uploader.files.allowedFiles 
})

router.route('/').get(textController.getTextManipulationHome)
router.route('/fileupload').post(upload.single('files'), textController.uploadFileForAnalysis)


module.exports = router;