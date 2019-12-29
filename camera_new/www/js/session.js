var add_button = $('#add_multiple');
var wrapper = $('.main_container');
var arr = [];
var email_checked = false;
var password_checked = false;
var session = {
    login : function(){
        n = 0;
        $('#submit_login').on('click', function () {    
            var a = check_input($('#inputEmail'));
            var b = check_input($('#inputPassword'));
            if(a && b){
                $.ajax({
                    url: "http://dev.govcek.com/index.php/master_api/login", // change with service
                    method: 'POST',
                    data: {
                        'username' : $('#inputEmail').val()
                    },
                    dataType : 'json',
                    success: function (result) {
                        if(result.status == true){
                            elem_main_nav.show();
                            $('#content_front').hide(); 
                            $('#content2').hide();
                            $('#content1').show();
                            $('#menuutama').show();
                            $('#navigation_main').show();
                            console.log(result);
                            let userdata = localStorage.setItem('userdata', JSON.stringify(result));
                        }else{
                            console.log('failed');
                            Swal.fire({
                                type: 'error',
                                text: 'Error, Login failed',
                            });
                        }
                    }
                });
            }
        });
    },
    register : function(){
        $('#submit_register').on('click', function(){
            var a = check_input($('#reg_firstname'));
            var b = check_input($('#reg_lastname'));
            var c = check_input($('#reg_username'));
            var d = check_input($('#reg_companyname'));
            var e = check_input($('#reg_email'));
            var f = check_input($('#reg_password'));
            var g = check_input($('#reg_conf_password'));
            
            if(a && b && c && d && e && f && g){
                alert('udah bleh submit');
                var json_object = {
                    "firstname" : $('#reg_firstname'),
                    "lastname" : $('#reg_lastname'),
                    "username" : $('#reg_username'),
                    "companynam" : $('#reg_companyname'),
                    "email" : $('#reg_email'),
                    "password" : $('#reg_password'),
                }
            }
        });
    },
    logout : function(){
        $('#submit_logout').on('click', function () {
            Swal.fire({
                text: "Logout, Anda yakin untuk keluar",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Ya, Logout!'
              }).then((result) => {
                if (result.value) {
                    clear_input($('#inputEmail'))
                    clear_input($('#inputPassword'));
                    $('#content_front').show();
                    $('#content2').hide();
                    $('#content1').hide();
                    $('#content3').hide();
                    $('#navigation_main').hide();
                    localStorage.removeItem("userdata");
                    elem_main_nav.hide();
                }
              })
        });
    }
}     