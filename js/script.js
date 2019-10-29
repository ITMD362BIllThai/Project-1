function VALIDATION()
{
  var fname = document.forms["form_body"]["firstname"];
  var lname = document.forms["form_body"]["lastname"];
  var email = document.forms["form_body"]["email"];
  var phone = document.forms["form_body"]["phonefield"];
  
  if (fname.value == "")
  {
    window.alert("Please enter your first name.");
	fname.focus();
	return false;
  }
  
  if (lname.value == "")
  {
    window.alert("Please enter your last name.");
	lname.focus();
	return false;
  }
  
  if (email.value == "")
  {
    window.alert("Please enter your email address.");
	email.focus();
	return false;
  }
  
  if (phone.value == "")
  {
    window.alert("Please enter your phone number.");
	phone.focus();
	return false;
  }
  
  else
  {
    alert("There is only the Emperor, and he is our Shield and Protector.");
	return false;
  }
}