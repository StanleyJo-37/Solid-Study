import express from "express";
import 'dotenv/config'

const app = express();
const PORT = process.env.SERVER_PORT | process.env.PORT