/*
*  Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license.
*  See LICENSE in the source repository root for complete license information.
*/

const https = require('https');
var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
const fs = require('fs');

// Initialize variables.
var PORT = 30666;

// Configure morgan module to log all requests.
app.use(morgan('dev'));

// Set the front-end folder to serve public assets.
app.use("/dist", express.static(path.join(__dirname, "node_modules")));

// Set up our one route to the index.html file.
app.get('*', function (req, res) {
    const reqPath = req.path === "/" ? "/index_blankPageRedirectUri.html" : req.path;
    res.sendFile(path.join(__dirname + reqPath));
});

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(PORT, () => {
    console.log('Listening on port ' + PORT + '...');
});
