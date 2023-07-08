"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express = require("express");
const cors = require("cors");
const validation_controller_1 = require("./controllers/validation.controller");
function createServer() {
    const validationController = new validation_controller_1.ValidationController();
    const app = express();
    app.use(cors());
    app.use(express.json());
    app.get('/', (req, res) => {
        res.send({ greeting: 'Hello, this is the Credit Card Case Study backend entry point' });
    });
    app.get('/validate/:number', (req, res) => {
        validationController.validate(req, res);
    });
    return app;
}
exports.createServer = createServer;
//# sourceMappingURL=server.js.map