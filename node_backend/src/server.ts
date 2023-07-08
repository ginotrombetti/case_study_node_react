import * as express from 'express';
import cors = require('cors');
import { ValidationController } from "./controllers/validation.controller";

export function createServer() {
    const validationController = new ValidationController();
    const app = express();
    app.use(cors());
    app.use(express.json());

    app.get('/', (req: express.Request, res: express.Response) => {
        res.send({ greeting: 'Hello, this is the Credit Card Case Study backend entry point' });
    });

    app.get('/validate/:number', (req: express.Request, res: express.Response) => {
        validationController.validate(req, res)
    });
    return app;
}
