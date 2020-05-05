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

  let inputStudent2 = document.getElementById("student2");

  if (document.getElementById('id3').checked) {
    inputStudent2.classList.add("disable-number");
    document.getElementById("numberStudent").value = 1;
  }

  $('input[type=radio]').change(function () {
    if (document.getElementById('id3').checked) {
      inputStudent2.classList.add("disable-number");
      document.getElementById("numberStudent").value = 1;

    } else if (document.getElementById('id4').checked) {
      inputStudent2.classList.remove("disable-number");
    }
  })
})