//Handles login button event
$('#login-btn').click(function() {
    //get username and password values from DOM
    var username = $('#username').val();
    var password = $('#password').val();

    console.log(username);
    console.log(password);

    //check for username/password validity
    if (username == "admin" && password == "p@ssword") {
        
        //if correct, set a key in localStorage named "login" with value of 1
        //it will be the flag if the user is logged in or not
        localStorage.setItem("login", 1);

        //after setting the flag, check login status
        checkIfLoggedIn();
    } else {
        $('#login-error').show();
        $('#username').val("");
        $('#password').val("");
    }
});
function checkIfLoggedIn() {

    //get the value of the login flag from localStorage with the key "login"
    var loginStatus = localStorage.getItem('login');

    //if the value of the flag is 1, then someone has logged in, redirect them to dashboard.html
    if (loginStatus == 1) {
        //but first, check if the user already in dashboard.html before redirecting
        //to avoid infinite redirections
        if (!window.location.href.includes("dashboard.html")) { //checks if the url contains the keyword "dashboard.html"
            //if the url does not contain dashboard.html, then redirect to dashboard.html
            window.location.href = "dashboard.html";
        }
    } else { //else redirect to index.html or the login page
        //but first, check if the user already in index.html before redirecting
        //to avoid infinite redirections
        if (!window.location.href.includes("index.html")) { //checks if the url contains the keyword "index.html"
            //if the url does not contain index.html, then redirect to index.html
            window.location.href = "index.html";
        }
    }
}

//initial check if a user is logged in or not
//checkIfLoggedIn();

//event handler for logout button
// $('#logout-btn').click(function() {
//     //if clicked, then clear the login flag from localStorage with the key "login"
//     localStorage.removeItem("login");
//     //after clearing the "login" key, run the login check
//     //to redirect user to index.html, since the "login" flag from localStorage is now cleared or not 1
//     checkIfLoggedIn();


$(document).ready(function() {
    $('#adddUser').click(function(){
        var name = $('#regname').val();
        var initials = $('#regmid').val();
        var last = $('#reglast').val();
        var address = $('#regad').val();
        var email = $('regEmail').val();
        var pass = $('regpass').val();
        var sex = $("input[name='gender']:checked").val();
        var bday = $('#regbday').val();
        var country = $("#regcount").val();
    
        var newUser = {
            name: name,
            initial: initials,
            lname : last,
            addr: address,
            emadd: email,
            password: pass,
            gender: sex,
            birthday : bday,
            count : country
        };
        $.post('register',newUser,function(data, status){
            console.log(data);
    
            if(data.success){
              
            }
        })
    
        });

    $('#burger-sales-by-specie-table').DataTable();

    $('#clear-button').click(function() {

        Swal.fire({
            title: 'Are you sure you want to clear data?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.value) {
                localStorage.removeItem('charts_data');
                refreshTables();
                refreshCharts();
                Swal.fire(
                    'Cleared!',
                    'Data has been cleared.',
                    'success'
                )
    
            }
        })
    
    
        //var r = //confirm("Clear data?");
        /* if (r == true) {
             localStorage.removeItem('charts_data');
             refreshTables();
             refreshCharts();
         }*/
    
    });
} );
