var login_status = 0;
var elem_main_nav = $('#main_nav');
$(document).ready(function () {
    mainmenu.loadmenu();
    elem_main_nav.hide();
    var check_session = JSON.parse(localStorage.getItem('userdata'));
    if(check_session != null){
        $('#content_front').hide(); 
        $('#content2').hide();
        $('#content1').show();
        $('#content_front_register').hide();
        $('#navigation_main').show();
        elem_main_nav.show();
    }else{
        $('#content_front').show(); 
        $('#content_front_register').hide();
        $('#content2').hide();
        $('#content1').hide(); 
        $('#navigation_main').hide();
        elem_main_nav.hide();
    }
    session.login();
    session.register();
    session.logout();

});

