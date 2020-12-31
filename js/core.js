var currentNumber = "0",
    lastNumber = "",
    operation = "",
    result = 0,
    clean = true;

const link = function(el) {
    return document.querySelector(`#${el}`);
}

const ui = {
    screen: link('screen'),
    zero: link('zero-button'),
    one: link('one-button'),
    two: link('two-button'),
    three: link('three-button'),
    four: link('four-button'),
    five: link('five-button'),
    six: link('six-button'),
    seven: link('seven-button'),
    eight: link('eight-button'),
    nine: link('nine-button'),
    dot: link('dot-button'),
    add: link('add-button'),
    sub: link('sub-button'),
    mul: link('mul-button'),
    div: link('div-button'),
    equal: link('equal-button'),
    percent: link('percent-button'),
    clear: link('clear-button'),
    backspace: link('backspace-button'),
}

const print = function(input) {
    if (clean) {
        ui.screen.textContent = "";
        clean = false;
    }
    currentNumber = currentNumber == "0" ? input : currentNumber += input;
    ui.screen.textContent = `${lastNumber} ${operation} ${currentNumber}`.trim();
}

const init = function() {
    ui.screen.textContent = "0";
    currentNumber = "0";
    lastNumber = "";
    operation = "";
    result = 0;
}

const add = function(n1, n2) {
    return parseFloat(n1) + parseFloat(n2);
}

const sub = function(n1, n2) {
    return parseFloat(n1) - parseFloat(n2);
}

const mul = function(n1, n2) {
    return parseFloat(n1) * parseFloat(n2);
}

const div = function(n1, n2) {
    return parseFloat(n1) / parseFloat(n2);
}

const percent = function() {
    if (lastNumber != "" && currentNumber != "0") {
        return (lastNumber * 100) / currentNumber;
    }
}

const prevOperation = function() {
    if (operation == "+") {
        if (lastNumber == "") {
            lastNumber = currentNumber;
            currentNumber = "0";
        } else {
            result = add(lastNumber, currentNumber);
            lastNumber = result;
            currentNumber = "0";
        }
    } else if (operation == "−") {
        if (lastNumber == "") {
            lastNumber = currentNumber;
            currentNumber = "0";
        } else {
            result = sub(lastNumber, currentNumber);
            lastNumber = result;
            currentNumber = "0";
        }
    } else if (operation == "*") {
        if (lastNumber == "") {
            lastNumber = currentNumber;
            currentNumber = "0";
        } else {
            result = mul(lastNumber, currentNumber);
            lastNumber = result;
            currentNumber = "0";
        }
    } else if (operation == "/") {
        if (lastNumber == "") {
            lastNumber = currentNumber;
            currentNumber = "0";
        } else {
            result = div(lastNumber, currentNumber);
            lastNumber = result;
            currentNumber = "0";
        }
    }

    console.log(result);

    operation = "";
}

const addEvent = function(e) {
    if (operation != "") {
        if (operation != "*" || operation != "/") {
            prevOperation();
            operation = e.target.textContent;
            print(currentNumber);
            return;
        }
    }
    if (lastNumber == "" || lastNumber == "0" || currentNumber == "0") {
        lastNumber = currentNumber;
        currentNumber = "0";
        operation = e.target.textContent;
        print(currentNumber);
    } else {
        result = add(lastNumber, currentNumber);
        lastNumber = result;
        currentNumber = "0";
        operation = e.target.textContent;
        print(currentNumber);
    }
}

const subEvent = function(e) {
    if (operation != "") {
        if (operation != "*" || operation != "/") {
            prevOperation();
            operation = e.target.textContent;
            print(currentNumber);
            return;
        }
    }
    if (lastNumber == "" || lastNumber == "0" || currentNumber == "0") {
        lastNumber = currentNumber;
        currentNumber = "0";
        operation = e.target.textContent;
        print(currentNumber);
    } else {
        result = sub(lastNumber, currentNumber);
        lastNumber = result;
        currentNumber = "0";
        operation = e.target.textContent;
        print(currentNumber);
    }
}

const mulEvent = function(e) {
    if (operation != "") {
        prevOperation();
        if (operation != "*") {
            operation = "*";
            print(currentNumber);
            return;
        }
    }
    if (lastNumber == "") {
        lastNumber = currentNumber;
        currentNumber = "0";
        operation = "*";
        print(currentNumber);
    } else {
        result = mul(lastNumber, currentNumber);
        lastNumber = result;
        currentNumber = "0";
        operation = "*";
        print(currentNumber);
    }
}

const divEvent = function(e) {
    if (operation != "") {
        prevOperation();
        if (operation != "/") {
            operation = "/";
            print(currentNumber);
            return;
        }
    }
    if (lastNumber == "") {
        lastNumber = currentNumber;
        currentNumber = "0";
        operation = "/";
        print(currentNumber);
    } else {
        result = div(lastNumber, currentNumber);
        lastNumber = result;
        currentNumber = "0";
        operation = "/";
        print(currentNumber);
    }
}

ui.zero.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.one.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.two.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.three.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.four.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.five.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.six.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.seven.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.eight.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.nine.addEventListener('click', function(e) {
    print(e.target.textContent);
});

ui.dot.addEventListener('click', function(e) {
    operation = e.target.textContent;
});

ui.add.addEventListener('click', addEvent);

ui.sub.addEventListener('click', subEvent);

ui.mul.addEventListener('click', mulEvent);

ui.div.addEventListener('click', divEvent);

ui.equal.addEventListener('click', function(e) {
    prevOperation();
    clean = true;
    ui.screen.textContent = result;
});

ui.percent.addEventListener('click', function(e) {
    if (operation == "*") {
        result = percent();
        operation = "";
        lastNumber = "";
        currentNumber = result;
        ui.screen.textContent = currentNumber;
    }
});

ui.clear.addEventListener('click', init);

ui.backspace.addEventListener('click', function(e) {
    if (currentNumber.length == 1) {
        currentNumber = "0";
        print(currentNumber);
    } else {
        currentNumber = currentNumber.substr(0, currentNumber.length - 1);
        ui.screen.textContent = `${lastNumber} ${operation} ${currentNumber}`.trim();
    }
})

window.onload = function() {
    init();
}