const express = require('express');

const app = express();

app.get('/:clientEndpoint', (req, res, next) => {
    let len = (req.params.clientEndpoint).length * 2;
    console.log("Length is : " + len)
    res.send({len});
})

module.exports = app;
