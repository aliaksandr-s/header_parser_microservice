'use strict'

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('*', function (req, res) {
    console.log(req.ip)
    res.json({
        ip: req.ip.match(/\d.+/)[0],
        language: req.headers['accept-language'].split(',')[0],
        os: req.headers['user-agent'].match(/\(([^\)]+)\)/)[1]
    })
})

app.listen(port, function () {
    console.log('listening')
})

