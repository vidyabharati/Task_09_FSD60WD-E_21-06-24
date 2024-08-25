function submit() {
  var fname = document.getElementById("fname").value;
  var lname = document.getElementById("lname").value;
  var address = document.getElementById("address").value;
  var pincode = document.getElementById("pincode").value;
  var gender = "";
  if (document.getElementById("male").checked) {
    gender = "male";
  } else if (document.getElementById("female").checked) {
    gender = "female";
  } else;
  var sel = document.getElementById("food");
  var listLength = sel.options.length;
  var food = [];
  for (var i = 0; i < listLength; i++) {
    if (sel.options[i].selected) {
      food.push(sel.options[i].value);
    }
  }
  var state = document.getElementById("state").value;
  var country = document.getElementById("country").value;
  if (food.length < 2) {
    alert("Must choose atleast 2 food");
  } else {
    var table = document.getElementById("myTableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML = fname;
    row.insertCell(1).innerHTML = lname;
    row.insertCell(2).innerHTML = address;
    row.insertCell(3).innerHTML = pincode;
    row.insertCell(4).innerHTML = gender;
    row.insertCell(5).innerHTML = food.toString();
    row.insertCell(6).innerHTML = state;
    row.insertCell(7).innerHTML = country;
    document.getElementById("fname").value = "";
    document.getElementById("lname").value = "";
    document.getElementById("address").value = "";
    document.getElementById("pincode").value = "";
    if (gender) {
      document.getElementById(gender).checked = false;
    }
    for (var i = 0; i < food.length; i++) {
      document.getElementById(food[i]).selected = false;
    }
    document.getElementById("state").value = "";
    document.getElementById("country").value = "";
  }
}
