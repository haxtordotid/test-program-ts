import logger from "../libs/logger/winston";
import { fizzbuzzParam } from "./fizzbuzz.dto";
import { IServiceFizzBuzz, IFizzBuzzWordAttribute } from "./fizzbuzz.interface";

export default class FizzBuzzService implements IServiceFizzBuzz, IFizzBuzzWordAttribute {
    _fizzWord!: string;
    _buzzWord!: string;
    
    constructor() {
        this.init();
    }

    init(): void {
        this.fizzWord = "fizz"
        this.buzzWord = "buzz"
    }

    run(param: fizzbuzzParam): void {
        logger.info(`Program FizzBuzz Start from ${param.start} to ${param.max}`)
        for (let n = param.start; n < param.max; n++) {
            const word = this.myFizzBuzzWord(n)
            logger.info(word)
        }
    }

    myFizzBuzzWord(currentNumber: number): string {
        let word: string = String(currentNumber)
        if (currentNumber % 3 == 0) {
            word = this.fizzWord
            if (currentNumber % 5 == 0) word += " " + this.buzzWord
        } else if (currentNumber % 5 == 0) {
            word = this.buzzWord
        }
        return word
    }
    
    public get fizzWord() : string {
        return this._fizzWord
    }

    public set fizzWord(v : string) {
        this._fizzWord = v
    }

    public get buzzWord() : string {
        return this._buzzWord
    }

    public set buzzWord(v : string) {
        this._buzzWord = v
    }
    
}