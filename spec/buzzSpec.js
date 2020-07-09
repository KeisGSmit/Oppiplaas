describe("My fizzBuzz function", function(){
    beforeEach(function(){
        fizzbuzz = new fizzBuzz();
    });
    describe("Returns: number/'Fizz'/'Buzz'/fizzbuzz",function(){
        it("should exist",function(){
            expect(fizzBuzz).toBeDefined();
        });
        it("should return fizz if fizzbuzz(9)", function(){
            expect(fizzBuzz(9)).toBe("fizz")
        })
        it ("Should return buzz if fizzbuzz(10)", function(){
            expect(fizzBuzz(10)).toBe("buzz")
        })
        it ("should return fizzbuzz if fizzbuzz (15)",function (){
            expect(fizzBuzz(15)).toBe("fizzbuzz")
        })
        it ("Should return the number if number is not divisible by 3 or 5",function(){
            expect(fizzBuzz(2)).toBe(2)
        })
    });
});