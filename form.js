var FirstName= document.querySelector(".firstName")
var labelFirstName= document.querySelector(".labelFirstName")

var LastName= document.querySelector(".lastName")
var labelLastName= document.querySelector(".labelLastName")


var phoneNumber= document.querySelector(".number")
var labelPhoneNumber= document.querySelector(".labelNumber")

var email= document.querySelector(".email")
var labelEmail= document.querySelector(".labelEmail")

var password= document.querySelector(".password")
var labelpassword= document.querySelector(".labelpassword")

var confirmPassword= document.querySelector(".confirmPassword")
var labelConfirmPassword= document.querySelector(".labelConfirmPassword")

var birthdate= document.querySelector(".birthdate")
var labelBirhtdate= document.querySelector(".labelBirhtdate")

var Male= document.querySelector(".Male")
var Female= document.querySelector(".Female")
var labelGender= document.querySelector(".labelGender")

var myPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

var myemail= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// console.log(FirstName.value.length);

// Female.addEventListener("click",(e)=>{
// console.log(e);
// })

function desplay(){
    if(FirstName.value==="" ||!isNaN(FirstName.value)||FirstName.value.length<3 || FirstName.value.startsWith(FirstName.value.toLowerCase())===true|| FirstName.value.indexOf(" ")!==-1 ){

        labelFirstName.innerHTML="wrong first name";
        labelFirstName.classList.add("labelcolor")

        return false;
    }else if(LastName.value==="" || !isNaN(LastName.value)||LastName.value.length<3 || LastName.value.startsWith(LastName.value.toLowerCase())===true||LastName.value.includes(" ")){
        labelFirstName.innerHTML="First Name:";
        labelFirstName.classList.remove("labelcolor")
        labelLastName.classList.add("labelcolor")
        labelLastName.innerHTML="wrong last name";

        return false;
    }else if(email.value==="" || !myemail.test(email.value)){
        labelLastName.innerHTML="Last Name:";
        labelEmail.classList.add("labelcolor")
        labelLastName.classList.remove("labelcolor")
        labelEmail.innerHTML="wrong e-mail";

        return false;
    }else if(phoneNumber.value==="" || isNaN(phoneNumber.value)
        ||phoneNumber.value.includes(" ")){
        labelEmail.innerHTML="E-mail:";
        labelPhoneNumber.classList.add("labelcolor")
        labelEmail.classList.remove("labelcolor")
        labelPhoneNumber.innerHTML="wrong phone number";

        return false;
    }else if(password.value==="" || password.value.includes(" ")){
        labelPhoneNumber.innerHTML="Phone Number:";
        labelpassword.classList.add("labelcolor")
        labelPhoneNumber.classList.remove("labelcolor")
        labelpassword.innerHTML="wrong password";

        return false;
    }else if(confirmPassword.value==="" ||confirmPassword.value!=password.value 
        ||confirmPassword.value.includes(" ")){
        labelpassword.innerHTML=" Password:";
        labelConfirmPassword.classList.add("labelcolor")
        labelpassword.classList.remove("labelcolor")
        labelConfirmPassword.innerHTML="wrong confirm password";

        return false;
    }else if(birthdate.value===""){
        labelConfirmPassword.innerHTML="Confirm Password:";
        labelBirhtdate.classList.add("labelcolor")
        labelConfirmPassword.classList.remove("labelcolor")
        labelBirhtdate.innerHTML="select birthdate ";

        return false;
    }else if(Female.Checked!==true && Male.Checked!==true){
        labelBirhtdate.innerHTML=" Birthdate:";
        labelGender.classList.add("labelcolor")
        labelBirhtdate.classList.remove("labelcolor")
        labelGender.innerHTML="choose type ";

        return false;
    }else{
        return true;
    } 
};



// let myName ="hes195ham";
// console.log(isNaN(myName))

// let arr = [1,2,3]
// for (var i =1; i < arr. length-1; i++) {
// 	Console.log(arr[i])
// }
// function changeColor() {
// Document.querySelector(`body`).style.background-color = "black" ;
// }
// var x = "5"
// ++x  ;
// console.log(x)