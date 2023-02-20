import logger from "../libs/logger/winston"

export function isPalindromeWord(word: string) {
    return word === word.split("").reverse().join("") // :) let me know if this unaccepted :smile_smirk:
}

export function resultPalindromeWord(word: string[]): void {
    let countPalindrome = 0
    let countNotPalindrome = 0
    if (word.length === 0) {
        logger.info(`Word Required`)
        return
    }
    word.map(w => {
        if (isPalindromeWord(w)) {
            logger.info(`${w} is palindrome word`)
            countPalindrome += 1
        }
        else {
            logger.info(`${w} is not palindrome word`)
            countNotPalindrome += 1
        }
    })
    logger.info(`total word : ${word.length}`)
    logger.info(`total palindrome : ${countPalindrome}`)
    logger.info(`total not palindrome : ${countNotPalindrome}`)
}