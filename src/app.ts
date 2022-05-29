import express, { Request, Response, NextFunction } from "express";
import recepieRoutes from "./routes/recepieRoutes";

import * as dotenv from "dotenv";
dotenv.config({ path: __dirname + "/.env" });

const app = express();

app.use("/recepie", recepieRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ message: err.message });
});

app.listen(3030);
