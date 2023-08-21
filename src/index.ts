import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import chalk from "chalk";
import { restaurantRouter} from "./routes/restaurant-router.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(restaurantRouter)

app.listen(5000, () => console.log(`Servidor ON na porta ${chalk.blue("5000")}`))