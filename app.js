/**
 * Created by Esenor on 11/03/2016.
 */
var express = require('express');
var morgan = require('morgan');
var twig = require('twig');
var connector = require('./libs/ControllerConnector');
// init application
var app = express();
app.use(morgan('combined')); // Start logging
app.use(express.static('public')); // public folder
app.set('twig options', {strict_variable: false}); // Set twig
// Build router
connector.connect(app, 'Index');
connector.connect(app, 'Chart');
connector.connect(app, 'Error');
// Run application
app.listen(8080);
