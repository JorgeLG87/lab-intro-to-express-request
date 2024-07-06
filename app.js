const express = require("express");
require("dotenv");

const app = express();

const PORT = process.env.PORT;


app.get("/:verb/:adjective/:noun", (req, res) => {
    const {verb, adjective, noun} = req.params;

    res.send(`Congratulations on starting a new project called ${verb}, ${adjective}, ${noun}!`);
})




app.get("/bugs", (req, res) => {
    console.log("99 little bugs in the code");
    const html = "<p>99 little bugs in the code</p><a href='http://localhost:8888/bugs/101'>Pull one down, patch it around</a>"
    res.send(html)
});

app.get("/bugs/:number", (req, res) => {
    const {number} = req.params;
    const html = `<p>${Number(number)+2} little bugs in the code</p><a href="http://localhost:8888/bugs/${String(Number(number)+2)}">Pull one down, patch it around</a>`
    const html2 = `<p>${Number(number)} little bugs in the code</p><a href="http://localhost:8888/bugs">Start Over</a>`

    if (Number(number) > 200) {
        res.send(html2)
    } else res.send(html);

})


module.exports = app
