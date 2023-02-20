import FizzBuzzService from "../src/fizzbuzz/fizzbuzz.service"
import { expect } from "chai"

describe('Tets FizzBuzz Service', function() {
    const service = new FizzBuzzService()
    service.init()
    service.fizzWord = "fizz"
    service.buzzWord = "buzz"

    it('Number 12 expected as fizz word', function() {
        const word = service.myFizzBuzzWord(12)
        expect(word).to.be.eq("fizz")
    })

    it('Number 30 expected as fizz buzz word', function() {
        const word = service.myFizzBuzzWord(30)
        expect(word).to.be.eq("fizz buzz")
    })

    it('Number 35 expected as buzz word', function() {
        const word = service.myFizzBuzzWord(35)
        expect(word).to.be.eq("buzz")
    })
})