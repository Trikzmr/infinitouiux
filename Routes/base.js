const express = require('express');
const ComponentName = require('../Models/ComponentsName')

const api = express.Router();

const apicall = async (req, res) => {
    res.send(`
        <h1>Welcome to the API</h1> `)
}

api.get('', apicall);

module.exports = api;


