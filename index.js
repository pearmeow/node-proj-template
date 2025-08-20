import { createServer } from "node:http";
import { URL } from "node:url";
import * as fs from "node:fs/promises";

const hostname = "127.0.0.1";
const port = "8080";

const server = createServer(async (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<p>Hi</p>");
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
