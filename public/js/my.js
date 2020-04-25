
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

             var label7 = document.createElement('label');
             var label8 = document.createElement('label');
             var input7 = document.createElement('input');
             var input8 = document.createElement('input');

             $(label7).addClass('col-sm-2 col-form-label') 
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
            $(input7).addClass("form-control-plaintext");
            $(input8).addClass("form-control-plaintext");


            $(input1).attr({type:'Date',id:'edtDate'});
            $(input2).attr({type:'Date',id:'edtarrDate'});
            $(input3).attr({type:'text',id:'edttime'});
            $(input4).attr({type:'text',id:'edtarrtime'});
            $(input5).attr({type:'text',id:'edtport'});
            $(input6).attr({type:'text',id:'edtarrport'});
            $(input7).attr({type:'text',id:'edtdesti','readonly':'readonly'});
            $(input8).attr({type:'text',id:'edtflightnum', 'readonly':'readonly'});


            $(label).text("Departure Date");
            $(label2).text("Arrival Date");
            $(label3).text("Departure Time");
            $(label4).text("Arrival Time");
            $(label5).text("Airport of Departure");
            $(label6).text("Airport of Arrival");
            $(label7).text("Destination:");
            $(label8).text("Flight Number");
        
            $(input1).val(item.deptdate);
            $(input2).val(item.arrivdate);
            $(input3).val(item.depttime);
            $(input4).val(item.arrivtime);
            $(input5).val(item.deptarea);
            $(input6).val(item.arrivport);
            $(input7).val(item.desti);
            $(input8).val(item.flightnum);
            $(btnsubmit).text("Save Changes");
            $(btndelete).text("Deleter Flight");
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

            groupcol.append(input7);
            groupcol2.append(input8);

            grouprow.append(label7);
            grouprow.append(groupcol);

            grouprow2.append(label8);
            grouprow2.append(groupcol2);

            rowDiv3.append(formGroup5);
            rowDiv3.append(formGroup6);

            $(btnsubmit).addClass("btn  mb-2 mr-2 btn-primary");
            $(btnsubmit).attr({id:"btnedit"});

            $(btndelete).addClass("btn mb-2 mr-2 btn-primary");
            $(btndelete).attr({id:"btndelete"});

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
    console.log("Heelloo")
    var deptdate = $('#credeptdate').val();
    var depttime = $("#credepttime").val();
    var deptair = $('#credeptair').val();
    var desti =$('#credest').val();
    var arrdate = $("#crearrdate").val();
    var arrtime = $("#crearrtime").val();
    var arrport = $("#crearrport").val();
    var flight = $('#creflightnum').val();
    
    var comp = $('#crecomp').val();
    var flightnum = $('#creplane').val();

    var newFlight = {
        ddate: deptdate,
        dtime :depttime,
        deptairport: deptair,
        destination: desti,
        adate: arrdate,
        artime: arrtime,
        aport: arrport,
        flight: flight,
        port:  {
            comp:comp,
            flightnum: flightnum
        }
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


    $('#planeForm').on('click','#addPlane',function(){
            var comp = $("#crecomp").val();
            var plane =$("#creplane").val();

            var newplane = {
                comp:comp,
                plane: plane
            };
            $.post('addPlanes', newplane, function(data,status){
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
            console.log(fnum);
        $.post('searchFlight', {fnum:fnum},function(data, status){
            console.log(data);
            var flightContainer = $('#Flightsform');
            flightContainer.empty();
           
            data.forEach((item,it) => {
                addEditFlightDiv(item, flightContainer)
            });
        });
    });
    $('#Flightsform').on('click', '#btnedit', function() {
            var  ddate = $('#edtDate').val();
            var adate = $('#edtarrDate').val();
            var dtime = $('#edttime').val();
            var atime = $('#edtarrtime').val();
            var dport = $("#edtport").val();
            var aport = $('#edtarrport').val();
            var num = $('#edtflightnum').val();
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
                }
                else{
                    alert("Update Failed Please input Valid data");
                }
            });
        });
        $('#Flightsform').on('click', '#btndelete', function() {

            var fnum = $('#edtflightnum').val();
                num = {
                    num:fnum
                }
            $.post('deleteFlight',num, function(data,status){
                alert("Delete Successful!!");
                $('#searchflight').val('');

            });
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
            console.log(files);
            if (files.length <= 0) {
                return false;
              }
              var fr = new FileReader();
      
              fr.onload = function(e) { 
              console.log(e);
                var result = JSON.parse(e.target.result);
                var formatted = JSON.stringify(result, null, 2);
                
              $.post('addFlight',formatted,function(data,staus){
                if(data.success)
                {
                alert(data.message)
                window.location.assign("/admin-table");
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
   