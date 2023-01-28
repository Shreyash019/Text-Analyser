const File = require('../model/textModel');
const fs = require('fs');

let txtId = undefined;
exports.getAllFileAvailableForManipulation = async (req, res, next)=>{
    try{
        const getData = await File.find()
        
        res.json({
            status: 'Success',
            data: getData
        })
    } catch(err){
        console.log(err)
        return res.send(err)
    }
}


exports.getSingleFileAvailableForManipulation = async (req, res, next) => {
    try{
        let data = ''
        let characterCount = undefined;
        let wordCount = undefined;
        let sentanceCount = undefined
        const id = "63d45587fae43aa17c0797a3"
        const getData = await File.findById({_id: txtId})
        console.log('fileController.download: started')
        const path = ('uploads/'+getData.name)
        var readerStream = fs.createReadStream(path)

        // Set the encoding to be utf8. 
        readerStream.setEncoding('UTF8');
        // Handle stream events --> data, end, and error
        readerStream.on('data', function(chunk) {
            data += chunk;
        });
        readerStream.on('end', ()=>{
            characterCount = data.length - (data.split(' ').length-1)
            wordCount = data.split(' ').length
            sentanceCount = (data.split('\n').length)
            res.json({
                status: "Success",
                Charcters: characterCount,
                Words: wordCount,
                Sentences: sentanceCount,
                data: {data}
            })
            //readData = String(rdata)
        })

    } catch(err){
        console.log(err)
        return res.send(err)
    }
}


exports.uploadFileForAnalysis = async (req, res, next)=>{
    try{

        console.log(req.file)
        console.log(req.timoeto)
        const file = await File.create({
            name:  req.timoeto+'-'+req.file.originalname
        })
        txtId = file._id
        console.log('->', txtId)
        res.json({
            status: 'Message',
            message: 'File created successfully!!',
            data: {
                file
            }
        })
    } catch(err){
        console.log(err)
        return res.send(err)
    }
}