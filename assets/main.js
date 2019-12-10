//YASIN EHSAN

function validateForm() {
var x = document.getElementById("myInput").value;
if (x == "") {
  alert("Please select one of the inputs");
  return false;
}
else{
  var nextQuestion = document.getElementById("apply2");
  nextQuestion.scrollIntoView();
}
}
