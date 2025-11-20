// confirm("are you sure");
// prompt("enter number");
// DOM Event handling

document.getElementById("button").onclick = () => {
  alert("submiting");
  let data1 = document.querySelector("#text1").value;

  let data2 = document.querySelector("#text2").value;

  let data3 = document.querySelector("#text3").value;

  let data4 = document.querySelector("#text4").value;

  let data5 = document.querySelector("#text5").value;

  let data6 = document.querySelector("#text6").value;

  let data7 = document.querySelector("#text7").value;
  console.log(data1, data2, data3, data4, data5, data6, data7);

  let pincodereges = /^[1-9][0-9]{5}$/;
  let answerpincode = pincodereges.test(data4);
  // console.log(answerpincode);

  let pancardreges = /^([a-zA-Z]{5})([0-9]{4})([a-zA-Z])$/;
  let answerpancard = pancardreges.test(data3);
  // console.log(answerpancard);

  let mobilereges = /^([6-9])([0-9]{9})$/;
  let answermobilereges = mobilereges.test(data2);
  // console.log(answermobilereges);

  let namereges = /^[a-zA-Z]([a-zA-Z ]+)?[A-Za-z]$/;
  let answernamereges = namereges.test(data1);
  // console.log(answernamereges);

  let emailreges = /^([A-z0-9\._]+)@([A-z0-9\-]+)\.([A-z]{2,})(\.[A-z]{2,})?$/;

  let answeremailreges = emailreges.test(data5);
  //   console.log(answeremailreges);

  let passwordreges =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[@#\-\.\$\^]).{4,8}$/;

  let answerpasswordreges = passwordreges.test(data5);
  //   console.log(answerpasswordreges);

  let message = "";
  if (!answernamereges) {
    message = "invalid name";
  } else if (!answermobilereges) {
    message = "invalid mobile number";
  } else if (!answerpancard) {
    message = "invalid pancard";
  } else if (!answerpincode) {
    message = "invalid pincode";
  } else if (!answeremailreges) {
    message = "invalid email";
  } else if (!answerpasswordreges) {
    message = "invalid password";
  } else {
    message = "registration successfuly completed";
  }
  document.querySelector("#errormsg").innerHTML = message;

  // escape character "" using\
  console.log('hello "manisha"');
};
