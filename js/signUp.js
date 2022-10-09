var signupName = document.getElementById("signupName")
var signupEmail = document.getElementById("signupEmail")
var signupPassword = document.getElementById("signupPassword")

var userList = []



if (localStorage.getItem('list') == null) {
    userList = []
} else {
    userList = JSON.parse(localStorage.getItem('list'))
}


//START SIGN UP
var signUp = document.getElementById("signUp")

signUp.addEventListener("click", function() {

        if (signupName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
            document.getElementById("message").innerHTML = `<span class="text-danger">All inputs is required!</span>`
            return
        }

        for (var i = 0; i < userList.length; i++) {
            if (userList[i].email.toLowerCase() == signupEmail.value.toLowerCase()) {
                document.getElementById("message").innerHTML = `<span class="text-danger">Email Already Exist!</span>`
                return
            }
        }
        if (validateEmail()) {
            if (validatePassward()) {
                var user = {
                    name: signupName.value,
                    email: signupEmail.value,
                    password: signupPassword.value,
                }

                userList.push(user)
                localStorage.setItem("list", JSON.stringify(userList))

                clearForm()
                document.getElementById("message").innerHTML = `<span class="text-success">Success</span>`


            } else {
                document.getElementById("message").innerHTML = `<span class="text-danger">Password must be 8 characters or more!</span>`

            }
        } else {
            document.getElementById("message").innerHTML = `<span class="text-danger">Email Not Valid!</span>`

        }

    })
    //END SIGN UP




//CLEAR FORM AFTER SIGN UP

function clearForm() {
    signupName.value = ""
    signupEmail.value = ""
    signupPassword.value = ""
}


// validation
function validateEmail() {
    var regex = /^[a-z]+@([a-z]+\.)+[a-z]{2,4}$/
    if (regex.test(signupEmail.value)) {
        return true
    } else {
        return false
    }
}

function validatePassward() {
    var regex2 = /.{8,}$/
    if (regex2.test(signupPassword.value)) {
        return true
    } else {
        return false
    }
}