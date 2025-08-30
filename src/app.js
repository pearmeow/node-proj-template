const express = require("express");
const path = require("node:path");
const cors = require("cors");
const routes = require("./routes");

const app = express();

// third party middleware

// enables requests from different origins
app.use(cors()); // can add options inside for security

// application level middleware

app.use(express.json()); // parses json requests
// parses urlencoded requests (forms with post)
app.use(express.urlencoded({ extended: true }));

// router middleware

app.use("/", routes); // doesn't work, change in actual implementation

const PORT = 3000;

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`Express app listening on http://127.0.0.1:${PORT}`);
});
