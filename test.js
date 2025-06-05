function sum(num1, num2, callback) {
  const sumNum = num1 + num2;
  callback(sumNum);
};

function print(result) {
  console.log("Результат такой то " + result);
}

sum(2, 5, (result) => console.log(result * 2 + " А вот и результат"));
