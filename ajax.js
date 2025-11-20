document.getElementById("btn").addEventListener("click", () => {
  //alert("");
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    console.log(xhr.readyState, xhr.status);
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);
      console.log(typeof xhr.responseText);
      let ans = JSON.parse(xhr.responseText);

      console.log(ans);
      ans.forEach((element) => {
        console.log(element);
        let divtag = document.createElement("div");
        console.log(divtag);
        let imgtag = document.createElement("img");
        let ptag = document.createElement("p");
        let h2tag = document.createElement("h2");

        imgtag.src = element.image;
        h2tag.innerHTML = element.price;
        ptag.innerHTML = element.title;
          divtag.className = "col-xl-3";
          imgtag.className = "img-fluid";

        


        divtag.append(imgtag, h2tag, ptag);
        document.querySelector(".row").append(divtag);
      });
    }
  };
  console.log(xhr);
  xhr.open("get", "https://fakestoreapi.com/products");
  xhr.send();
});
