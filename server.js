const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json())

require('dotenv').config()

const mongoConfig = require('./Config/mongoConfig')
const contactRouter = require('./routes/contactRouter')

app.use('/contact', contactRouter)
app.get('/', (req, res)=>{
    res.status(200).json({message:'welcome to the api'})
})
app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
    mongoConfig()
})