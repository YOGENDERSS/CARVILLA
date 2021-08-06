let pop = localStorage.getItem("car");

let div = document.getElementById('pop');

div.innerHTML=pop;

let nodes = div.childNodes;
console.log(nodes);
nodes[10].style.display="none";

localStorage.removeItem('car')

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const pin = document.getElementById('pin');
const cities = document.getElementById('cities');
const country = document.getElementById('countries');
const address = document.getElementById('address');

const card1 = document.getElementsByClassName('card-text')[0].innerHTML;
const card2 = document.getElementsByClassName('card-title')[0].innerHTML;
console.log(card1);
console.log(card2);

const cont = document.getElementById('cont');
const btn = document.getElementById('btn');
btn.addEventListener('click',function(){

    cont.style.display="none";

    window.print();
})
var my;
let validEmail = false;
let validPhone = false;
let validUser = false;
let validpin = false;
let validcountry = false;
let validcity = false;
$('#failure').hide();
$('#success').hide();

// console.log(name, email, phone);
name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([a-zA-Z]){1,11}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validUser = false;
        
    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^([0-9]){10}$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
        
    }
})

cities.addEventListener('blur',()=>{
    console.log("City Blurred");
    if(cities.value=="delhi" || cities.value=="shimla" || cities.value=="chandigarh" ){
        console.log("city selected");
        validcity = true;
    }
    else{
        // console.log("city select kr");
        validcity=false;
    }


})
pin.addEventListener('blur', ()=>{
    console.log("pin is blurred");
    // Validate phone here
    let regex = /^([0-5]){6}$/;
    let str = pin.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your pin is valid');
        pin.classList.remove('is-invalid');
        validpin = true;
    }
    else{
        console.log('Your pin is not valid');
        pin.classList.add('is-invalid');
        validpin = false;
        
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validEmail, validUser, validPhone);

    // const chk1 = document.getElementById('Eng').checked;
    // const chk2 = document.getElementById('nEng').checked;
    // if(chk1 == true && chk2 == true){
    //     my = "English and Non English"
    // }
    // else if(chk1 == true && chk2 == false){
    //     my = "English"
    // }
    // else if(chk1 == false && chk2 == true){
    //     my = "NON-English"
    // }
    // else{
    //     my = "Language not chosen";
    // }
    // Submit your form here
    if(validEmail && validUser && validPhone && validpin && validcity){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');

        let success = document.getElementById('success');
        const s = document.getElementById('append');
        let html = `
        NAME : ${name.value}<br>
        COUNTRY : ${country.value}<br>
        CITY : ${cities.value}<br>
        E-MAil : ${email.value}<br>
        ADDRESS : ${address.value}<br>
        PIN : ${pin.value}<br>
        Phone no. : ${phone.value}
        `
        // English : ${my}<br>
        
        
        s.innerHTML= html;
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();

        //  fetch API  (post request)
        let url = 'http://localhost:8080/booking';
        let data = {
            name : name.value,
            country : country.value,
            city : cities.value,
            mail : email.value,
            address : address.value,
            pin : pin.value,
            phone : phone.value,
            car : card1,
            price : card2
        }

                
        params = {
            method : 'POST',

            headers : new Headers({'content-type' : 'application/json'}),

            body : JSON.stringify(data)
        }

        fetch(url , params ).then((response)=>{
            return response.json();
        }).then((data)=>{
            console.log(data)
        })

        name.value="";
        email.value="";
        address.value="";
        pin.value="";
        phone.value="";

        // let cont = getElementById('cont');
        // cont.style.display = "none";
    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }

    
    
})