const File = require('../model/textModel')

exports.getTextManipulationHome = async (req, res, next)=>{
    try{
        res.send('Welcome to home page of text manipulation')
    } catch(err){
        console.log(err)
        res.send(err)
    }
}


exports.uploadFileForAnalysis = async (req, res, next)=>{
    try{
        console.log(req.file.originalname)
        const file = await File.create({
            name: Date.now()+'-'+ req.file.originalname
        })
        //console.log(newFile.name)
        res.json({
            status: 'Message',
            message: 'File created successfully!!',
        })
    } catch(err){
        console.log(err)
        res.send(err)
    }
}