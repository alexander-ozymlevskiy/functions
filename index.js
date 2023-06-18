// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = ["one", 2, 12, 4, "gray", "pink", 6];

function meanArithmetic(arr) {
  const num = arr.filter((elem) => typeof elem == "number");
  const sumOfNumber = num.reduce((sum, elem) => sum + elem);
  const result = sumOfNumber / num.length;
  return result;
}

console.log(meanArithmetic(arr));

// Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak.
// У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.
// Обидва числа і знак виходять від користувача.

function calc() {
  const x = Number(prompt("Введіть перше число:"));
  const znak = prompt("Введіть знак на вибір ( +, -, *, /, %, ^) :");
  const y = Number(prompt("Введіть друге число:"));

  let result;

  switch (znak) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    case "%":
      result = x % y;
      break;
    case "^":
      result = x ** y;
      break;
  }

  alert("Результат: " + result);
}

calc();

// Написати функцію заповнення даними користувача двомірного масиву.
// Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function userInfo() {
  const numOfArr = Number(prompt("Введіть кількисть масивів:"));
  const arrays = Array.from(Array(numOfArr), (_, index) => {
    const arrLength = parseInt(prompt(`Введіть довжину ${index + 1}-ого масиву:`));
    return [...Array(arrLength)].map((_, index) => prompt(`Введіть ${index + 1}-ий елемент масиву:`));
  });
  return arrays;
}

alert("Усі елементи масивів:" + userInfo());

// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor".
// Вихідний рядок та символи для видалення задає користувач.

function removeSymbols() {
  const enterString = prompt("Введіть речення:");
  const enterSymbols = prompt("Введіть символи, які бажаєте видалити:");
  const resultSymbols = enterString.replace(
    new RegExp(`[${enterSymbols}]`, "g"),
    ""
  );
  alert(resultSymbols);
}

removeSymbols();
