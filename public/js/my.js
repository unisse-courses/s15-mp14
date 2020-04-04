
$(document).ready(function() {
//initial check if a user is logged in or not
//checkIfLoggedIn();

//event handler for logout button
// $('#logout-btn').click(function() {
//     //if clicked, then clear the login flag from localStorage with the key "login"
//     localStorage.removeItem("login");
//     //after clearing the "login" key, run the login check
//     //to redirect user to index.html, since the "login" flag from localStorage is now cleared or not 1
//     checkIfLoggedIn();
$('#flightForm').on('click','#adddd',function(){
    console.log("Heelloo")
    var deptdate = $('#credeptdate').val();
    var depttime = $("#credepttime").val();
    var deptair = $('#credeptair').val();
    var desti =$('#credest').val();
    var arrdate = $("#crearrdate").val();
    var arrtime = $("#crearrtime").val();
    var arrport = $("#crearrport").val();
    var airport = $("#creflight").val();
        
    var newFlight = {
        ddate: deptdate,
        dtime :depttime,
        deptairport: deptair,
        destination: desti,
        adate: arrdate,
        artime: arrtime,
        aport: arrport,
        port: airport
    };
    console.log(newFlight);
$.post('addFlight', newFlight, function(data,status){
    if(data.success)
    {
    alert(data.message)
    window.location.assign("/admin-table");
    }
    else{
        alert(data.message);
    }

});
});

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

            {
              
            }
        });
    });


        $('#addPlane').click(function(){
            var comp = $("#crecomp").val();
            var plane =$("#creplane").val();

            var newplane = {
                comp:comp,
                plane: plane
            };
            $.post('addPlanes', newplane, function(data,status){
               
            });

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
});