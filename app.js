const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

//https://www.youtube.com/watch?v=lzQIhjElV_g
//29:00
////////////////////////////////////////////////////////////
app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
    
});
