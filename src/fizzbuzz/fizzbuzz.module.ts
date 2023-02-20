import yargs, { ArgumentsCamelCase, Argv, CommandBuilder, InferredOptionTypeInner } from "yargs";
import { fizzbuzzModuleArgsOption } from "./fizzbuzz.dto";
import FizzBuzzService from "./fizzbuzz.service";

export const loadModule = (args: yargs.Argv<{}>) => {
    args.command('fizzbuzz', 'Run Fizzbuzz Program', (argv) => {
        return argv.option('fizz', {
            describe: 'default fizz word',
            type: 'string',
            default: 'fizz'
        })
        .option('buzz', {
            describe: 'default buzz word',
            type: 'string',
            default: 'buzz'
        })
        .option('start', {
            describe: 'count number from ',
            type: 'number',
            default: 1
        })
        .option('max', {
            describe: 'max number counted ',
            type: 'number',
            default: 100
        }).parse()
    }, (args: ArgumentsCamelCase<fizzbuzzModuleArgsOption>) => {
        const fizzbuzzService = new FizzBuzzService()
        if (args.fizz) fizzbuzzService.fizzWord = args.fizz
        if (args.buzz) fizzbuzzService.buzzWord = args.buzz
        fizzbuzzService.run({
            max: args.max,
            start: args.start,
        })
    })
    return args.parse()
}

export const program = {
    command: 'fizzbuzz',
    description: ' - Run Fizzbuzz Program'
}

export function commandBuilder(argv: Argv ) {
    return argv.usage("ts-node src/app.ts fizzbuzz [Option] ...")
    .option('fizz', {
        describe: 'default fizz word',
        type: 'string',
        default: 'fizz'
    })
    .option('buzz', {
        describe: 'default buzz word',
        type: 'string',
        default: 'buzz'
    })
    .option('start', {
        describe: 'count number from ',
        type: 'number',
        default: 1
    })
    .option('max', {
        describe: 'max number counted ',
        type: 'number',
        default: 100
    })
}

export function handler(args: ArgumentsCamelCase<fizzbuzzModuleArgsOption>): void | Promise<void> {
    const fizzbuzzService = new FizzBuzzService()
    if (args.fizz) fizzbuzzService.fizzWord = args.fizz
    if (args.buzz) fizzbuzzService.buzzWord = args.buzz
    fizzbuzzService.run({
        max: args.max,
        start: args.start,
    })
}

export default {
    program,
    commandBuilder,
    handler
}