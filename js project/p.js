
const fileInput = document.getElementById("profile");
const previewImg = document.getElementById("preview");
if (fileInput && previewImg) {
  fileInput.addEventListener("change", function () {
    const file = fileInput.files[0];
    if (file) {
      previewImg.src = URL.createObjectURL(file);
      previewImg.style.display = "block";
    } else {
      previewImg.src = "";
      previewImg.style.display = "none";
    }
  });
}


let tableData = JSON.parse(localStorage.getItem("tableData")) || [];

function renderTable() {
  const tbody = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  tableData.forEach((row, idx) => {
    const tr = document.createElement("tr");
    
    tr.appendChild(createCell(row.name));
    tr.appendChild(createCell(row.lastName));
    tr.appendChild(createCell(row.mobile));
    tr.appendChild(createCell(row.email));
    tr.appendChild(createCell(row.country));
    tr.appendChild(createCell(row.state));
    tr.appendChild(createCell(row.city));
    tr.appendChild(createCell(row.zip));
    tr.appendChild(createCell(row.address));
   
    tr.appendChild(createActionButton("Edit", "edit", idx));
    tr.appendChild(createActionButton("Save", "save", idx));
    tr.appendChild(createActionButton("Delete", "delete", idx));
    tbody.appendChild(tr);
  });
}
function createCell(text) {
  const td = document.createElement("td");
  td.innerText = text;
  return td;
}
function createActionButton(text, type, idx) {
  const btn = document.createElement("button");
  btn.className = `table-action-btn ${type}`;
  btn.innerText = text;

  btn.onclick = function () {
    if (type === "edit") handleEdit(idx);
    else if (type === "save") handleSave(idx);
    else handleDelete(idx);
  };
  return btn;
}



function handleEdit(idx) {
  const tbody = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  const tr = tbody.rows[idx];

  for (let i = 0; i < 9; i++) {
    const val = tr.cells[i].innerText;
    tr.cells[
      i
    ].innerHTML = `<input type="text" value="${val}" style="width:95%;">`;
  }
}


function handleSave(idx) {
  const tbody = document
    .getElementById("dataTable")
    .getElementsByTagName("tbody")[0];
  const tr = tbody.rows[idx];

  tableData[idx].name = tr.cells[0].querySelector("input").value;
  tableData[idx].lastName = tr.cells[1].querySelector("input").value;
  tableData[idx].mobile = tr.cells[2].querySelector("input").value;
  tableData[idx].email = tr.cells[3].querySelector("input").value;
  tableData[idx].country = tr.cells[4].querySelector("input").value;
  tableData[idx].state = tr.cells[5].querySelector("input").value;
  tableData[idx].city = tr.cells[6].querySelector("input").value;
  tableData[idx].zip = tr.cells[7].querySelector("input").value;
  tableData[idx].address = tr.cells[8].querySelector("input").value;

  localStorage.setItem("tableData", JSON.stringify(tableData));
  renderTable();
   alert("your data is now in safe hands congrats!" );
}


function handleDelete(idx) {
  tableData.splice(idx, 1);
  localStorage.setItem("tableData", JSON.stringify(tableData));
  renderTable();
}

