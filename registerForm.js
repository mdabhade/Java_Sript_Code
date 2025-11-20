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
  console.log(answerpincode);
};
