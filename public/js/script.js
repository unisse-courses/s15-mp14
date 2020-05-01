$(document).ready(function(){

    
    function addEditBookingDiv(item, parentDiv){
        var btnsubmit = document.createElement('button');
        var btndelete = document.createElement('button');
            var rowDiv  = document.createElement('div');
            var rowDiv2  = document.createElement('div');
            var rowDiv3  = document.createElement('div');
            var rowDiv4  = document.createElement('div');
            var grouprow = document.createElement('div');
            var grouprow2 = document.createElement('div');
            var groupcol  = document.createElement('div');
            var groupcol2 = document.createElement('div');
            var groupcol3 = document.createElement('div');
            var groupcol4 = document.createElement('div');
            var groupcol5= document.createElement('div');
            var groupcol6 = document.createElement('div');

            var label = document.createElement('label');
            var label2 = document.createElement('label');
            var label3 = document.createElement('label');
            var label4 = document.createElement('label');
            var label5 = document.createElement('label');
            var label6 = document.createElement('label');
            var label9 = document.createElement('label');
            var label10 = document.createElement('label');
            var label11 = document.createElement('label');
            var label12 = document.createElement('label');

             var formGroup1 = document.createElement('div');
             var formGroup2 = document.createElement('div');
             var formGroup3 = document.createElement('div');
             var formGroup4 = document.createElement('div');
             var formGroup5 = document.createElement('div');
             var formGroup6 = document.createElement('div'); 
             var formGroup7 = document.createElement('div');

             var input1 = document.createElement('input');
             var input2 = document.createElement('input');
             var input3 = document.createElement('input');
             var input4 = document.createElement('input');
             
             var input5 = document.createElement('input');
             var input6 = document.createElement('input');

             var label8 = document.createElement('label');
             var input8 = document.createElement('input');
            var select1 = document.createElement('select');
            var select2 = document.createElement('select')
            var select3= document.createElement('select')
            var select4 = document.createElement('select')

            $(input1).css("color","	#FBA400");
            $(input2).css("color","	#FBA400");
            $(input3).css("color","	#FBA400");
            $(input4).css("color","	#FBA400");
            $(input5).css("color","	#FBA400");
            $(input6).css("color","	#FBA400");
            for(var i=0;i<10;i++){
            var x = document.createElement('option')
            $(x).text(i).val(i);


            select2.add(x);
        }
      
        for(var i=0;i<10;i++){
            var x = document.createElement('option');
            $(x).text(i);
            $(x).val(i);


            select3.add(x);
        }
        for(var i=0;i<5;i++){
            var x = document.createElement('option');
            $(x).text(i);
            $(x).val(i);

            select4.add(x);
        }
        $(select2).val(item.result.adult);
        $(select3).val(item.result.child);
        $(select4).val(item.result.infant);
        var x = document.createElement('option')
        $(x).text("First Class");
        $(x).val("First");
        select1.add(x);

        var x = document.createElement('option')
        $(x).text("Business Class");
        $(x).val("Business");
        select1.add(x);

        var x = document.createElement('option')
            $(x).text("Economy Class");
            $(x).val("Economy");

            select1.add(x);

            $(select1).val(item.result.fclass);
             $(label8).addClass('col-sm-2 col-form-label')
             $(label9).addClass('col-sm-1 col-form-label') 
             $(label10).addClass('col-sm-1 col-form-label')
             $(label11).addClass('col-sm-1 col-form-label') 
             $(label12).addClass('col-sm-1 col-form-label')
            $(rowDiv).addClass("form-row");
            $(rowDiv2).addClass("form-row");
            $(rowDiv3).addClass("form-row");
            $(rowDiv4).addClass("row");

            $(grouprow).addClass("form-group row");
            $(grouprow2).addClass("form-group row");
            $(formGroup1).addClass("form-group col-md-3");
            $(formGroup2).addClass("form-group col-md-3");
            $(formGroup3).addClass("form-group col-md-3");
            $(formGroup4).addClass("form-group col-md-3");
            $(formGroup5).addClass("form-group col-md-3");
            $(formGroup6).addClass("form-group col-md-3");
            
            $(formGroup7).addClass("container");

            
            $(groupcol).addClass("col-sm-5");
            $(groupcol2).addClass("col-sm-5");
            $(groupcol3).addClass("col-sm-2");
            $(groupcol4).addClass("col-sm-2");
            $(groupcol5).addClass("col-sm-2");
            $(groupcol6).addClass("col-sm-2");

            
            $(input1).addClass("form-control-plaintext");
            $(input2).addClass("form-control-plaintext");
            $(input3).addClass("form-control-plaintext");
            $(input4).addClass("form-control-plaintext");
            $(input5).addClass("form-control-plaintext");
            $(input6).addClass("form-control-plaintext");
            $(input8).addClass("form-control-plaintext");


            $(input1).attr({type:'Date',id:'edtDate','readonly':'readonly'});
            $(input2).attr({type:'Date',id:'edtarrDate','readonly':'readonly'});
            $(input3).attr({type:'text',id:'edttime','readonly':'readonly'});
            $(input4).attr({type:'text',id:'edtarrtime','readonly':'readonly'});
            $(input5).attr({type:'text',id:'edtport','readonly':'readonly'});
            $(input6).attr({type:'text',id:'edtarrport','readonly':'readonly'});
            $(input8).attr({type:'text',id:'edtflightnum', 'readonly':'readonly'});

            $(select1).attr({id:'edtclass'});
            $(select2).attr({id:'edtAd'});
            $(select3).attr({id:'edtChi'});
            $(select4).attr({id:'edtIn'});

            $(label).text("Departure Date");
            $(label2).text("Arrival Date");
            $(label3).text("Departure Time");
            $(label4).text("Arrival Time");
            $(label5).text("Airport of Departure");
            $(label6).text("Airport of Arrival");
            $(label8).text("Flight Number:");
            $(label9).text("Flight Class:");
            $(label10).text("Adults:");
            $(label11).text("Children:");
            $(label12).text("Infants:");
            console.log(item);
            $(input1).val(item.formatteddate1);
            $(input2).val(item.formatteddate2);
            $(input3).val(item.result.flight.depttime);
            $(input4).val(item.result.flight.arrivtime);
            $(input5).val(item.result.flight.deptarea);
            $(input6).val(item.result.flight.arrivport);
            $(input8).val(item.result.flight.flightnum);
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

            groupcol3.append(select1);
            groupcol4.append(select2);
            groupcol5.append(select3);
            groupcol6.append(select4);

            grouprow.append(groupcol);

            grouprow2.append(label8);
            grouprow2.append(groupcol2);

            rowDiv4.append(label9);
            rowDiv4.append(select1);
            rowDiv4.append(label10);
            rowDiv4.append(select2);
            rowDiv4.append(label11);
            rowDiv4.append(select3);
            rowDiv4.append(label12);
            rowDiv4.append(select4);

            formGroup7.append(rowDiv4);
            rowDiv3.append(formGroup5);
            rowDiv3.append(formGroup6);

            $(btnsubmit).addClass("btn mb-3 mr-2 btn-primary ");
            $(btnsubmit).attr({type:"button",id:"btnedit"});

            $(btndelete).addClass("btn mb-3 mr-2 btn-primary");
            $(btndelete).attr({type:"button",id:"btndelete"});

            parentDiv.append(grouprow);
            parentDiv.append(grouprow2);

            parentDiv.append(rowDiv);
            parentDiv.append(rowDiv2);
            parentDiv.append(rowDiv3);

            parentDiv.append(rowDiv4);
 
            parentDiv.append(btnsubmit);
            
            parentDiv.append(btndelete);
    }
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
   $('#searchBookingform').on('click', '#btnsearchflights', function(){
    var fnum = $('#searchflight').val();
      var go=  true;
      if(fnum =='')
      { 
          go = false;
          $('#searchflight').css("border-color","red");
          $('#berr1').text("Flight number required");
      }
      if(go == true){
        $('#berr1').text("");
        $('#searchflight').css("border-color","white");

    $.post('searchBooking', {fnum:fnum},function(data, status){
        
        var flightContainer = $('#BookingForm');
        flightContainer.empty();
        addEditBookingDiv(data, flightContainer)
        });
    }
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

    $('#BookingForm').on('click', '#btnedit', function() {
        var fclass = $('#edtclass').val();
        var adult = $('#edtAd').val();
        var child = $('#edtChi').val();
        var infant = $('#edtIn').val();
        var num = $('#edtflightnum').val();
        editBooking  = {
            fclass: fclass,
            adult: adult,
            child: child,
            infant: infant,
            num: num
        }
        var go = true;
        if(adult == 0 && child == 0 && infant == 0)
        {
            go = false;
            $('#berr2').text("Number of passengers booking cannot be 0")
        }
        if(adult == 0 &&( child > 0 || infant > 0))
        {
            go = false;
            $('#berr2').text("An Adult is required to accompany child and infant")
        }   
    if(go == true)
    {

        $.post('updateBooking', editBooking,function(data, status){
         
            if(data.success)
            {
                Swal.fire({
                    title: 'Update Successful',
                    type: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Great!'
                }).then(function(){
              $('#searchflight').val('');
              window.location.reload()
                });
            }
            else{
                Swal.fire({     
                    title: 'Update Vailed',
                    text: 'Please input Valid data',
                    type: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK!'
                });
            }
       
        });
    }
    });

    $('#BookingForm').on('click', '#btndelete', function() {

        var fnum = $('#edtflightnum').val();
        
            Swal.fire({
                title: 'Are you sure you want to delete this Booking',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes'
            }).then((result) => {
                if(result.value)
                {
                    $.post('deleteBooking',{num:fnum}, function(data,status){
                
               });
               Swal.fire({
                title: 'Cleared!',
                text: 'Flight has been deleted',
                type: 'success'
                 }).then( function(){
                 window.location.reload();
            });
        };
        })


        });


    
    $('#bookingForm').on('click','#addUserFlights',function(){
        //If available in database then add 
        var go = true;
        var flightnum = $('#chonum').val();
        var fclass = $("#trv_class option:selected").val();
        var adults = $("#numAd option:selected").val();
        var child = $("#numChi option:selected").val();
        var infa = $("#numIn option:selected").val();
        var sum = adults + child + infa;



           if(flightnum == '')
           {
            $('#chonum').css("border-color","red");
            go= false;
            $('#error1').text("Flight number required");
           }
           if(adults == 0 && child == 0  && infa == 0)
           {
            go= false;
            $('#error2').text("Number of passengers booking cannot be 0");
           }
           if(adults == 0 && (child > 0  || infa > 0))
           {
            go= false;
            $('#error2').text("An adult is required to accompany child and infant");
           }
           if(go == true)
           {
        var newUserFlight = {
            flightnum: flightnum,
            fclass: fclass,
            adults: adults,
            child: child,
            infa: infa,
            sum : sum
        }
            $.post('addUserFlights', newUserFlight, function(data, status){
                if(data.success)
            {
                Swal.fire({
                    title: 'You have successfully booked a Flight',
                    text: "Go to Schedules to see your booked flights",
                    type: 'success',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'Great!'
                }).then(function(){
              $('#searchflight').val('');
              window.location.reload()
                });
            }
            else if (!data.sucess && data.message == "flight"){
                Swal.fire({     
                    title: 'Booking failed ',
                    text: 'The Flight number you entered does not exists',
                    type: 'error',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK!'
                });
            }
            else if(!data.sucess && data.message == "users"){
                Swal.fire({
                    title: 'Insufficient space',
                    text: "The current flight you want to book has insufficient space",
                    type: 'warning',
                    confirmButtonColor: '#3085d6',
                    confirmButtonText: 'OK!'
                })
            }

            });
        }
    });


});