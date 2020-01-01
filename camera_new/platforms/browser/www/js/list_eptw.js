var list_eptw = {
    load : function(){
        $.ajax({
            url: "http://34.70.135.128/ptw/api/eptw.php", // change with service
            method: 'get',
            dataType : 'json',
            success: function (result) {
                console.log(result);
                setTimeout(function(){
                    var elem = $('.wrapper_list_eptw');
                    var i = 0;
                    for (i; i < result.data.length; i++) {
                        list = '<a href="#"  onclick="list_eptw.Detail(' + result.data[i].permit_no + ')" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                                        <div class="d-flex w-100 justify-content-between ">\
                                            <h5 class="mb-2 h5 thisfontblack font-weight-bold">Permit No: '+result.data[i].permit_no+'</h5>\
                                            <small>Equip id : '+result.data[i].equip_id+'</small>\
                                        </div >\
                                        <p class="mb-2 thisfontblack">Issuer : '+result.data[i].issuer+'  </p>\
                                        <div class="d-flex w-100 justify-content-between ">\
                                        <small>Status : '+result.data[i].status+'</small>\
                                        <small class="align-right">'+checkEmpty(result.data[i].work_start)+' '+checkEmpty(result.data[i].work_finished)+' </small>\
                                        </div >\
                                    </a >';
                        elem.append(list)
                    }
                }, 100);
            }
        });
    },
    Detail : function(item){
        $('#list_eptw').hide();
        $('#detail_eptw').show();
       $.ajax({
        url: "http://34.70.135.128/ptw/api/eptw.php?detail=" +item, // change with service
        method: 'get',
        dataType : 'json',
        success: function (result) {
            console.log(result);
          
            setTimeout(function(){
                var elem = $('.wrapper_detail_eptw');
                var i = 0;
                for (i; i < result.data.length; i++) {
                    list = '<a href="home.html" class="ist-group-item-action flex-column align-items-start" style="border-bottom: 1px solid #ddd; padding-top:20px; padding-bottom:10px; color : #444">\
                    <center><button>Risk Assesment</button></center></a><br>     <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Permit No</h5>  '+result.data[i].permit_no+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Equip ID</h5>  '+result.data[i].equip_id+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Requester</h5>  '+result.data[i].requester+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Status</h5>  '+result.data[i].status+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Issuer</h5>  '+result.data[i].issuer+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Req Extension</h5>  '+result.data[i].req_extension+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Ext Reason</h5>  '+result.data[i].ext_reason+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Work Start</h5>  '+result.data[i].work_start+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Work Finished</h5>  '+result.data[i].work_finished+'\
                                    </div ><br>\
                                    <div class="d-flex w-100 justify-content-between ">\
                                    <h5 class="mb-2 h5 thisfontblack font-weight-bold">Last Modified By</h5>  '+result.data[i].lastmodifiedby+'\
                                    </div ><br>\
                                    ';
                    elem.append(list)
                }
            }, 100);
        }
    });



    }



}