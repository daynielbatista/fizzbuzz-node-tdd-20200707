
describe("FizzBuzz UniTest", () =>{
    it("Fizz test", () =>{
        const fbService = require('./fizzbuz-helper');
        expect(fbService.fizzBuzzImp(3)).toBe(Fizz);
        expect(fbService.fizzBuzzImp(6)).toBe(Fizz);
    });
    it("Buzz test", () =>{
        const fbService = require('./fizzbuz-helper');
        expect(fbService.fizzBuzzImp(5)).toBe(Buzz);
        expect(fbService.fizzBuzzImp(10)).toBe(Buzz);
    });
    it("FizzBuzz test", () =>{
        const fbService = require('./fizzbuz-helper');
        expect(fbService.fizzBuzzImp(15)).toBe(FizzBuzz);
        expect(fbService.fizzBuzzImp(30)).toBe(FizzBuzz);
    });
    it("Invalid test", () =>{
        const fbService = require('./fizzbuz-helper');
        expect(fbService.fizzBuzzImp(null)).toBe(Invalid);
        expect(fbService.fizzBuzzImp("undefined")).toBe(Invalid);
        expect(fbService.fizzBuzzImp(-2)).toBe(Invalid);
        expect(fbService.fizzBuzzImp(2)).toBe(Invalid);
        expect(fbService.fizzBuzzImp("abc")).toBe(Invalid);
        expect(fbService.fizzBuzzImp("!`")).toBe(Invalid);


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