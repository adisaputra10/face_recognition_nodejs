var mainmenu = {
    loadmenu : function(){
        $('#govceklogo').hide();
        $('#save').hide();
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
            $('#govceklogo').hide();
            $('#save').hide();
            // $('.search_all').css('visibility', 'visible');
        });

        // request form
        $('#menu2').on('click', function () {
            $('#content2').show();
            $('#content1').hide();
            $('#content3').hide();
            $('#content4').hide();
            $('#search_list').hide();
            // $('.search_all').css('visibility', 'hidden');
            $('.search_all').hide();
            $('#govceklogo').show();
            $('#save').show();

        });

        // inpsection schedule request
        $('#menu3').on('click', function(){
            $('#content1').hide();
            $('#content2').hide();
            $('#content4').hide();
            $('#content3').show();
            $('#search_list').hide();
            $('.search_all').hide();
            $('#govceklogo').show();
            $('#save').hide();
        });

        // master product list
        $('#menu4').on('click', function(){
            $('#content1').hide();
            $('#content2').hide();
            $('#content3').hide();
            $('#content4').show();
            $('#search_list').show();
            $('.search_all').show();
            $('#govceklogo').hide();
            $('#save').hide();
        });
    }
}
    
