const SignUpButton = document.querySelector(".signButton")
const LoginButton = document.querySelector(".loginButton")

SignUpButton.addEventListener("click", ()=>{
    alert("Click Here To Go in Sign Up Page !");
    setTimeout(()=>{
        location.pathname="/Views/signUp.html"
    },0)
})

LoginButton.addEventListener("click", ()=>{
    alert("Click Here To Go in Login Page !");
    setTimeout(()=>{
        location.pathname="/Views/login.html"
    },0) 
})