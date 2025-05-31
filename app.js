const express = require('express');
const addComponentName = require('./Routes/AddComponentName');
const getComponentName = require('./Routes/GetComponetName');
const cors = require('cors');
const base = require('./Routes/base');

const app = express();
const port = 3005;

app.use(cors())
app.use(express.json());
//require('./Conn/conn')

app.use('', base);
app.use('/api', addComponentName);
app.use('/api', getComponentName);

app.listen(port, () =>{
    console.log('Server Is running at localhost:'+port)
})