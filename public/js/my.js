
$(document).ready(function() {

    function addEditFlightDiv(item, parentDiv){
        var btnsubmit = document.createElement('button');
        var btndelete = document.createElement('button');
            var rowDiv  = document.createElement('div');
            var rowDiv2  = document.createElement('div');
            var rowDiv3  = document.createElement('div');
            var grouprow = document.createElement('div');
            var grouprow2 = document.createElement('div');
            var groupcol  = document.createElement('div');
            var groupcol2 = document.createElement('div');
            var label = document.createElement('label');
            var label2 = document.createElement('label');
            var label3 = document.createElement('label');
            var label4 = document.createElement('label');
            var label5 = document.createElement('label');
            var label6 = document.createElement('label');
             var formGroup1 = document.createElement('div');
             var formGroup2 = document.createElement('div');
             var formGroup3 = document.createElement('div');
             var formGroup4 = document.createElement('div');
             var formGroup5 = document.createElement('div');
             var formGroup6 = document.createElement('div');
             var input1 = document.createElement('input');
             var input2 = document.createElement('input');
             var input3 = document.createElement('input');
             var input4 = document.createElement('input');
             
             var input5 = document.createElement('input');
             var input6 = document.createElement('input');

             var label8 = document.createElement('label');
             var input8 = document.createElement('input');

             $(label8).addClass('col-sm-2 col-form-label')
            $(rowDiv).addClass("form-row");
            $(rowDiv2).addClass("form-row");
            $(rowDiv3).addClass("form-row");
            
            $(grouprow).addClass("form-group row");
            $(grouprow2).addClass("form-group row");
            $(formGroup1).addClass("form-group col-md-3");
            $(formGroup2).addClass("form-group col-md-3");
            $(formGroup3).addClass("form-group col-md-3");
            $(formGroup4).addClass("form-group col-md-3");
            $(formGroup5).addClass("form-group col-md-3");
            $(formGroup6).addClass("form-group col-md-3");

            
            $(groupcol).addClass("col-sm-5");
            $(groupcol2).addClass("col-sm-5");

            
            $(input1).addClass("form-control");
            $(input2).addClass("form-control");
            $(input3).addClass("form-control");
            $(input4).addClass("form-control");
            $(input5).addClass("form-control");
            $(input6).addClass("form-control");
            $(input8).addClass("form-control-plaintext");


            $(input1).attr({type:'Date',id:'edtDate'});
            $(input2).attr({type:'Date',id:'edtarrDate'});
            $(input3).attr({type:'text',id:'edttime'});
            $(input4).attr({type:'text',id:'edtarrtime'});
            $(input5).attr({type:'text',id:'edtport'});
            $(input6).attr({type:'text',id:'edtarrport'});
           
            $(input8).attr({type:'text',id:'edtflightnum', 'readonly':'readonly'});


            $(label).text("Departure Date");
            $(label2).text("Arrival Date");
            $(label3).text("Departure Time");
            $(label4).text("Arrival Time");
            $(label5).text("Airport of Departure");
            $(label6).text("Airport of Arrival");
            $(label8).text("Flight Number");
            $(input1).val(item.formatteddate1);
            $(input2).val(item.formatteddate2);
            $(input3).val(item.result.depttime);
            $(input4).val(item.result.arrivtime);
            $(input5).val(item.result.deptarea);
            $(input6).val(item.result.arrivport);
            $(input8).val(item.result.flightnum);
            $(btnsubmit).text("Save Changes");
            $(btndelete).text("Delete Flight");
            formGroup1.append(label);
            formGroup1.append(input1);
            formGroup2.append(label2);
            formGroup2.append(input2);
            formGroup3.append(label3);
            formGroup3.append(input3);
            formGroup4.append(label4);
            formGroup4.append(input4);
            
            formGroup5.append(label5);
            formGroup5.append(input5);
            formGroup6.append(label6);
            formGroup6.append(input6);

            rowDiv.append(formGroup1);
            rowDiv.append(formGroup2);
            rowDiv2.append(formGroup3);
            rowDiv2.append(formGroup4);

            groupcol2.append(input8);

            grouprow.append(groupcol);

            grouprow2.append(label8);
            grouprow2.append(groupcol2);

            rowDiv3.append(formGroup5);
            rowDiv3.append(formGroup6);

            $(btnsubmit).addClass("btn  mb-2 mr-2 btn-primary");
            $(btnsubmit).attr({id:"btnedit",type:"button"});

            $(btndelete).addClass("btn mb-2 mr-2 btn-primary");
            $(btndelete).attr({id:"btndelete",type:"button"});

            parentDiv.append(grouprow);
            parentDiv.append(grouprow2);

            parentDiv.append(rowDiv);
            parentDiv.append(rowDiv2);
            parentDiv.append(rowDiv3);

 
            parentDiv.append(btnsubmit);
            
            parentDiv.append(btndelete);
    }


$('#flightList').DataTable();

$('#credepttime').timepicker();
$('#crearrtime').timepicker();



$('#flightForm').on('click','#adddd',function(){
    var deptdate = $('#credeptdate').val();
    var depttime = $("#credepttime").val();
    var deptair = $('#credeptair').val();
    var arrdate = $("#crearrdate").val();
    var arrtime = $("#crearrtime").val();
    var arrport = $("#crearrport").val();
    var flight = $('#creflightnum').val();
    
    var comp = $('#crecomp').val();
    var flightnum = $('#creplane').val();
    var go = true;
    if(deptdate =='')
    {
        go = false;
        $('#credeptdate').css("border-color","red");
        $('#ferr4').text("Please select proper date");

    }
    if(arrdate == '')
    {
        go = false;
        $('#crearrdate').css("border-color","red");
        $('#ferr3').text("Please select proper date");
    }
    if(deptair == '')
    {
        $('#credeptair').css("border-color","red");
    }
    if(arrport == '')
    {
        $('#crearrport').css("border-color","red");
    }
    if(flight == '' &&  flight.includes('_') == false)
    {
        go = false;
        $('#creflightnum').css("border-color","red");
        $('#ferr5').text("Flight Number needs to include ' _ ' in it");

    }
    if(flightnum == '' &&  flightnum.includes('_')  == false)
    {
        go = false;
        $('#creplane').css("border-color","red");
        $('#ferr6').text("Plane Number needs to include ' _ ' in it");

    }
    if(comp == '')
    {
        go = false;
        $('#crecomp').css("border-color","red");
        $('#ferr6').text("Plane Number needs to include ' _ ' in it");

    }


    var a = comparetime(depttime,arrtime);
    if(deptdate === arrdate && a == false )
    {
        go = false;
        $('#ferr').text("Same day arrival flights cannot have lesser arrival time");
    }
    if(deptdate > arrdate)
          {
              go =false;
              
              $('#ferr').text("Departure date cannot be later than arrival date");
          }
    if(go == true)
    {
    var newFlight = {
        ddate: deptdate,
        dtime :depttime,
        deptairport: deptair,
        adate: arrdate,
        artime: arrtime,
        aport: arrport,
        flight: flight,
        port:  {
            Company:comp,
            PlaeNum: flightnum
        }
    };
$.post('addFlight', newFlight, function(data,status){
    if(data.success)
    {
    Swal.fire({
        type: 'success',
       title:  data.message,
       animation: false,
        customClass: "animated fadeInDown"
    });
    window.location.assign("/ListofFlights");
    }
    else{
        Swal.fire({
            title:  (data.message),
            type: 'error',
            text: 'Make sure the Form is Filled',
          confirmButtonColor: '#d33',
          confirmButtonText: 'Go back',
          animation: false,
          customClass: "animated fadeInDown"

 
        })
    }

});
}
});



    $('#flight-table').DataTable();
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
                $.post('deleteAll',{},function(data,status){

            });
                Swal.fire({
               title: 'Cleared!',
               text: 'Data has been cleared.',
               type: 'success'
                }).then( function(){
                window.location.reload();
            });
        };
    });
     
});
   
    $('#searchFlightform').on('click', '#btnsearchflights', function(){
        var fnum = $('#searchflight').val();
        var go = true;
        if(fnum == '' )
        {
                go = false;
                $('#ferr1').text("Please input valid flight number")
                $("#searchflight").css("border-color","red");
        }
        if(go == true)
        {
        $.post('searchFlight', {fnum:fnum},function(data, status){
            if(data.success == false)
            {
                $('#ferr1').text("Please input valid flight number")
                $("#searchflight").css("border-color","red");
            }
            else{
                
                $("#searchflight").css("border-color","black");
                
                $('#ferr1').empty();

            var flightContainer = $('#Flightsform');
            flightContainer.empty();
           
                addEditFlightDiv(data, flightContainer)
        }
            });
        }   
        });
        function comparetime (time1,time2)
        {
            time1 = time1.split(" ");
            var time = time1[0].split(":");
            var hr = time[0];
            if(time1[1] == "PM" && hr<12)
            hr = parseInt(hr) + 12

            time2 = time2.split(" ");
            var time2_time = time2[0].split(":");
            var time2_hr = time2_time[0];
            if(time2[1] == "PM" && hr<12)
            time2_hr = parseInt(hr) + 12

            if(hr > time2_hr)
            return false;

            else if(time2_hr > hr)
            return true

            else if(time2_hr == hr)
            {
                if(time[1] < time2_time[1])
                return true;

                else
                return false;
            }
                return false;
        }
 
    $('#Flightsform').on('click', '#btnedit', function() {
            var  ddate = $('#edtDate').val();
            var adate = $('#edtarrDate').val();
            var dtime = $('#edttime').val();
            var atime = $('#edtarrtime').val();
            var dport = $("#edtport").val();
            var aport = $('#edtarrport').val();
            var num = $('#edtflightnum').val();
            var go = true;
            console.log(dtime);
            
            console.log(atime);
            var a = comparetime(dtime,atime);
        if(adate ===  ddate && a == false)
          {
                go = false;
                $('#ferr2').text("Same day arrival flights cannot have lesser arrival time");
                return 0;
          }
          if(ddate > adate)
          {
              go =false;
              
              $('#ferr2').text("Departure date cannot be later than arrival date");
          }
          if(go == true)
          {
            editflight  = {
                ddate: ddate,
                adate: adate,
                dtime: dtime,
                atime: atime,
                dport: dport,
                aport: aport,
                num:num
            }

            $.post('updateFlight', editflight,function(data, status){
                if(data.ok)
                {
                    alert("Update Successful!!")
                  $('#searchflight').val('');
                  $('#Flightsform').empty();
                  
                  $('#ferr2').empty();
                }
                else{
                    alert("Update Failed Please input Valid data");
                }
            });
        }
        });
        $('#Flightsform').on('click', '#btndelete', function() {

            var fnum = $('#edtflightnum').val();
                var num =fnum;
                Swal.fire({
                    title: 'Are you sure you want to delete this Flight',
                    text: "You won't be able to revert this!",
                    type: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if(result.value)
                    {
                        $.post('deleteFlight',num, function(data,status){
                    
                   });
                   Swal.fire({
                    title: 'Cleared!',
                    text: 'Flight',
                    type: 'success'
                     }).then( function(){
                     window.location.reload();
                });
            };
            })
   

            });

        //var r = //confirm("Clear data?");
        
        /* if (r == true) {  btn-search-flights
            
            $(input1).attr({type:'Date',id:'edtDate'});
            $(input2).attr({type:'Date',id:'edtarrDate'});
            $(input3).attr({type:'text',id:'edttime'});
            $(input4).attr({type:'text',id:'edtarrtime'});
            $(input5).attr({type:'text',id:'edtport'});
            $(input6).attr({type:'text',id:'edtarrport'});
            $(input7).attr({type:'text',id:'edtdesti','readonly':'readonly'});
            $(input8).attr({type:'text',id:'edtflightnum', 'readonly':'readonly'});
             localStorage.removeItem('charts_data');
             refreshTables();
             refreshCharts();
         }*/
         
         $('#upload').click(function(){
            var files = document.getElementById('uploaer').files;
            if (files.length <= 0) {
                return false;
              }
              var fr = new FileReader();
      
              fr.onload = function(e) { 
                var result = JSON.parse(e.target.result);
                var formatted = JSON.stringify(result, null, 2);
                
              $.post('addFlight',formatted,function(data,staus){
                if(data.success)
                {
                
                window.location.assign("/ListofFlights");
                }
                else{
                    alert(data.message);
                }
              });
              }
              fr.readAsText(files,item(0))
            });
    
            $('#clear').click(function(){
                document.getElementById("uploader").value = "";
            });

        });