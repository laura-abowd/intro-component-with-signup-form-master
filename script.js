const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email')
const password = document.getElementById('password');


form.addEventListener('submit',e => {
  e.preventDefault();

  validation();
});

function validation() {
  const fname_value = fname.value;
  const lname_value = lname.value;
  const email_value = email.value;
  const password_value = password.value;

  if(fname_value === "" || fname_value == null) {
    errorMessageFor(fname, 'First name cannot be empty');
     document.getElementById('fname').style.borderColor = "hsl(0, 100%, 74%)";
      // fname_value.parentElement.classList.add('error');
     console.log(fname_value.parentElement)

  } else {
    successMessageFor(fname);
     document.getElementById("fname_small").style.visibility = "hidden"
    // return true;
  }

  if(lname_value === "" || lname_value == null) {
    errorMessageFor(lname, "Last Name cannot be empty");
     document.getElementById('lname').style.borderColor = "hsl(0, 100%, 74%)";

  } else {
    successMessageFor(lname);
    document.getElementById("lname_small").style.visibility = "hidden"
  }

  if(email_value === "" || email_value == null) {
    errorMessageFor(email, "Looks like this is not an email");
     document.getElementById('email').style.borderColor = "hsl(0, 100%, 74%)";


  } else {
    successMessageFor(email);
  }

  if(password_value === "" || password_value == null) {
    errorMessageFor(password, "Password cannot be empty");
    document.getElementById('password').style.borderColor = "hsl(0, 100%, 74%)";
    password_value.parentElement.classList.add('error');
  } else {
    successMessageFor(password);
  }
}

function errorMessageFor(input, message) {
  console.log(message);
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  formControl.className = 'form-control error';
  small.innerText = message;
}

function successMessageFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}
