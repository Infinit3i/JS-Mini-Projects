<template>
  <div class="calculator">
    <div class="display header">{{currentValue || '0'}}</div>
    <div @click="clear" class="btn">C</div>
    <div @click="sign" class="btn">+/-</div>
    <div @click="percent" class="btn">%</div>
    <div @click="division" class="btn operator">/</div>
    <div @click="appendNumber('7')" class="btn">7</div>
    <div @click="appendNumber('8')" class="btn">8</div>
    <div @click="appendNumber('9')" class="btn">9</div>
    <div @click="multiplication" class="btn operator">X</div>
    <div @click="appendNumber('4')" class="btn">4</div>
    <div @click="appendNumber('5')" class="btn">5</div>
    <div @click="appendNumber('6')" class="btn">6</div>
    <div @click="subtraction" class="btn operator">-</div>
    <div @click="appendNumber('1')" class="btn">1</div>
    <div @click="appendNumber('2')" class="btn">2</div>
    <div @click="appendNumber('3')" class="btn">3</div>
    <div @click="addition" class="btn operator">+</div>
    <div @click="appendNumber('0')" class="btn zero">0</div>
    <div @click="decimal" class="btn">.</div>
    <div @click="equal" class="btn operator">=</div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      currentValue: '1',
      previous: null,
      operator: null,
      operatorClicked: false,
    }
  },
  methods: {
    appendNumber(number) {
      if (this.operatorClicked) {
        this.currentValue = "";
        this.operatorClicked = false;
      }
      this.currentValue = `${this.currentValue}${number}`;
    },
    clear() {
      this.currentValue = '';
    },
    sign() {
      this.currentValue = this.currentValue * -1;
    },
    percent() {
      this.currentValue = this.currentValue / 100;
    },
    setPrevious() {
      this.previous = this.currentValue;
      this.operatorClicked = true;
    },
    division() {
      this.operator = (a,b) => a / b;
      this.setPrevious();
    },
    multiplication() {
      this.operator = (a,b) => a * b;
      this.setPrevious();
    },
    subtraction() {
      this.operator = (a,b) => a - b;
      this.setPrevious();
    },
    addition() {
      this.operator = (a,b) => a + b;
      this.setPrevious();
    },
    decimal() {
      if (this.currentValue.indexOf('.') === -1) {
        this.appendNumber('.');
      }
    },
    equal() {
      this.currentValue = `${this.operator(parseFloat(this.currentValue), parseFloat(this.previous))}`;
      this.previous = null;
    },

  }
}
</script>

<style scoped>
.calculator {
  margin: 0 auto;
  padding: 200px;
  width: 400px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-auto-rows: minmax(50px, auto);
  font-size: 40px;
}

.display {
  grid-column: 1/5;
  text-align: right;
  padding-right: 20px;
  background-color: #999;
  color: white;
  font-size: 60px;
  overflow: auto;
}

.zero {
  grid-column: 1/3;
}

.btn {
  background-color: #f2f2f2;
  border: 1px solid #999;
}

.operator {
  background-color: orange;
  color: white;
}
</style>
