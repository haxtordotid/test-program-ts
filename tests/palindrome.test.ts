import { isPalindromeWord } from "../src/palindrome"
import { expect } from "chai"

describe('Test Palindrome', function() {

    it('Word FIZZIF expect as Palindrome Word', function() {
        const word = "FIZZIF"
        expect(isPalindromeWord(word)).to.be.eq(true)
    })

    it('Word AzzxzzA expect as Palindrome Word', function() {
        const word = "AzzxzzA"
        expect(isPalindromeWord(word)).to.be.eq(true)
    })

    it('Word WoWW expect as Not Palindrome Word', function() {
        const word = "WoWW"
        expect(isPalindromeWord(word)).to.be.eq(false)
    })

    it('Word WooWW expect as Not Palindrome Word', function() {
        const word = "WooWW"
        expect(isPalindromeWord(word)).to.be.eq(false)
    })

})