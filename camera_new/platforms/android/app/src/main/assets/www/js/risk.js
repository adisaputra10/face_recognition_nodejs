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
    , Form : function(){
        $('#detail_risk').hide();
        $('#detail_risk_a').hide();
        $('#detail_risk').hide();
        $('#form_risk').show();

       
    },
    Save : function(){
    


        $('#saverisk').on('click', function () {    
            var array = [];
            var json_object = {
                'permit_no' : $('#permit_no').val(),
                'risk' : $('#risk').val(),
                'precaution' : $('#precaution').val(),
                'source' : $('#source').val(),
                'equipment' : $('#equipment').val() 
            };
            //alert(json_object);
                array.push(json_object);
                //console.log(array);
               // alert(array);
                $.ajax({
                    url: "http://34.70.135.128/ptw/api/risk.php?post", // change with service
                    method: 'POST',
                    data:json_object,
                    dataType : 'json',
                    success: function (result) {
                        alert("Saved");
                        list_risk.Detail_Site(localStorage.getItem("permit_no"));
                        list_risk.Detail(localStorage.getItem("permit_no"));
                        $('#detail_risk').show();
                        $('#form_risk').hide();

                        
                    }
                });


           
        });

       
    },
    Detail : function(item){
    
       $.ajax({
        url: "http://34.70.135.128/ptw/api/risk.php?detail=" +item, // change with service
        method: 'get',
        dataType : 'json',
        success: function (result) {
            console.log(result);
            setTimeout(function(){
                var elem = $('.wrapper_detail_risk');
                var i = 0;
                elem.empty();
                for (i; i < result.data.length; i++) {
                    list = '<a href="#" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
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
    },
    Detail_Site : function(item){
        $('#list_risk').hide();
        $('#detail_risk').show();
       // alert(item);
        //alert("Data ");
       $.ajax({
        url: "http://34.70.135.128/ptw/api/site.php?detail=" +item, // change with service
        method: 'get',
        dataType : 'json',
        success: function (result) {
            console.log(result);
            setTimeout(function(){
                var elem = $('.wrapper_detail_site');
                var i = 0;
                elem.empty();
                for (i; i < result.data.length; i++) {
                    list = '<a href="home.html" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                   <br>     <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Permit No</h5>  '+result.data[i].permit_no+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Issuer</h5>  '+result.data[i].issuer+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Requester</h5>  '+result.data[i].requester+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Status</h5>  '+result.data[i].start_complete+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Face Error</h5>  '+result.data[i].face_error+'\
                                    </div ><br>\
                                    ';
                    elem.append(list)
                }
            }, 100);
        }
    });
    }




}