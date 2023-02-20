import dotenv from "dotenv"
import fizzbuzzConfig from "./fizzbuzz.config"
import { access, existsSync } from "fs"
import logger from "../libs/logger/winston"

const Env = dotenv.config().parsed! // null .env handle in app.js

export default {
    fizzbuzz: fizzbuzzConfig(Env)
}