var express = require('express');
var app = express();

/* app.get('/', function(req, res) {
    res.end();
}); */

var photoRouter = express.Router();
photoRouter.get(‘/’, function(req, res) { });
photoRouter.post(‘/’, function(req, res) { });
photoRouter.get(‘/:id’, function(req, res) { });
photoRouter.patch(‘/:id’, function(req, res) { });
photoRouter.delete(‘/:id’, function(req, res) { });
app.use(‘/photo’, photoRouter);

var albumRouter = express.Router();
albumRouter.get(‘/’, function(req, res) { });
albumRouter.post(‘/’, function(req, res) { });
albumRouter.get(‘/:id’, function(req, res) { });
albumRouter.patch(‘/:id’, function(req, res) { });
albumRouter.delete(‘/:id’, function(req, res) { });
app.use(‘/album’, albumRouter);

module.exports = app;
