const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const config = require('./config/def')


mongoose.connect(config.mongo_id).then(()=>{
    console.log('Mongo Connected!');
})


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))


const PORT = process.env.PORT || 3001
app.listen(PORT,()=>{
    console.log(`Listening on https://localhost:${PORT}`)
})
