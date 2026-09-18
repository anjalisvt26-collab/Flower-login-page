let btn = document.querySelector(".btn");
let user = document.querySelector("#user");
let pass = document.querySelector("#pass");

btn.addEventListener("click", function(event){
    event.preventDefault();

    let username = user.value;
    let password = pass.value;

    if(username == "abcd" && password == "1234"){
        alert("submited");
      window.location.href = `/home?username=${username}&password=${password}`;
    }
    else{
        alert("Wrong user and password");
    }
});