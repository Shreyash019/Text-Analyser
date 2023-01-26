const multer = require('multer');
module.exports.files={
    storage:function(){
        const mfStorage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, 'filesupload')
        },
        filename: function (req, file, cb) {
            console.log('storagePart'+file.originalname)
            const ext = file.mimetype.split('/')[1]
            cb(null, `${Date.now()}-${file.originalname}.${ext}`)
        }
      })
      
      return storage;
    },
    allowedFiles:function(req, file, cb) {
        // Accept images only
        if (!file.originalname.match(/\.(pdf|docx|txt)$/)) {
            req.fileValidationError = 'Only pdf|docx|txt file type are allowed!';
            return cb(new Error('Only pdf|docx|txt file type  are allowed!'), false);
        }
        cb(null, true);
    }
}