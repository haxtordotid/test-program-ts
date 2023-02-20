import yargs from 'yargs/yargs';
import fizzbuzzModule from './fizzbuzz/fizzbuzz.module';
import palindromeModule from './palindrome/palindrome.module';
import { existsSync } from 'fs';
import logger from './libs/logger/winston';


if(!existsSync('./.env')) {
    logger.error('You might forgot to put .env in root project?')
    process.exit(-1)
}

let argv = yargs(process.argv.slice(2))
    
// logger.info('Loaded Config', argv)
argv.command(
    fizzbuzzModule.program.command, 
    fizzbuzzModule.program.description,
    fizzbuzzModule.commandBuilder,
    fizzbuzzModule.handler
)
.command(
    palindromeModule.program.command,
    palindromeModule.program.description,
    palindromeModule.commandBuilder,
    palindromeModule.handler
)
.usage(
    `Usage: npm run dev -- <command> [options]\n` +
    `Usage: ts-node src/app.ts <command> [options]`
)
.demandCommand()
.help()
.scriptName("ts-node src/app.ts")

argv.parseSync()

// if (argv["_"][0] == "fizzbuzz") {
    
// }
// loadModuleFizzBuzz(argv)
// loadModulePalindrome(argv)
// argv.help("help")

