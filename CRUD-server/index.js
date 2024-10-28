const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");

app.use(express.json());
app.use(cors());

const db = require("./models");
const MongoClient    = require('mongodb').MongoClient;

// Routers
const postRouter = require("./routes/postProfile");
app.use("/postProfile", postRouter);
const updateRouter = require("./routes/updateProfile");
app.use("/updateProfile", updateRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
}); 