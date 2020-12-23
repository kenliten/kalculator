const Kalculator = require('./core');
const kalc = new Kalculator();

describe("Kalculator.addToInput & clear", function() {

    afterEach(function() {
        console.log(kalc.history);
    });

    it("Works!", function() {
        kalc.addToInput("3");
        expect(kalc.input).toEqual(3);
        kalc.clear();
        expect(kalc.input).toEqual(0);
    });

    it("Deals with 0s!", function() {
        kalc.addToInput("0");
        expect(kalc.input).toEqual(0);
    });

    it("Works with several inputs!", function() {
        kalc.addToInput("3");
        kalc.addToInput("5");
        kalc.addToInput("3");
        kalc.addToInput("7");
        kalc.addToInput("6");
        kalc.addToInput("1");
        expect(kalc.input).toEqual(353761);
        kalc.clear();
        expect(kalc.input).toEqual(0);
    });

});

describe("Kalculator.add", function () {

    it("Works!",function(){
        expect(kalc.add(23, 43)).toBe(66);
    });

});

describe("Kalculator.sub", function () {

    it("Works!",function(){
        expect(kalc.sub(23, 43)).toBe(-20);
    });

});

describe("Kalculator.mul", function () {

    it("Works!",function(){
        expect(kalc.mul(23, 43)).toBe(989);
    });

});

describe("Kalculator.div", function () {

    it("Works!",function(){
        expect(kalc.div(125, 5)).toBe(25);
    });

});

describe("Kalculator.operate", function() {
    
    it("Adds", function() {
        kalc.addToInput("3");
        kalc.addToInput("5");
        kalc.operate("add");
        expect(kalc.amount).toEqual(35);
        kalc.addToInput("4");
        kalc.addToInput("2");
        kalc.operate("add");
        expect(kalc.amount).toEqual(77);
        kalc.clear();
    });
    
    it("Subtracts", function() {
        kalc.addToInput("3");
        kalc.addToInput("5");
        kalc.operate("sub");
        expect(kalc.amount).toEqual(35);
        kalc.addToInput("4");
        kalc.addToInput("2");
        kalc.operate("sub");
        expect(kalc.amount).toEqual(-7);
        kalc.clear();
    });
    
    it("Multiply", function() {
        kalc.addToInput("3");
        kalc.addToInput("5");
        kalc.operate("mul");
        expect(kalc.amount).toEqual(35);
        kalc.addToInput("4");
        kalc.addToInput("2");
        kalc.operate("mul");
        expect(kalc.amount).toEqual(35 * 42);
        kalc.clear();
    });
    
    it("Divide", function() {
        kalc.addToInput("3");
        kalc.addToInput("5");
        kalc.operate("div");
        expect(kalc.amount).toEqual(35);
        kalc.addToInput("4");
        kalc.addToInput("2");
        kalc.operate("div");
        expect(kalc.amount).toEqual(35 / 42);
        kalc.clear();
    });

});