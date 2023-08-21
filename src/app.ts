import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import chalk from "chalk";


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());


//app.use([])

app.listen(5000, () => console.log(`Servidor ON na porta ${chalk.blue("5000")}`))