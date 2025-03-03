const cors = require('cors');
require("dotenv").config();

const app = require('express')();
var http = require('http').Server(app);

const paymentRoute = require('./routes/paymentRoute');

app.use(cors());

// Example route to receive localStorage data
app.post('/receive-localstorage', (req, res) => {
  // Handle receiving localStorage data here
  const { netAmount } = req.body; // Assuming you're sending JSON data
  console.log('Received netAmount:', netAmount);
  res.send('LocalStorage data received successfully');
});


app.use('/',paymentRoute);

http.listen(3228, function(){
    console.log('Server is running at port 3228');
});