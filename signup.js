console.log("login");


let login = document.getElementById('name');
let userName = document.getElementById('userName');
let password = document.getElementById('password');

let users = [];

function loginFun(event){
    console.log(login.value);
    console.log(userName.value);
    console.log(password.value);

    obj = {
        name : login.value,

        username : userName.value,
        password: password.value,

    }
   
    users.push(obj);
    
   localStorage.setItem("users",JSON.stringify(users));

   login.value = "";
   userName.value = "";
   password.value = "";
    // let json = JSON.parse(names);
    // console.log(json);
    // event.preventDefault();

    url = 'http://localhost:8080/login/signup';

    params = {
        method : 'POST',

        headers : {
            'content-Type' : 'application/json'
        },

        body : JSON.stringify(obj)
    }
    fetch(url, params).then((response)=> {response.json();
    console.log(response);
    });

    event.preventDefault();
}