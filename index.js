import express from "express";
import path from "path";
import { urlencoded, json } from "body-parser";
// loading routes
import routes from "./api/routes";

const app = express();

app.use(function (req, res, next) {
    console.log(req.method, req.url);
    next();
});

// Enable parsing for forms submisstions
app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/api', routes);
//creating server to listen to request

const server = app.listen(3030, function () {
    console.log('Fuber running on port ' + 3030);
});

process.on('uncaughtException', function (err) {
    // handle the error safely
    console.log("Node error handler", err);
});
