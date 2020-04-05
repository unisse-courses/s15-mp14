
$(document).ready(function() {
$('#login-form').on('click','#login-btn',function(){
    var username = $('#username').val();
    var password = $('#password').val();


$.post('searchUser', {username:username},function(data,status){
    console.log(data);
    var name = data[0].username;
    var pass = data[0].password;
    console.log(name);
    console.log(pass);
    var prov = data[0].prov;
    if (username == name && password == pass && prov == true) {
        localStorage.setItem("login", 1);
        checkIfLoggedIn();
    }
    else if (username == name && password == pass && prov == false) {
        localStorage.setItem("login", 1);
        checkIfuserLoggedIn();
    }
    else {
        $('#login-error').show();
        $('#username').val("");
        $('#password').val("");
    }
});
});

$('#show-password-btn').on('click', function() {
    $(this).find('i').toggleClass('fa fa-eye').toggleClass('fa fa-eye-slash');
    if($('#password').attr('type') == 'text'){
        $('#password').attr('type', 'password');
    }else{
        $('#password').attr('type', 'text');
    }
});

//event handler for logout button
$('#logout-btn').click(function() {
    //if clicked, then clear the login flag from localStorage with the key "login"
    localStorage.removeItem("login");
    //after clearing the "login" key, run the login check
    //to redirect user to index.html, since the "login" flag from localStorage is now cleared or not 1
    checkIfLoggedIn();
    checkIfuserLoggedIn();
});

function checkIfLoggedIn() {
    var loginStatus = localStorage.getItem('login');
    if (loginStatus == 1) {
        if (!window.location.href.includes("/admin-home" )|| !window.location.href.includes("/admin-table") ||!window.location.href.includes("/EditFlights") || !window.location.href.includes("/CreateFlights" )) {
            window.location.href = "/admin-home";
        }

    } else {
        if (window.location.href.includes("/") )
            window.location.href = "/";
        }
    }
function checkIfuserLoggedIn() {
    var loginStatus = localStorage.getItem('login');
    if (loginStatus == 1) {
        if (!window.location.href.includes("/client-home")) {
            window.location.href = "/client-home";
        }

    } else {
        if (!window.location.href.includes("/")) {
            window.location.href = "/";
        }
    }
}

var audio = document.getElementById("player");
if (audio) {
    audio.volume = 0.02;
}
});
