const express = require('express');
const path = require('path');
const app = express();
const {v4} = require('uuid');

const PORT = 3000;

// TODO: remove this mock to another file 
let CONTACTS = [
    {
        id: v4(),
        name: 'Aleksan',
        phone: '+7-999-999-99-99',
    },
];

//to make usable json in obj req at method post
app.use(express.json());

//GET
app.get('api/contacts', (req, res) => {
    setTimeout(() => res.status(200).json(CONTACTS), 1000);
});

//POST
app.post('api/contacts', (req, res) => {
    // console.log(req.body);
    // res.json({test: 1});
    const contact = {...req.body, id: v4(), name: 'null', phone: '???'};
    CONTACTS.push(contact);
    res.status(201).json(contact);
});

//DELETE
app.delete('api/contacts/:id', (req, res) => {
    CONTACTS = CONTACTS.filter(item => item.id != req.params.id);
    res.status(200).json({message: 'was deleted!'});
});

//PUT
app.put('api/contacts/:id', (req, res) => {
    const idx = CONTACTS.findIndex(item => item.id === req.params.id);
    CONTACTS[idx] = req.body;
    res.status(200).CONTACTS[idx];
});

//https://www.youtube.com/watch?v=lzQIhjElV_g
//29:00
//46:00
////////////////////////////////////////////////////////////
app.use(express.static(path.resolve(__dirname, 'client')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT}...`);
    
});
