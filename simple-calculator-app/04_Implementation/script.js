function press(value) {
  if (value === '±') {
    let display = document.getElementById("display");
    if (display.value.startsWith('-')) {
      display.value = display.value.substring(1);
    } else {
      display.value = '-' + display.value;
    }
    return;
  }

  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    let expression = document.getElementById("display").value
      .replace('x', '*')
      .replace('÷', '/');

    let result = eval(expression);
    document.getElementById("display").value = result;
  } catch {
    alert("รูปแบบนิพจน์ไม่ถูกต้อง");
  }
}
