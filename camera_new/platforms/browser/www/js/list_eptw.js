var list_eptw = {
    load : function(){
        $.ajax({
            url: "http://dev.govcek.com/index.php/master_api/master_product", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log(result);
                setTimeout(function(){
                    var elem = $('.wrapper_list_eptw');
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        list = '<a href="#" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                                        <div class="d-flex w-100 justify-content-between ">\
                                            <h5 class="mb-2 h5 thisfontblack font-weight-bold">'+result.data[i].category+'</h5>\
                                            <small>'+result.data[i].category+'</small>\
                                        </div >\
                                        <p class="mb-2 thisfontblack">'+result.data[i].product_category+'</p>\
                                        <div class="d-flex w-100 justify-content-between ">\
                                        <small>'+result.data[i].status_name+'</small>\
                                        <small class="align-right">'+checkEmpty(result.data[i].last_inspection)+'</small>\
                                        </div >\
                                    </a >';
                        elem.append(list)
                    }
                }, 100);
            }
        });
    }
}