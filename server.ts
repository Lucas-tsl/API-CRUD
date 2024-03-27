import express from "express";
import { division } from "./division";
import { addition } from "./addition";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Express permet de récupérer les paramètres de la route via req.param

app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.get("/hello/:name", (req, res) => {
    res.send(`Hello ${req.params.name}!`);
});

// Division
app.get("/division/:a/:b", (req, res) => {
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);

    try {
        res.send(`Le résultat de la division est ${division(a, b)}`);
    } catch (e) {
        res.status(400).send(e.message);
    }
});

function division(a, b) {
    if (b === 0) {
        throw new Error("Division par zéro impossible");
    }
    return a / b;
}

// Addition
app.get("/addition/:a/:b", (req, res) => {
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);

    res.send(`Le résultat de l'addition est ${addition(a, b)}`);
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});