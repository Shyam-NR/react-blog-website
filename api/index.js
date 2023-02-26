const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const categoryRoute = require('./routes/categories');


dotenv.config();
app.use(express.json());

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("Connected to MONGODB"))
  .catch((err) => console.log(err));

app.use('/auth', authRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);
app.use('/categories', categoryRoute);

app.listen("5000", () => {
  console.log("backend is running on port 5000");
});
