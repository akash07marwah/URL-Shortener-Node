const express = require('express')
const connectDB =  require('./config/db')
const app = express()
const cors = require('cors')
connectDB()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))

const PORT = process.env.PORT; 

app.listen(PORT,()=>{
    console.log(`server running on https://localhost:${PORT}`)
})