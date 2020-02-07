const express = require('express');
const app = express();

const port = process.env.port || 3000;


app.get('/',(req,res) =>{
    res.send('Hello')
})
,
app.post('/message',(req, res) =>{

})

app.delete('/message',(req, res) =>{

})

app.put('/', (req, res) =>{

})

app.listen(port);