var kalculator = new Vue({
  el: "#kalculator",
  data: function(){
    return {
      numbers: ["0"],
      operations: [],
      actualAmount: 0,
      current: 0,
      screen: "0",
      history: []
    }
  },
  methods: {
    clear(){
      this.screen = "0";
      this.numbers = ["0"];
    },
    add(){},
    substract(){},
    multiply(){},
    divide(){},
    digit(digit){
      let validDigits = ["0","1","2","3","4","5","6","7","8","9",".","+","-","*","/","%"];
      let validKey = false;

      for (let i = 0; i < validDigits.length; i++){
        if (digit == validDigits[i]){
          validKey = true;
          switch (digit) {
            case '0':
              if (this.numbers[this.current] == 0){
                return;
              }else{
                this.numbers[this.current] += digit;
                this.screen = this.numbers[this.current];
              }
              break;
            default:
              if (this.numbers[this.current] == "0"){
                if (digit == "."){
                  this.numbers[this.current] = "0" + digit;
                  this.screen = "0" + digit;
                }else{
                  this.numbers[this.current] = digit;
                  this.screen = digit;
                }
              }else{
                if (digit == "."){
                  this.numbers[this.current] = this.numbers[this.current] + digit;
                }
                this.numbers[this.current] += digit;
                this.screen = this.numbers[this.current];
              }
              break;
          }
          break;
        }
      }

      if (!validKey){
        console.warn('Invalid key');
      }

    },
    calculate(){},
    erase(){
      let newString = "";
      for (let i = 0; i < (this.screen.length - 1); i++){
        newString += this.screen[i];
      }

      this.screen = newString;
      this.numbers[this.current] = newString;

      if (this.screen == ""){
        this.screen = "0";
      }
    }
  }
});

document.addEventListener('keydown', (e)=>{
  if (e.key == 'Backspace'){
    kalculator.erase();
  }else if (e.key == 'Escape'){
    kalculator.clear();
  }else{
    kalculator.digit(e.key);
  }
});
