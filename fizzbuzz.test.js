
describe("FizzBuzz UniTest", () =>{
    it("Fizz test", () =>{
        const fbService = require('./fizzbuzz-helper');
        expect(fbService.fizzBuzzImpl(3)).toBe("Fizz");
        expect(fbService.fizzBuzzImpl(6)).toBe("Fizz");
    });
    it("Buzz test", () =>{
        const fbService = require('./fizzbuzz-helper');
        expect(fbService.fizzBuzzImpl(5)).toBe("Buzz");
        expect(fbService.fizzBuzzImpl(10)).toBe("Buzz");
    });
    it("FizzBuzz test", () =>{
        const fbService = require('./fizzbuzz-helper');
        expect(fbService.fizzBuzzImpl(15)).toBe("FizzBuzz");
        expect(fbService.fizzBuzzImpl(30)).toBe("FizzBuzz");
    });
    it("Invalid test", () =>{
        const fbService = require('./fizzbuzz-helper');
        expect(fbService.fizzBuzzImpl(null)).toBe("Invalid");
        expect(fbService.fizzBuzzImpl("undefined")).toBe("Invalid");
        expect(fbService.fizzBuzzImpl(-2)).toBe("Invalid");
        expect(fbService.fizzBuzzImpl(2)).toBe("Invalid");
        expect(fbService.fizzBuzzImpl("abc")).toBe("Invalid");
        expect(fbService.fizzBuzzImpl("!`")).toBe("Invalid");


    });
});

/** 
 * RED - GREEN - BLUE
 * 
 * expect(..).toBe()
 * expect(..).toBeFalsy()
 * expect(..).toBeTruthy()
 * expect(..).toEqual()
 * 
*/