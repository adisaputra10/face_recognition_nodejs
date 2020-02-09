
function removeForms(n) {
    $('#wrapper_' + n + '').remove();
    $('#ruler_' + n + '').remove();
    n = n - 1;
}

function toLoginPage(){
    $('#content_front').show();
    $('#content2').hide();
    $('#content1').hide();
    $('#navigation_main').hide();
}

function toRequestForm(){
    $('#content1').hide();
    $('#content2').show();
}

function toListForm(){
    $('#content2').hide();
    $('#content1').show();
}

function validateEmail(sEmail) {
    var filter =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (filter.test(sEmail)) {
    return true;
    }
    else {  
    return false;
    }
}

function checkEmpty(str){
    str = str == null || str == "" ? " - " : str;
    return str;
}

function check_input(element){
    var status = false;
    if(element.val() == ""){
        element.css('border-color', '#ff0000');
        return;
    }else{
        element.css('border-color', '#ced4da');
        status = true;
    }
    return status;
}

function clear_input(element){
    element.val('');
}