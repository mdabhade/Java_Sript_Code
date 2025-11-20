document.getElementById("btn").addEventListener("click", () => {
  let data1 = document.getElementById("city").value;
  console.log(data1);
  if (data1 != "") {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState, xhr.status);
      if (xhr.readyState == 4 && this.status == 200) {
        let result = xhr.responseText;
        let answer = JSON.parse(result);
          console.log(answer);
          document.querySelector("#msg").innerHTML = answer.main.temp;
      }
    };
    xhr.open(
      "get",
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${data1}&appid=85977cd039224d5f43977fb86e326661`
    );
    xhr.send();
  }
});
