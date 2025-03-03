const express=require('express');
const path=require('path');

const payment=express();

payment.use('/assets', express.static('assets'))
payment.use(express.static(path.join(__dirname, 'public4')))

const port = 3000; // Choose your desired port number

payment.get('/', (req, res)=>{
    res.sendFile(__dirname+"/payment3.html")
})

payment.listen(port, ()=>{
    console.log('Server started on port 3000')
})