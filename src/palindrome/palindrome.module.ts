import { ArgumentsCamelCase, Argv } from 'yargs';
import { resultPalindromeWord } from './palindrome';
import { palindromeModuleArgsOptions } from './palindrome.dto';


export const program = {
    command: 'palindrome <words...>',
    description: ' - Run Palindrome Program'
}

export function commandBuilder(argv: Argv ) {
    return argv.usage("ts-node src/app.ts palindrome [Option] ...")
    .positional('words', {
        describe: 'insert minimum one word to check that word is palindrome'
    })
}

export function handler(args: ArgumentsCamelCase<palindromeModuleArgsOptions>): void | Promise<void> {
    resultPalindromeWord(args.words)
}

export default {
    program,
    commandBuilder,
    handler
}