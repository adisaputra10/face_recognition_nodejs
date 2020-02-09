var list_loto = {
    load : function(){
        $.ajax({
            url: "http://34.70.135.128/ptw/api/user.php", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log(result);
                setTimeout(function(){
                    var elem = $('.wrapper_list_loto');
                    elem.empty();
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        list = '<a href="#" id="aloto" onclick="list_loto.Detail(' + result.data[i].id_user + ')" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                                        <div class="d-flex w-100 justify-content-between ">\
                                            <h5 class="mb-2 h5 thisfontblack font-weight-bold">User ID: '+result.data[i].id_user+'</h5>\
                                            <small>Name : '+result.data[i].name+'</small>\
                                        </div >\
                                        <div class="d-flex w-100 justify-content-between ">  \
                                        <small>User : '+result.data[i].username+'  </small>\
                                        <small class="align-right"> Email : '+result.data[i].email+'</small> </small>\
                                        </div >\
                                        <div class="d-flex w-100 justify-content-between ">  \
                                        <small>Role : '+result.data[i].role+'</small>\
                                        <small class="align-right">Last Login  '+result.data[i].lastlogin+' </small>\
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
            url: "http://34.70.135.128/ptw/api/user.php?search="+item, // change with service
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
                            <h5 class="mb-2 h5 thisfontblack font-weight-bold">User ID: '+result.data[i].id_user+'</h5>\
                            <small>Name : '+result.data[i].name+'</small>\
                        </div >\
                        <div class="d-flex w-100 justify-content-between ">  \
                        <small>User : '+result.data[i].username+'  </small>\
                        <small class="align-right"> Email : '+result.data[i].email+'</small> </small>\
                        </div >\
                        <div class="d-flex w-100 justify-content-between ">  \
                        <small>Role : '+result.data[i].role+'</small>\
                        <small class="align-right">Last Login  '+result.data[i].lastlogin+' </small>\
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
            url: "http://34.70.135.128/ptw/api/eptw.php?lock", // change with service
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
            url: "http://34.70.135.128/ptw/api/eptw.php", // change with service
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
            url: "http://34.70.135.128/ptw/api/eptw.php?equip", // change with service
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
            url: "http://34.70.135.128/ptw/api/loto.php?detail="+item, // change with service
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
            url: "http://34.70.135.128/ptw/api/eptw.php?lock", // change with service
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
            url: "http://34.70.135.128/ptw/api/eptw.php", // change with service
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
            url: "http://34.70.135.128/ptw/api/eptw.php?equip", // change with service
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




    },
    SaveDetail : function(){
        $('#list_loto').hide();
        $('#list_eptw').hide();
        $('#edit_user').show();
       
       // alert("dataa ")
        $.ajax({
                url: "http://34.70.135.128/ptw/api/user.php?update", // change with service
                method: 'POST',
                data: {
                    'idimage' : $('#idimage').val() ,
                    'name' : $('#name').val(),
                    'email' : $('#email').val(),
                    'username' : $('#username').val(),
                    'password' : $('#password').val(),
                    'status' : $('#status').val(),
                    'role' : $('#role').val() 
                },
                dataType : 'json',
                success: function (result) {
            
            
                    //CameraPreview.stopCamera();
                    alert("Saved")
                    window.location.href = "index.html";
                    

                }
            });




    }
    ,
    Detail : function(item){
        $('#list_loto').hide();
        $('#list_eptw').hide();
        $('#edit_user').show();
        //alert(item)
       $.ajax({
        url: "http://34.70.135.128/ptw/api/user.php?detail="+item, // change with service
        method: 'get',
        dataType : 'json',
        success: function (result) {
            console.log(result);
            setTimeout(function(){
        
                document.getElementById("edit_user").innerHTML = '<div class="container">\
                <div class="row">\
                    <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">\
                        <div class="card-body">\
                            <br/>\
                            <h4 class="card-title text-center text-primary">Update User</h4>\
                            <br/>\
                            <br/>\
                            <div class="form-label-group">\
                                <label for="inputEmail" class="thisfontblack">ID Image</label>\
                                <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="text" id="idimage"  value="'+result.data[0].idimage+'"  readonly=true  class="form-control thisfontblack" placeholder="">\
                            </div>\
                            <div class="form-label-group">\
                                    <label for="inputEmail" class="thisfontblack">Name</label>\
                                    <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="text" id="name"  value="'+result.data[0].name+'"   class="form-control thisfontblack" placeholder="Name">\
                                    <!-- <input type="email" id="inputEmail" class="form-control" placeholder="Email address"\
                                            required autofocus> -->\
                            </div>\
                            <div class="form-label-group">\
                                    <label for="inputEmail" class="thisfontblack">Username</label>\
                                    <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="text" id="username"   value="'+result.data[0].username+'"  class="form-control thisfontblack" placeholder="Username">\
                                    <!-- <input type="email" id="inputEmail" class="form-control" placeholder="Email address"\
                                            required autofocus> -->\
                            </div>\
                            <div class="form-label-group">\
                                    <label for="inputEmail" class="thisfontblack">Email</label>\
                                    <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="text" id="email"   value="'+result.data[0].email+'"  class="form-control thisfontblack" placeholder="Email">\
                             </div>\
                            <div class="form-label-group">\
                                    <label for="inputEmail" class="thisfontblack">Status</label>\
                                    <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="text" id="status"  value="'+result.data[0].status+'"  class="form-control thisfontblack" placeholder="Status">\
                        </div><div class="form-label-group">\
                                    <label for="inputEmail" class="thisfontblack">Role</label>\
                                    <input required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" type="text" id="role"  value="'+result.data[0].role+'"  class="form-control thisfontblack" placeholder="Role">\
                            </div>\
                            <br />\
                            <button class="btn btn-sm btn-primary btn-block text-uppercase thisfontblack"  id="updateuser"   onclick="list_loto.SaveDetail()" style="padding: 10px;">Save\
                            </button><br>\
                           <a href=retrain.html> <button class="btn btn-sm btn-primary btn-block text-uppercase thisfontblack"   style="padding: 10px;">ReTraining Image\
                            </button> </a>\
                            <hr class="my-4">\
                        </div>\
                    </div>\
                   </div>\
               </div>';



            
           
            }, 100);
        }
    });
    }
    ,
    Form : function(){
     
        window.location.href = "home.html";
       
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
                    url: "http://34.70.135.128/ptw/api/loto.php?status", // change with service
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
                    url: "http://34.70.135.128/ptw/api/loto.php?post", // change with service
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