// console.log(document.getElementById("button"));
document.getElementById("button").onclick = function () {
  d = document;
  //   console.log(d.getElementById("text1"));
  //   console.log(d.getElementById("text2"));
  //     console.log(d.getElementById("text3"));
  let data1 = d.getElementById("text1").value;
  let data2 = d.getElementById("text2").value;
  let data3 = d.getElementById("text3").value;
  console.log(data1, data2, data3);
  if (data1 == "" || data2 == "" || data3 == "") {
    //    console.log( d.getElementById("errormsg"));
    d.getElementById("errormsg").innerHTML = "all val are required";
    d.getElementById("errormsg").className = "alert alert-danger";
    }
    
  else {
      //   console.log(isNaN(data1));
      if (isNaN(data1) || isNaN(data2) || isNaN(data3)) {
           d.getElementById("errormsg").innerHTML = "all val must be a number";
           d.getElementById("errormsg").className = "alert alert-danger";
      }
      else if (data1 > 100 || data1 < 0 || data2 > 100 || data2 < 0 || data3 > 100 || data3 < 0)  {
         
              d.getElementById("errormsg").innerHTML = "values must be between 0  and 100";
           d.getElementById("errormsg").className = "alert alert-danger";
          }
    

    else if (data1 < 35 || data2 < 35 || data3 < 35)  {
         
              d.getElementById("errormsg").innerHTML = "User failed";
           d.getElementById("errormsg").className = "alert alert-danger";
      }
      
      else if (data1 < 35 || data2 < 35 || data3 < 35)  {
         
              d.getElementById("errormsg").innerHTML = "User failed";
           d.getElementById("errormsg").className = "alert alert-danger";
      }
      else {
          let result = parseInt(data1) + parseInt(data2) + parseInt(data3);
          let percentage = (result / 300)*100;
          console.log(result, percentage);
          
          d.getElementById("errormsg").innerHTML = `total marks=${result} 
           percentage=${percentage}`;
          d.getElementById("errormsg").className = "alert alert-success";
          
          
      }
    }
    
    
      
    
};

// alert("hello");
