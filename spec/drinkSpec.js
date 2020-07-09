describe("My whatCanIDrink function", function(){
    beforeEach(function(){
        drink = new whatCanIDrink;
    });

    describe("age check",function(){
        it("should exist", function(){
            expect(whatCanIDrink).toBeDefined();
        });
        it("should return drink toddy when called as whatCanIDrink(13)", function(){
            var result = whatCanIDrink(13);
            expect(result).toBe("Drink Toddy");
        });
        it("should return drink coke when called as whatCanIDrink(17)", function(){
            expect(whatCanIDrink(17)).toBe("Drink Coke");
        });
        it("should return drink coke when called as whatCanIDrink(20)", function(){
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("should return drink beer when called as whatCanIDrink(18)", function(){
            expect(whatCanIDrink(18)).toBe("Drink Beer");
        });
        it("Should return drink whiskey when called as whatCanIDrink(100)",function(){
            expect(whatCanIDrink(100)).toBe("Drink Whiskey");
        });
        it("Should return drink whiskey when called as whatCanIDrink(30)",function(){
            expect(whatCanIDrink(30)).toBe("Drink Whiskey");
        });
        it("Should return 'Sorry. I can’t tell what drink because that age is incorrect!' when called as whatCanIDrink(-25)",function(){
            expect(whatCanIDrink(-25)).toBe("'Sorry. I can't tell what drink because that age is incorrect'");
        });
        it("Should return 'Sorry. I can’t tell what drink because that age is incorrect!' when called as whatCanIDrink(300)",function(){
            expect(whatCanIDrink(300)).toBe("'Sorry. I can't tell what drink because that age is incorrect'");
        });
    });
});