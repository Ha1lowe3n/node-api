import express, { Request, Response, NextFunction } from "express";
import { userRouter } from "./users/users.js";

const port = 8000;
const app = express();

app.use((req, res, next) => {
    console.log("Время ", Date.now());
    next();
});
app.use("/users", userRouter);

app.get("/hello", (req, res) => {
    throw new Error("error!!!");
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err.message);
    res.status(500).send(err.message);
});

app.listen(port, () => {
    console.log(`Сервер запущен`);
});
