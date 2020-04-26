$(document).ready(function(){

    
    $('#show-password-btn').on('click', function() {
        $(this).find('i').toggleClass('fa fa-eye').toggleClass('fa fa-eye-slash');
        if($('#password').attr('type') == 'text'){
            $('#password').attr('type', 'password');
        }else{
            $('#password').attr('type', 'text');
        }
    });
    
   $('#clearB').on('click',function(){
    Swal.fire({
        title: 'Are you sure you want to delete All your current Bookings?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes'
    }).then((result) => {
        if(result.value)
        {
       $.post('deleteAllBookings',{}, (data,status) =>{
        
       });
       Swal.fire({
        title: 'Cleared!',
        text: 'All Bookings has been cleared.',
        type: 'success'
         }).then( function(){
         window.location.reload();
    });
};
})
   });

    //making it obvious
    //To check this shit 
    // $(function(){
    //     var current = window.location.href;
    //     $('a span').each(function(){
    //         if(this.href === path){
    //             $(this).addClass('active');
    //         }
    //     })
    // })
    // //end for marrking lang to



    
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
        
        var infa = $("#numIn option:selected").val();
            console.log()
        var newUserFlight = {
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