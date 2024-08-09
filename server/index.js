import express from "express";
import { config } from "dotenv";
import cors from "cors";
import appRouter from "./routes/index.js";
import { connectToDatabase } from "./db/index.js";

const app = express();
app.use(cors());
config();

// middlewares
app.use(express.json());

app.use("/api/v1/products", appRouter);

const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => console.log(`server is working in ${PORT}`));
  })
  .catch((err) => {
    console.log("error occured with mysql connection. Error =", err);
    process.exit(0);
  });
