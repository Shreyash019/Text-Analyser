const server = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})

const DBurl =  process.env.DATABASE.replace('<password>', process.env.DATABASE_PASSWORD)

mongoose.connect(DBurl, {
    useNewUrlParser: true,
}).then(()=> console.log('Database connection successful'))

const PORT = process.env.PORT || 5000
server.listen(PORT, (err)=>{
    if(err) console.log(err)
    else console.log(`Server running at port ${PORT}`)
})