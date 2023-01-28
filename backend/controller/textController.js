const File = require('../model/textModel');
const fs = require('fs');
var pos = require('pos');

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
        let sentanceCount = undefined;
        let nouns = 0;
        let adjectives = 0;
        let adverbs = 0;
        let verbs = 0;
        if(txtId===undefined){
            return res.json({
                status: "Success",
                Charcters: 0,
                Words: 0,
                Sentences: 0,
                Nouns: 0,
                Verbs: 0,
                id: '',
                data: ''
            })
        }
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
                Nouns: nouns,
                Verbs: verbs,
                id: getData._id,
                data: {
                    data
                }
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
        const file = await File.create({
            name:  req.timoeto+'-'+req.file.originalname
        })
        console.log(file)
        txtId = file._id
        console.log('->', txtId)
        res.json({
            status: 'Message',
            message: 'File created successfully!!',
            id: txtId,
            data: {
                file
            }
        })
    } catch(err){
        console.log(err)
        return res.send(err)
    }
}
