"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
var express = require("express");
var cors = require("cors");
var validation_controller_1 = require("./controllers/validation.controller");
function createServer() {
    var validationController = new validation_controller_1.ValidationController();
    var app = express();
    app.use(cors());
    app.use(express.json());
    app.get('/', function (req, res) {
        res.send({ greeting: 'Hello, this is the Credit Card Case Study backend entry point' });
    });
    app.get('/validate/:number', function (req, res) {
        validationController.validate(req, res);
    });
    return app;
}
exports.createServer = createServer;
