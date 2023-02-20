import { fizzbuzzParam } from "./fizzbuzz.dto";

export interface IFizzBuzzWordAttribute {
    _fizzWord: string
    _buzzWord: string
}

export interface IServiceFizzBuzz {
    init(): void;
    run(param: fizzbuzzParam): void;  
    myFizzBuzzWord(currentNumber: number): string;
}