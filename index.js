import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json("Hello from API!")
})

const serve = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(res => {
      app.listen(process.env.PORT || 3000, () => {
        console.log("API started")
      })
    })
  } catch (e) {
    console.log(e);
  }
}

serve();