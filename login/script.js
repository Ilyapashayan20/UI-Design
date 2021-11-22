function myFunction(){
    var x = document.getElementById('password')
    var z = document.getElementById('hide1')
    var y = document.getElementById('hide2')
    

    if(x.type === "password")
    {
        x.type = "text";
        y.style.display= "block"
        z.style.display= "none"
        y.style.margin = "8px 0px 0px 0px"
        z.style.margin = "6px 0px 0px 0px"
    }
    else{

        x.type = "password";
        y.style.display= "none"
        z.style.display= "block"
        y.style.margin = "7px 0px 0px 0px"
        z.style.margin = "5px 0px 0px 0px"

    }
}


const email = document.getElementById('email');
const password = document.getElementById('password');
// const login = document.querySelector(".link-1")
const box = document.querySelector('.input-box')
const box2 = document.querySelector('.input-box-2');
const error = document.getElementById('error')


// login.addEventListener("click", function (){
//   if(email.lenght < 5){
//       console.log('error');
//       box.className = "mystyle"



//   }
//   else{

//   }


// })


function btntest_onclick(){
    if (password.value == '1111' || email.value == "1111") {
        window.location.href = "https://www.youtube.com/";
    } else {
        box.className = "mystyle"
        box2.className = "mystyle"
        error.innerHTML = " &#x26A0;   Ադմին մուտք գործելու համար մուտքագրեք 1111"
    }
};