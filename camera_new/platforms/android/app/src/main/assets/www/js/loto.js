var list_loto = {
    load : function(){
        $.ajax({
            url: "http://eptw.webzz.id/web/api/loto.php", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log(result);
                setTimeout(function(){
                    var elem = $('.wrapper_list_loto');
                    elem.empty();
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        list = '<a href="#" id="aloto" onclick="list_loto.Detail(' + result.data[i].id_loto + ')" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                                        <div class="d-flex w-100 justify-content-between ">\
                                            <h5 class="mb-2 h5 thisfontblack font-weight-bold">Permit No: '+result.data[i].permit_no+'</h5>\
                                            <small>Lock id : '+result.data[i].lock_id+'</small>\
                                        </div >\
                                        <div class="d-flex w-100 justify-content-between ">  \
                                        <small>User : '+result.data[i].user+'  </small>\
                                        <small class="align-right">  Equip id : '+result.data[i].equip_id+'</small> </small>\
                                        </div >\
                                        <div class="d-flex w-100 justify-content-between ">  \
                                        <small>Status : '+result.data[i].status+'</small>\
                                        <small class="align-right">  '+result.data[i].datetime+' </small>\
                                        </div >\
                                    </a >';
                        elem.append(list)
                    }
                }, 100);
            }
        });




    },
    search : function(){

        var item = $('#lotosearch').val();
        //alert($('#lotosearch').val())
        var item=document.getElementById("lotosearch").value;
      //  alert(item)

        $.ajax({
            url: "http://eptw.webzz.id/web/api/loto.php?search="+item, // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log(result);
                setTimeout(function(){
                    var elem = $('.wrapper_list_loto');
                    elem.empty();
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        list = '<a href="#" id="aloto" onclick="list_loto.Detail(' + result.data[i].id_loto + ')" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                                        <div class="d-flex w-100 justify-content-between ">\
                                            <h5 class="mb-2 h5 thisfontblack font-weight-bold">Permit No: '+result.data[i].permit_no+'</h5>\
                                            <small>Lock id : '+result.data[i].lock_id+'</small>\
                                        </div >\
                                        <div class="d-flex w-100 justify-content-between ">  \
                                        <small>User : '+result.data[i].user+'  </small>\
                                        <small class="align-right">  Equip id : '+result.data[i].equip_id+'</small> </small>\
                                        </div >\
                                        <div class="d-flex w-100 justify-content-between ">  \
                                        <small>Status : '+result.data[i].status+'</small>\
                                        <small class="align-right">  '+result.data[i].datetime+' </small>\
                                        </div >\
                                    </a >';
                        elem.append(list)
                    }
                }, 100);
            }
        });




    }
    ,
    list_select : function(){
     

        $.ajax({
            url: "http://eptw.webzz.id/web/api/eptw.php?lock", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log('tresul')
                console.log(result);
                setTimeout(function(){
                    var elem = $('.list_lockid');
                  
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        elem.append('<option value='+result.data[i].lock_id +'>'+result.data[i].lock_id+'</option');
                    }
                }, 100);
            }
        });

        $.ajax({
            url: "http://eptw.webzz.id/web/api/eptw.php", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log('tresul')
                console.log(result);
                setTimeout(function(){
                    var elem = $('.list_permit_no');
                  
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        elem.append('<option value='+result.data[i].permit_no +'>'+result.data[i].permit_no+'</option');
                    }
                }, 100);
            }
        });


        $.ajax({
            url: "http://eptw.webzz.id/web/api/eptw.php?equip", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log('tresul')
                console.log(result);
                setTimeout(function(){
                    var elem = $('.list_equipment');
                  
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        elem.append('<option value='+result.data[i].equip_id +'>'+result.data[i].equip_id+'</option');
                    }
                }, 100);
            }
        });

        var elemuser = $('.list_user');
        elemuser.append('<option value='+localStorage.getItem('username') +'>'+ localStorage.getItem('username')+'</option');
        
    },
    formedit : function(item){

     //alert(item)
        $('#list_loto').hide();
        $('#list_eptw').hide();
        $('#detail_loto').hide(); //edit_loto
        $('#edit_loto').show(); 
        var id_loto,permit_no,lock_id,equip_id,status,user;
        document.getElementById('id_loto').value= item;
        $.ajax({
            url: "http://eptw.webzz.id/web/api/loto.php?detail="+item, // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log(result);
                setTimeout(function(){
                    
             
                    var i = 0;
                    
                    for (i; i < result.data.length; i++) {
                        
                        id_loto= result.data[i].id_loto;
                        permit_no= result.data[i].permit_no;
                        lock_id= result.data[i].lock_id;
                        equip_id= result.data[i].equip_id;
                        user= result.data[i].user;
                        status= result.data[i].status;
                    }
                }, 100);
            }
        });



        $.ajax({
            url: "http://eptw.webzz.id/web/api/eptw.php?lock", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log('tresul')
                console.log(result);
                setTimeout(function(){
                    var elem = $('.list_lockid_e');
                    elem.append('<option value='+lock_id +'>'+lock_id+'</option');
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        elem.append('<option value='+result.data[i].lock_id +'>'+result.data[i].lock_id+'</option');
                    }
                }, 100);
            }
        });

        $.ajax({
            url: "http://eptw.webzz.id/web/api/eptw.php", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log('tresul')
                console.log(result);
                setTimeout(function(){
                    var elem = $('.list_permit_no_e');
                    elem.append('<option value='+permit_no +'>'+permit_no+'</option');
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        elem.append('<option value='+result.data[i].permit_no +'>'+result.data[i].permit_no+'</option');
                    }
                }, 100);
            }
        });


        $.ajax({
            url: "http://eptw.webzz.id/web/api/eptw.php?equip", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log('tresul')
                console.log(result);
                setTimeout(function(){
                    var elem = $('.list_equipment_e');
                    elem.append('<option value='+equip_id +'>'+equip_id+'</option');
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        elem.append('<option value='+result.data[i].equip_id +'>'+result.data[i].equip_id+'</option');
                    }
                }, 100);
            }
        });

        var elemuser = $('.list_user_e');
        elemuser.append('<option value='+localStorage.getItem('username') +'>'+ localStorage.getItem('username')+'</option');




    }
    ,
    Detail : function(item){
        $('#list_loto').hide();
        $('#list_eptw').hide();
        $('#detail_loto').show();
       $.ajax({
        url: "http://eptw.webzz.id/web/api/loto.php?detail=" +item, // change with service
        method: 'get',
        dataType : 'json',
        success: function (result) {
            console.log(result);
            setTimeout(function(){
                var elem = $('.wrapper_detail_loto');
                var i = 0;
                elem.empty();
                for (i; i < result.data.length; i++) {
                    list = '<a href="#" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                   <br>     <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">ID Loto</h5>  '+result.data[i].id_loto+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Permit No</h5>  '+result.data[i].permit_no+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Lock ID</h5>  '+result.data[i].lock_id+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Status</h5>  '+result.data[i].status+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">User</h5>  '+result.data[i].user+'\
                                    </div ><br> <div class="form-label-group"><br>\
                                    <br> <button class="btn btn-sm btn-primary btn-block text-uppercase thisfontblack" onclick="list_loto.formedit(' + result.data[i].id_loto + ')" id="savestatusloto" style="padding: 10px;">Edit </button>\
                                    <label for="inputEmail" class="thisfontblack"> Change Status</label>\
                                    <select class="form-control" id="status">\
                                        <option value="Active">Active</option>\
                                        <option value="Inactive">Inactive</option>\
                                    </select><button class="btn btn-sm btn-primary btn-block text-uppercase thisfontblack" onclick="list_loto.ChangeStatus(' + result.data[i].id_loto + ')" id="savestatusloto" style="padding: 10px;">Save </button> \
                            </div>\
                                    ';
                    elem.append(list)
                }
            }, 100);
        }
    });
    }
    ,
    Form : function(){
        $('#list_loto').hide();
        $('#list_eptw').hide();
        $('#form_loto').show();

       
    },   ChangeStatus : function(item){
       
        
        $('#savestatusloto').on('click', function () {    
            var array = [];
            var json_object = {
                'id_loto' : $('#id_loto').val(),
                'status' : $('#status').val()
            };
            //alert(json_object);
                array.push(json_object);
                //console.log(array);
               // alert(array);
                $.ajax({
                    url: "http://eptw.webzz.id/web/api/loto.php?status", // change with service
                    method: 'POST',
                    data:json_object,
                    dataType : 'json',
                    success: function (result) {
                        alert("Saved");
                        list_loto.load();
                        $('#list_loto').show();
                        $('#list_eptw').hide();
                        $('#form_loto').hide();

                        if(result.status == true){
                        // do something here
                        }else{
                        // bla bla bla

                        }
                    }
                });

        });

       
    },
    Save : function(){
        n = 0;
        



        $('#saveloto').on('click', function () {    
            var array = [];
            var json_object = {
                'permit_no' : $('#permit_no').val(),
                'lock_id' : $('#lock_id').val(),
                'action' : $('#action').val(),
                'equip_id' : $('#equip_id').val(),
                'status' : $('#status').val(),
                'user' : $('#user').val() 
            };
            //alert(json_object);
                array.push(json_object);
                //console.log(array);
               // alert(array);
                $.ajax({
                    url: "http://eptw.webzz.id/web/api/loto.php?post", // change with service
                    method: 'POST',
                    data:json_object,
                    dataType : 'json',
                    success: function (result) {
                        alert("Saved");
                        list_loto.load();
                        $('#list_loto').show();
                        $('#list_eptw').hide();
                        $('#form_loto').hide();

                        if(result.status == true){
                        // do something here
                        }else{
                        // bla bla bla

                        }
                    }
                });

        });



    }

}