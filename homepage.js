console.log("hey")
let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){

    let inputVal = search.value.toUpperCase();
    console.log('Input event fired!', inputVal);
    let noteCards = document.getElementsByClassName('card');
    Array.from(noteCards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("p")[0].innerText.toUpperCase();
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    })
})



function sort(event){
    var v , i ,j, temp;
    let price = document.getElementsByClassName('card-title');
    for(i =0 ; i<price.length ; i++){

        for(j=i+1 ; j < price.length ; j++){
            
            if(price[i].innerHTML > price[j].innerHTML){

                temp =  price[i].parentNode.innerHTML;
                price[i].parentNode.innerHTML = price[j].parentNode.innerHTML;
                price[j].parentNode.innerHTML = temp;

            } 
        }
    }
    // for(i=0 ; i<price.length ; i++){
        
    //         //   price[i].parentNode.innerHTML
    // }
    // v = price.getElementsByTagName('H5');

    // for(i=0 ; i<v.length ; i++){
    //     console.log(v[i].innerText);
    // }

    document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', event => {
          //handle click
          let p= item.parentNode.innerHTML;
          console.log(p)
      
          localStorage.setItem("car",p);
        })
      })
      
    event.preventDefault();
}


// ----------------------------------------------------------------------------------

// let booknow = document.getElementById('booknow');
// // let booknow = document.getElementsByClassName('btn');

// // let div= document.getElementsByClassName('card')[0];

// booknow.addEventListener('click',function(){

//     // event.preventDefault();
//     let p= booknow.parentNode.innerHTML;
//     console.log(p)

//     localStorage.setItem("car",p);
// //    console.log(div.getElementsByClassName('card-text')[0].innerText);


// })


document.querySelectorAll('.btn').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      let p= item.parentNode.innerHTML;
      console.log(p)
  
      localStorage.setItem("car",p);
    })
  })


////////////////////////////////////////////////////////////////////////////////////////////////////////


        // var message = document.querySelector('#message');

        var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
        var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList;

        var grammar = '#JSGF V1.0;'

        var recognition = new SpeechRecognition();
        var speechRecognitionList = new SpeechGrammarList();
        speechRecognitionList.addFromString(grammar, 1);
        recognition.grammars = speechRecognitionList;
        recognition.lang = 'en-US';
        recognition.interimResults = false;

        recognition.onresult = function(event) {
            var last = event.results.length - 1;
            var command = event.results[last][0].transcript;
            // message.textContent = 'Voice Input: ' + command + '.';
            console.log('Voice Input: ' + command + '.');

            // if(command.toUpperCase() === 'AUDI'){
                if(command.toUpperCase() === 'SORT CARS' || command.toUpperCase() === 'SHORT CARS' || command.toUpperCase() === 'HOT CARS' || command.toUpperCase() === 'FORD CARS' || command.toUpperCase() === 'SPORT CARS'){
                    sort(event);
                }
                else{

                    let search = document.getElementById('searchTxt');
                    // search.value = "audi";
                    search.value = command.toUpperCase();
                    
                    let inputVal = search.value.toUpperCase();
                    console.log('Input event fired!', inputVal);
                    let noteCards = document.getElementsByClassName('card');
                    Array.from(noteCards).forEach(function(element){
                        let cardTxt = element.getElementsByTagName("p")[0].innerText.toUpperCase();
                        if(cardTxt.includes(inputVal)){
                            element.style.display = "block";
                        }
                        else{
                            element.style.display = "none";
                        }
                        // console.log(cardTxt);
                    })
                }

                // }
            
            // else if (command.toLowerCase() === 'select tony'){
            //     document.querySelector('#chkTony').checked = true;
            // }
            // else if (command.toLowerCase() === 'select bruce'){
            //     document.querySelector('#chkBruce').checked = true;
            // }
            // else if (command.toLowerCase() === 'select nick'){
            //     document.querySelector('#chkNick').checked = true;
            // }   
        };

        recognition.onspeechend = function() {
            recognition.stop();
        };

        recognition.onerror = function(event) {
            // message.textContent = 'Error occurred in recognition: ' + event.error;
        }        

        document.querySelector('#btnGiveCommand').addEventListener('click', function(event){
            recognition.start();

            event.preventDefault();
        });


