class Kalculator {
    amount = 0;
    last = 0;
    input = "0";
    operation = "";
    /**
     * @TODO:
     * Add history support
     */
    history = [];

    ui;

    constructor(holder) {
        this.ui = new UI(this);

        this.ui.screen.textContent = this.input;
    }

    clear() {
        var self = this;
        self.history.push(
            {
                amount: self.amount,
                input: self.input,
                lastOperation: self.operation
            }
        );
        self.last = 0;
        self.input = "0";
        self.ui.screen.textContent = "0";
        self.ui.current.textContent = "";
    }

    addToInput(digit) {
        this.input != "0" ? this.input += digit : this.input = digit;
        if (this.last == 0 && this.amount == 0) {
            this.ui.screen.textContent = this.input;
            this.ui.current.textContent = `${this.operation} ${this.input}`;
        }
    }

    operate(op) {
        var self = this;
        if (self.input == "0") {
            return;
        }
        if (self.operation != op) {
            self.operate(self.operation);
        }
        switch(op) {
            case "+":
                if (self.last == 0) {
                    self.last = parseFloat(self.input);
                } else {
                    self.last = self.add(self.last, parseFloat(self.input));
                }
                break;
            case "-":
                if (self.last == 0) {
                    self.last = parseFloat(self.input);
                } else {
                    self.last = self.sub(self.last, parseFloat(self.input));
                }
                break;
            case "*":
                if (self.last == 0) {
                    self.last = parseFloat(self.input);
                } else {
                    self.last = self.mul(self.last, parseFloat(self.input));
                }
                break;
            case "/":
                if (self.last == 0) {
                    self.last = parseFloat(self.input);
                } else {
                    self.last = self.div(self.last, parseFloat(self.input));
                }
                break;
            default:
                if (self.last == 0) {
                    self.last = parseFloat(self.input);
                } else {
                    if (self.operation == "") {
                        return;
                    }
                    self.operate(self.operation);
                }
                self.ui.current.textContent = "";
                self.input = "0";
                return;
        }
        self.ui.screen.textContent = self.last;
        self.ui.current.textContent = self.operation + " 0";
        self.input = "0";
    }

    add(n1, n2) {
        return parseFloat(n1) + parseFloat(n2);
    }

    sub(n1, n2) {
        return parseFloat(n1) - parseFloat(n2);
    }

    mul(n1, n2) {
        return parseFloat(n1) * parseFloat(n2);
    }

    div(n1, n2) {
        return parseFloat(n1) / parseFloat(n2);
    }
}

const app = new Kalculator();