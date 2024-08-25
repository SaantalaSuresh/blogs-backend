const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PostRoutes = require("./routes/PostRoutes.js");
const PORT = 50002;

const app = express();
app.use(cors());

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));

//declaring routers
app.use("/posts", PostRoutes);

//connecting to mongoDb
const connectionUrl =
  "mongodb+srv://saantalasuresh:blog@cluster0.cc4mu.mongodb.net/blogs?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server running on port " + PORT);
    });
  })
  .catch((e) => {
    console.log("error", e.message);
  });
