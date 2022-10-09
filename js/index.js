var signinEmail = document.getElementById("signinEmail")
var signinPassword = document.getElementById("signinPassword")


if (localStorage.getItem('list') == null) {
    userList = []
} else {
    userList = JSON.parse(localStorage.getItem('list'))
}

//START SIGN IN
var signIn = document.getElementById("signIn")

signIn.addEventListener("click", function() {
        for (var i = 0; i < userList.length; i++) {
            if (userList[i].email.toLowerCase() == signinEmail.value.toLowerCase() && userList[i].password.toLowerCase() == signinPassword.value.toLowerCase()) {
                document.getElementById("mainpage").classList.add("d-none")
                document.getElementById("home").classList.remove("d-none")
                document.getElementById("username").innerText = `Welcome  ` + `${userList[i].name}`
                return
            }
            document.getElementById("incorrect").innerHTML = `<span class="text-danger">Email or Password incorrect</span>`

        }

    })
    //END SIGN IN