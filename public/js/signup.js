const password = document.getElementById("password");
const repassword = document.getElementById("repassword");
const name = document.getElementById("name");
const emailid = document.getElementById("emailid")
function validate(){
    passwordtext = password.value;
    repasswordtext = repassword.value;
    nametext = name.value;
    emailidtext = emailid.value;
    if(!nametext.match('^[a-zA-Z]{1,10}$')){
        alert("Enter a Valid Name");
        return false;
    }else if(!emailidtext.match('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$')){
        alert("invalid email please re enter email id");
        return false;
    }else if(passwordtext !== repasswordtext){
        alert("passsord not matching , enter again");
        return false;
    }
    return true;
}