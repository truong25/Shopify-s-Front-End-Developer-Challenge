function verifyEmail() {
var status = false;
  var emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (document.form.emailAddress.value.search(emailRegEx) == -1) {
    document.getElementById("invalid_Email").style.color = '#C23628';
  } else {
    document.getElementById("invalid_Email").style.color = '#000639';
	insertValues();
  }
}

function insertValues(){
	var email = document.form.emailAddress.value;
	var interest = document.form.interest.value;
	 console.log(email + " is interested in: " + interest);
}


