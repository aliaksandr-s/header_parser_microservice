'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('*', function (req, res) {
    res.json({
        ip: req.ip,
        language: req.headers['accept-language'].split(',')[0],
        os: req.headers['user-agent'].match(/\(([^\)]+)\)/)[1]
    })
})

app.listen(port, function () {
    console.log('listening')
})

