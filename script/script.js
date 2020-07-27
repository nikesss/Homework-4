var arr1 = [1, 3, 4, "asd", "hello", "welcome", true, false];
var arr2 = [5, 1, 45, "bye", "print", "back", false, false];
var arr3 = [111, 22, 14, "qwerty", "next", "gogo", true, true];
function showAllValues() {
  alert(arr1);
}
function showAllValues2() {
  return alert(arr2);
}
var foo = function () {
  return arr3;
};
function showAllValues3() {
  alert(foo());
}
