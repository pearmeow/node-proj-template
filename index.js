const http = require("node:http");
const url = require("node:url");
const fs = require("node:fs/promises");

require("dotenv").config();

const hostname = "127.0.0.1";
const port = "8080";

const server = http.createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<p>Hi</p>");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    console.log(process.env.NODE_ENV);
});
