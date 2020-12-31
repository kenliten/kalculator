const link = function (el) {
    return document.querySelector(el);
}

class Buttons {
    digits;
    functions;
    operations;
}

class UI {
    buttons;
    screen = link('#result')
    current = link('#current')

    constructor(parent) {
        var self = this;

        self.buttons = new Buttons();

        self.buttons.digits = {
            dot: link('#dot-button'),
            zero: link('#zero-button'),
            one: link('#one-button'),
            two: link('#two-button'),
            three: link('#three-button'),
            four: link('#four-button'),
            five: link('#five-button'),
            six: link('#six-button'),
            seven: link('#seven-button'),
            eight: link('#eight-button'),
            nine: link('#nine-button'),
        };

        self.buttons.functions = {
            clear: link('#clear-button'),
        };

        self.buttons.operations = {
            add: link('#add-button'),
            sub: link('#sub-button'),
            mul: link('#mul-button'),
            div: link('#div-button'),
            equal: link('#equal-button')
        };

        self.screen.textContent = self.amount;
        self.buttons.digits.dot.addEventListener('click', function (e) {
            parent.addToInput('.');
        });
        self.buttons.digits.zero.addEventListener('click', function (e) {
            parent.addToInput('0');
        });
        self.buttons.digits.one.addEventListener('click', function (e) {
            parent.addToInput('1');
        });
        self.buttons.digits.two.addEventListener('click', function (e) {
            parent.addToInput('2');
        });
        self.buttons.digits.three.addEventListener('click', function (e) {
            parent.addToInput('3');
        });
        self.buttons.digits.four.addEventListener('click', function (e) {
            parent.addToInput('4');
        });
        self.buttons.digits.five.addEventListener('click', function (e) {
            parent.addToInput('5');
        });
        self.buttons.digits.six.addEventListener('click', function (e) {
            parent.addToInput('6');
        });
        self.buttons.digits.seven.addEventListener('click', function (e) {
            parent.addToInput('7');
        });
        self.buttons.digits.eight.addEventListener('click', function (e) {
            parent.addToInput('8');
        });
        self.buttons.digits.nine.addEventListener('click', function (e) {
            parent.addToInput('9');
        });
        self.buttons.functions.clear.addEventListener('click', function (e) {
            parent.clear();
        });
        self.buttons.operations.add.addEventListener('click', function () {
            parent.operate('add');
        });
        self.buttons.operations.sub.addEventListener('click', function () {
            parent.operate('sub');
        });
        self.buttons.operations.mul.addEventListener('click', function () {
            parent.operate('mul');
        });
        self.buttons.operations.div.addEventListener('click', function () {
            parent.operate('div');
        });
        self.buttons.operations.equal.addEventListener('click', function () {
            parent.operate('equal');
        });
    }
}
