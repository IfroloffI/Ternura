const express = require("express");
const app = express();
//const WebSocket = require('ws');

const port = 3001;
const cors = require("cors");

app.use(express.json());
app.use(cors());


// Routers
const likeRouter = require("./routes/likeEvent");
app.use("/likeEvent", likeRouter);
const authRouter = require("./routes/authEvent");
app.use("/auth", authRouter);
const postRouter = require("./routes/postProfile");
app.use("/postProfile", postRouter);
const updateRouter = require("./routes/updateProfile");
app.use("/updateProfile", updateRouter);

app.listen(port, () => {
  console.log("Server is running on port " + port);
}); 