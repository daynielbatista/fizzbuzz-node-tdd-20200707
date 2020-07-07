module.exports = {
    fizzBuzzImpl: function (cn) {
        
        if (cn === null || cn ==="undefined" || cn <= 0) {
            return "Invalid";
        } else if (cn % 15 ===0) {
            return "FizzBuzz";
        } else if (cn % 5 ===0) {
            return "Buzz";
        } else if (cn % 3 ===0) {
            return "Fizz";
        }
        return "Invalid";
    };
};