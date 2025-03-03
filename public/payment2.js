const express=require('express');
const path=require('path');

const payment=express();

payment.use('/assets', express.static('assets'))
payment.use(express.static(path.join(__dirname, 'public3')))

const port = 2000; // Choose your desired port number


payment.get('/', (req, res)=>{
    res.sendFile(__dirname+"/payment2.html")
})

payment.listen(port, ()=>{
    console.log('Server started on port 2000')
})