import express from "express";
import { division } from "./division";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Express permet de récupérer les paramètres de la route via req.params
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/hello/:name", (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});
app.get("/division/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    res.send(`Le résultat de la division est ${division(a, b)}`);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});