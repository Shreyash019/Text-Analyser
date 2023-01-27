const multer = require('multer');
module.exports.files={
    storage:function(){
        const mfStorage = multer.diskStorage({
        destination: function (req, file, cb) {
          cb(null, '/fileupload')
        },
        filename: function (req, file, cb) {
            console.log(file.originalname)
            const ext = file.originalname.split('/')[1]
            cb(null, `${Date.now()}-${file.originalname}.${ext}`)
        }
      })
      return mfStorage;
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