// FORM VALIDATION
function validateForm(e) {
  e.preventDefault();
  let valid = true;

  const name = document.getElementById("name");
  const lastName = document.getElementById("lastName");
  const mobile = document.getElementById("mobileNumber");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const country = document.getElementById("country");
  const state = document.getElementById("state");
  const city = document.getElementById("city");
  const zip = document.getElementById("zipCode");
  const address = document.getElementById("address");

  const nameError = document.getElementById("nameError");
  const lastNameError = document.getElementById("lastNameError");
  const mobileError = document.getElementById("mobileNumberError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const confirmPasswordError = document.getElementById("confirmPasswordError");
  const countryError = document.getElementById("countryError");
  const stateError = document.getElementById("stateError");
  const cityError = document.getElementById("cityError");
  const zipError = document.getElementById("zipCodeError");
  const addressError = document.getElementById("addressError");


  if (!name.value.trim()) {
    nameError.textContent = "Name is required";
    valid = false;
  } else {
    nameError.textContent = "";
  }
  if (!lastName.value.trim()) {
    lastNameError.textContent = "Last Name is required";
    valid = false;
  } else {
    lastNameError.textContent = "";
  }
  if (!mobile.value.trim()) {
    mobileError.textContent = "Mobile number is required";
    valid = false;
  } else if (!/^[6-9][0-9]{9}$/.test(mobile.value.trim())) {
    mobileError.textContent = "Mobile number must be at least 10 digits";
    valid = false;
  } else {
    mobileError.textContent = "";
  }
  if (!email.value.trim()) {
    emailError.textContent = "Email is required";
    valid = false;
  } else if (!/^\S+@\S+\.\S+$/.test(email.value.trim())) {
    emailError.textContent = "Enter valid email";
    valid = false;
  } else if (email.value.length > 40) {
    emailError.textContent = "Email too long!";
    valid = false;
  } else {
    emailError.textContent = "";
  }

  const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!password.value.trim()) {
    passwordError.textContent = "Password is required";
    valid = false;
  } else if (!strongPasswordRegex.test(password.value)) {
    passwordError.textContent =
      "Min 8 chars, uppercase, lowercase, number, special char";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (!confirmPassword.value.trim()) {
    confirmPasswordError.textContent = "Confirm password required";
    valid = false;
  } else if (password.value !== confirmPassword.value) {
    confirmPasswordError.textContent = "Passwords do not match";
    valid = false;
  } else {
    confirmPasswordError.textContent = "";
  }

  if (!country.value.trim()) {
    countryError.textContent = "Country is required";
    valid = false;
  } else {
    countryError.textContent = "";
  }
  if (!state.value.trim()) {
    stateError.textContent = "State is required";
    valid = false;
  } else {
    stateError.textContent = "";
  }
  if (!city.value.trim()) {
    cityError.textContent = "City is required";
    valid = false;
  } else {
    cityError.textContent = "";
  }
  if (!zip.value.trim()) {
    zipError.textContent = "Zip code is required";
    valid = false;
  } else if (zip.value.trim().length < 4) {
    zipError.textContent = "Zip code must be at least 4 digits";
    valid = false;
  } else {
    zipError.textContent = "";
  }
  if (!address.value.trim()) {
    addressError.textContent = "Address is required";
    valid = false;
  } else {
    addressError.textContent = "";
  }

  if (!valid) {
    alert("kya kar rha hai yaar shy se fill kar ");
    return false;
  }


  tableData.push({
    name: name.value.trim(),
    lastName: lastName.value.trim(),
    mobile: mobile.value.trim(),
    email: email.value.trim(),
    country: country.value.trim(),
    state: state.value.trim(),
    city: city.value.trim(),
    zip: zip.value.trim(),
    address: address.value.trim(),
  });
  const gender = document.querySelector('input[name="gender"]:checked');
const genderError = document.getElementById("genderError");
if (!gender) {
  genderError.textContent = "Gender is required";
  valid = false;
} else {
  genderError.textContent = "";
}


  renderTable();
  form.reset();
  if (previewImg) {
    previewImg.src = "";
    previewImg.style.display = "none";
  }
  return false;

}

// DOM READY
document.addEventListener("DOMContentLoaded", function () {
  renderTable();
  document.getElementById("form").onsubmit = validateForm;
});


 if (!valid) {
    alert("Please fix the errors in the form");
    return false;
  }


  tableData.push({
    name: name.value.trim(),
    lastName: lastName.value.trim(),
    mobile: mobile.value.trim(),
    email: email.value.trim(),
    country: country.value.trim(),
    state: state.value.trim(),
    city: city.value.trim(),
    zip: zip.value.trim(),
    address: address.value.trim()
  });

  localStorage.setItem("tableData", JSON.stringify(tableData));

  
    
   