var mainmenu = {
    loadmenu : function(){
        $('#logo').hide();
        $('#save').hide();
        $('.search_all').hide();
        $('.goto_createuser').on('click', function(){
            $('#content_front').hide(); 
            $('#content_front_register').show();
        });
        
        $('.goto_login').on('click', function(){
            $('#content_front').show(); 
            $('#content_front_register').hide();
        })
        
        // list request
        $('#menu1').on('click', function () {
            $('#content1').show();
            $('#search_list').show(); 
            $('.search_all').show();
            $('#content2').hide();
            $('#content3').hide();
            $('#content4').hide();
            $('#logo').hide();

        });

        // request form
        $('#menu2').on('click', function () {
            $('#list_eptw').show();

          
            $('#content1').hide();
            $('#content3').hide();
            $('#content4').hide();
            $('#search_list').hide();
            $('.search_all').hide();
            $('#logo').show();


        });

        // inpsection schedule request
        $('#menu3').on('click', function(){
            $('#list_risk').show();
            $('#content1').hide();
            $('#content2').hide();
            $('#content4').hide();
            $('#content3').hide();
            $('#search_list').hide();
            $('.search_all').hide();
            $('#logo').show();
            $('#save').hide();
        });

        // master product list
        $('#menu4').on('click', function(){
            $('#content1').hide();
            $('#content2').hide();
            $('#content3').hide();
            $('#list_loto').show();
            $('#search_list').show();
            $('.search_all').show();
            $('#govceklogo').hide();
            $('#save').hide();
        });
    }
}
    
