const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./config/db');

const app = express();

const port = 8086;
app.use(bodyParser.json());


const authRouter = require("./routes/auth");
app.use("/auth", authRouter);

// Подключение к базе данных
(async () => {
  await connectDB(); // Убедитесь, что мы ждем подключения
  app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
  });
})();
