$(document).ready(function(){

    function addUserFlightData(data, userFlightList){
        var tablerow = document.createElement('tr');
        var depdata = document.createElement('td');
        var timedata = document.createElement('td');
        var countrydata = document.createElement('td');
        var flight_num_data = document.createElement('td');
        var data_arv_data = document.createElement('td');
        var num_adt_data = document.createElement('td');
        var num_chd_data = document.createElement('td');
        var num_inf_data = document.createElement('td');

        $(depdata).text(data.depart_date);
        
    }

    $('#addUserFlights').click(function(){
        //If available in database then add 
        var depArea = document.getElementById("deparea1");
        var arvArea = document.getElementById('arrv_area');
        var trv_Class = document.getElementById('trv_class');
        var adt_tkcs = document.getElementById('mdivNbAdiv');
        var chd_tkcs = document.getElementById('mdivNbnChd');
        var inf_tkcs = document.getElementById('mdivNcIdiv');

        var deparea1 = depArea.options[depArea.selectedIndex].text;
        var depcity = document.getElementById("dep_city").text;
        var arvarea1 = arvArea.options[arvArea.selectedUIndex].text;        
        var arvcity = document.getElementById("arv_city").text;
        var depart_date = document.getElementById("depart_date").text;
        var arrival_date = document.getElementById("arrival_date").text
        var trv_class = trv_Class.options[trv_Class.selectedIndex].text;
        var num_adt_tkcs = adt_tkcs.options[adt_tkcs.selectedIndex].text;
        var num_chd_tkcs = chd_tkcs.options[chd_tkcs.selectedIndex].text;
        var num_inf_tkcs = inf_tkcs.optioin[inf_tkcs.selectedIndex].text;

        var newUserFlight = {
            deparea: deparea1,
            depcity: depcity,
            arvarea1: arvarea1,
            arvcity: arvcity,
            depart_date: depart_date,
            arrival_date: arrival_date,
            trv_class: trv_class,
            num_adt_tkcs: num_adt_tkcs,
            num_chd_tkcs: num_chd_tkcs,
            num_inf_tkcs: num_inf_tkcs, 
        }

        $.post('addUserFlight', newUserFlight, function(data, status){
            console.log(data);

            var tablediv = $('#flightList');
            addUserFlightData(data, tablediv)
        })

    });
    
});