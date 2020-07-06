describe ("Calculator", function(){
    
    beforeEach(function(){
        calc = new Calculator;
    })
    var calc = new Calculator;
    describe("Addition test", function(){
        it("Should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
        });
        it("Should return 26", function(){
            calc.add(19);
            calc.add(7);
            expect(calc.value).toBe(26);
        });
        it("should return an error if we don't supply two numbers", function(){
            spyOn(window, "alert");
            calc.add("Hitchhikers");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        });
    });
});