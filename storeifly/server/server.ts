import "dotenv/config";

import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is running.");
});

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
