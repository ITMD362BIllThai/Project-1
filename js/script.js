function init()
{
  var fname = document.getElementById("").value;
  var lname = document.forms["form_body"]["lastname"].value;
  var email = document.forms["form_body"]["email"].value;
  var phone = document.forms["form_body"]["phonefield"].value;
  
  if (fname.value == "")
  {
    alert("Please enter your first name.");
	fname.focus();
	return false;
  }
  
  if (lname.value == "")
  {
    alert("Please enter your last name.");
	lname.focus();
	return false;
  }
  
  if (email.value == "")
  {
    alert("Please enter your email address.");
	email.focus();
	return false;
  }
  
  if (phone.value == "")
  {
    alert("Please enter your phone number.");
	phone.focus();
	return false;
  }
  
  else
  {
    alert("There is only the Emperor, and he is our Shield and Protector.");
	return false;
  }
}