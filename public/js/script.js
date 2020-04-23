
$(document).ready(function(){
    $('#login-form').on('click','#login-btn',function(){
         var username = $('#username').val();
        var password = $('#password').val();

        localStorage.setItem('username', username);
    
    
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
        localStorage.removeIteme("username");
        //after clearing the "login" key, run the login check
        //to redirect user to index.html, since the "login" flag from localStorage is now cleared or not 1
        checkIfLoggedIn();
        checkIfuserLoggedIn();
    });

    //making it obvious
    //To check this shit 
    $(function(){
        var current = window.location.href;
        $('a span').each(function(){
            if(this.href === path){
                $(this).addClass('active');
            }
        })
    })
    //end for marrking lang to



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
    
    function addUserFlightData(data, userFlightList){
        var tablerow = document.createElement('tr');
        var depdata = document.createElement('td');
        var timedata = document.createElement('td');
        var countrydata = document.createElement('td');
        var flight_num_data = document.createElement('td');
        var arv_time_data = document.createElement('td');
        var data_arv_data = document.createElement('td');
        var arv_data = document.createElement('td');
        var num_adt_data = document.createElement('td');
        var num_chd_data = document.createElement('td');
        var num_inf_data = document.createElement('td');

        $(depdata).text(data.depart_date);
        $(timedata).text(data.deptime);
        $(countrydata).text(data.deparea1);

        //Flight Number
        $(data_arv_data).text(data.arrival_date);
        $(arv_time_data).text(data.arvtime);
        $(arv_data).text(data.arvarea1);
        $(num_adt_data).text(data.num_adt_tkcs);
        $(num_chd_data).text(data.num_chd_tkcs);
        $(num_inf_data).text(data.num_inf_tkcs);

        tablerow.append(depdata);
        tablerow.append(arv_time_data)
        tablerow.append(countrydata);
        //Flight Number td
        tablerow.append(data_arv_data);
        tablerow.append(arv_data);
        tablerow.append(arv_data);
        tablerow.append(num_adt_data);
        tablerow.append(num_chd_data);
        tablerow.append(num_inf_data);

        uerFlightList.append(tablerow);
    }

    $('#bookingForm').on('click','#addUserFlights',function(){
        //If available in database then add 
 

        var flightnum = $('#chonum').val();
        var fclass = $("#trv_class option:selected").val();
        var adults = $("#numAd option:selected").val();
        var child = $("#numChi option:selected").val();
        
        var infa = $('#numIn').find(":selected").val();

        var newUserFlight = {
            username: localStorage.getItem('username'),
            flightnum: flightnum,
            fclass: fclass,
            adults: adults,
            child: child,
            infa: infa
        }
            console.log(newUserFlight);
            $.post('addUserFlights', newUserFlight, function(data, status){
                console.log(data);

            })
    });

        // $.get('getFlights', function(data, status){
        //     console.log(data);

        //     var tablediv = $('£flightList');
        //     data.forEach((item, i) =>{
        //         addUserFlightData(item, tablediv);
        //     });   
        // })
});