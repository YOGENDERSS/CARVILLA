let i;


let buto = document.getElementById('btn');

var getname; // = document.getElementById('userName');
var psw;
function loginFun(event) {
    console.log("Started getData")
    url = 'prashant.json';
    fetch(url).then((response) => {
        console.log("Inside first then")
        return response.json();
    }).then((data) => {
        console.log("Inside second then")
        console.log(data);

        for (i = 0; i < data.length; i++) {
            
            getname = document.getElementById('userName');
            getpass = document.getElementById('password');
            // console.log(data[i].name);
            if (data[i].name == getname.value && data[i].pass == getpass.value) {
                // console.log("Valid");
                
                location.href = 'beforehomepage.html';
            }

        
        }

    })
    
    event.preventDefault();
}