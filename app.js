const express = require("express");
const app = express();
const path = require("path");
const viewPath = (res, files) => res.sendFile(path.join(__dirname, "views") + "/" + files + ".html");

app.get('/', (req, res) => viewPath(res, "index"));
app.get('*', (req, res) => res.redirect('/'));

app.listen(3000);