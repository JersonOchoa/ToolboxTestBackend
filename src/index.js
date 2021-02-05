const express = require("express");
const cors = require("cors");
const { test } = require("./handlers/text");

//Initialization
const app = express();

//Settings
const PORT = process.env.PORT || 4000;
app.set("port", PORT);
app.use(express.json());
app.use(cors());

//Routes
app.post("/api/test", test);

// Starting the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});
