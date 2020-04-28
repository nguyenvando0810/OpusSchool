$(document).ready(function () {
  let inputStudent = document.getElementById("student");

  if (document.getElementById('id1').checked) {
    inputStudent.classList.add("disable-number");
    document.getElementById("numberStudent").value = 1;
  }

  $('input[type=radio]').change(function () {
    if (document.getElementById('id1').checked) {
      inputStudent.classList.add("disable-number");
      document.getElementById("numberStudent").value = 1;

    } else if (document.getElementById('id2').checked) {
      inputStudent.classList.remove("disable-number");
    }
  })
})