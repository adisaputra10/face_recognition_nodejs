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
            $('#edit_loto').hide(); 
            $('#form_loto').hide();
            $('#logo').hide();

        });

        // eptw list
        $('#menu2').on('click', function () {
            $('#list_eptw').show();
            $('#list_loto').hide();
            $('#list_risk').hide();
            $('#detail_eptw').hide();
            $('#detail_loto').hide();
            $('#detail_risk').hide();
            $('#edit_loto').hide(); 

            $('#form_loto').hide();
          
            $('#content1').hide();
            $('#content3').hide();
            $('#content4').hide();
            $('#search_list').hide();
            $('.search_all').hide();
            $('#logo').show();


        });

        // risk 
        $('#menu3').on('click', function(){
            $('#list_risk').show();
            $('#list_eptw').hide();
            $('#list_loto').hide();
            $('#detail_eptw').hide();
            $('#detail_loto').hide();
            $('#detail_risk').hide();

            $('#form_loto').hide();
            $('#edit_loto').hide(); 


            $('#content1').hide();
            $('#content2').hide();
            $('#content4').hide();
            $('#content3').hide();
            $('#search_list').hide();
            $('.search_all').hide();
            $('#logo').show();
            $('#save').hide();
        });

        // loto
        $('#menu4').on('click', function(){
            $('#content1').hide();
            $('#content2').hide();
            $('#content3').hide();
            $('#detail_eptw').hide();
            $('#detail_loto').hide();
            $('#detail_risk').hide();
            $('#form_loto').hide();
            $('#edit_loto').hide(); 
            

            $('#list_loto').show();
            $('#list_eptw').hide();
            $('#search_list').hide();
            $('#list_risk').hide();
            $('.search_all').hide();
            $('#logo').show();
            $('#save').hide();
        });

        $('#form_loto').on('click', function(){
            $('#form_loto').show();
            $('#list_loto').hide();
        });

    }
}
    
