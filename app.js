const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world!"));

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Express app listening on http://127.0.0.1:${PORT}`);
});
