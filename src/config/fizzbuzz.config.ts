import { DotenvParseOutput } from "dotenv"

export default (Env: DotenvParseOutput) => {
    return {
        defaultFizzWord: Env.DEFAULT_FIZZWORD || "Fizz",
        defaultBuzzWord: Env.DEFAULT_BUZZWORD || "Buzz",
    }
}