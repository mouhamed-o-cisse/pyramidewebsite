const express = require('express');

const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/newpyramide'));

app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/newpyramide/index.html'));});

app.listen(process.env.PORT || 2222);

console.log('Server started');
