import express from "express";
import authMiddleware from "./authMiddleware.js";
import UserController from "./controller/UserController.js";
import AuthController from "./controller/AuthController.js";
import TestController from "./controller/TestController.js";
import cors from 'cors';

const app = express();

const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use("/auth", AuthController);
app.use(authMiddleware);
app.use("/users", UserController);
app.use("/test", TestController);

app.use((err, req, res, next) => {
    console.log(err);
    res.status(501).send(err.message);
});

app.listen(3001, () => {
    console.log("Server Started");
});
