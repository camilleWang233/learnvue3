<template>
  <h1>recall function</h1>
  <div id="theResult"></div>
  <div>{{ title }}</div>
  <div>{{ result }}</div>
</template>

<script>
export default {
  name: "Callback",

  setup() {
    const title = "???";
    const doMath = (num1, num2, callback) => {
      if (typeof callback === "function") {
        var result = callback(num1, num2);
        console.log(result);
        return "THE RESULT IS:" + result;
      }
    };
    const plus = (num1, num2) => {
      var calculation = num1 + num2;
      return calculation;
    };
    const reduce = (num1, num2) => {
      var calculation = num1 - num2;
      return calculation;
    };

    function testDemo(val, val2) {
      return val + val2;
    }

    document.addEventListener(
      "DOMContentLoaded",
      function() {
        doMath(3, 1, plus);
        doMath(2, 1, reduce);
        doMath(5, 3,testDemo);
      },
      false
    );
    return {
      
      title,
      doMath,
      plus,
      reduce,
      testDemo,
    };
  },
};
</script>
