function press(num) {
  var display = document.getElementById("input");

  if (num === "=") {
    try {
      var result = eval(display.value);
      display.value = result;
    } catch (error) {
      display.value = "Error";
    }
  } else if (num === "c") {
    display.value = "";
  } else if (num === "del") {
    display.value = display.value.slice(0, -1);
  } else {
    display.value += num;
  }
}
