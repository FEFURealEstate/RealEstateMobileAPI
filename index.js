import dotenv from "dotenv"
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router.js"

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", router);

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