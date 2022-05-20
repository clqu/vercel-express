import express, { Express, Request, Response } from 'express';
const app: Express = express();
const port: string | Number = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use("/", require('./routes/index.js'));

app.listen(port, () => {
    console.log(`⚡️ Server is running at http://127.0.0.1:${port}`);
});
