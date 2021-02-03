
const togglePassword = document.querySelector('#togglepassword');
const password = document.querySelector('#password');
const name = document.querySelector('#name');

togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});
function clientvalidate(){
    let nametext = name.value;
    let passwordtext = password.value;
    alert(nametext+" "+passwordtext);
    if( passwordtext.match(/^[\w]+$/)){
        //alert("correct name and password format");
        return true;
    }else{
        alert("Check format of name and password");
        return false;
    }
}