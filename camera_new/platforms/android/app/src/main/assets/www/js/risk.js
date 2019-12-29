var list_risk = {
    load : function(){
        $.ajax({
            url: "http://34.70.135.128/ptw/api/risk.php", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log(result);
                setTimeout(function(){
                    var elem = $('.wrapper_list_risk');
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        list = '<a href="#" onclick="list_risk.Detail(' + result.data[i].id_risk + ')" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                                        <div class="d-flex w-100 justify-content-between ">\
                                            <h5 class="mb-2 h5 thisfontblack font-weight-bold">'+result.data[i].risk+'</h5>\
                                            <small>'+result.data[i].source+'</small>\
                                        </div >\
                                        <p class="mb-2 thisfontblack">'+result.data[i].precaution+'  </p>\
                                        <div class="d-flex w-100 justify-content-between ">\
                                        <small>'+result.data[i].equipment+'</small>\
                                        <small class="align-right">  </small>\
                                        </div >\
                                    </a >';
                        elem.append(list)
                    }
                }, 100);
            }
        });
    }
    ,
    Detail : function(item){
        $('#list_risk').hide();
        $('#detail_risk').show();
       $.ajax({
        url: "http://34.70.135.128/ptw/api/risk.php?detail=" +item, // change with service
        method: 'get',
        dataType : 'json',
        success: function (result) {
            console.log(result);
            setTimeout(function(){
                var elem = $('.wrapper_detail_risk');
                var i = 0;
                for (i; i < result.data.length; i++) {
                    list = '<a href="home.html" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                   <br>     <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">ID Risk</h5>  '+result.data[i].id_risk+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Risk</h5>  '+result.data[i].risk+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Source</h5>  '+result.data[i].source+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Precaution</h5>  '+result.data[i].precaution+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Equipment</h5>  '+result.data[i].equipment+'\
                                    </div ><br>\
                                    ';
                    elem.append(list)
                }
            }, 100);
        }
    });
    }




}