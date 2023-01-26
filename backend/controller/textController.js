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
        const newFile = await File.create({
            name: Date.now()+'-'+req.file.originalname
        })
        
        res.json({
            status: 'Message',
            message: 'File created successfully!!'
        })
    } catch(err){
        console.log(err)
        res.send(err)
    }
}