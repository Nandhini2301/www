
var data = {};

var url = window.location.href;
data.id = url.substring(url.lastIndexOf(':') + 1);
console.log(data.id);

httpPost("/viewchildrenownprofile", data, function (response) {
    console.log(response);

    // var res = JSON.parse(response.pre_assessment_data);
    //console.log(res.standard);

    $('#name').html(response.full_name);
    $('#dob').html(response.dob);
    $('#Gender').html(response.gender);
    $('#Center').html(response.center);
    $('#UserId').html(response.user_id);
    $('#UserId').html(response.user_id);



    $('#request').click(function () {

        var dataForRequest = {};
        dataForRequest.volunteer_id = localStorage.getItem("user");
        dataForRequest.role = localStorage.getItem("role");
        var url = window.location.href;
        dataForRequest.children_id = url.substring(url.lastIndexOf(':') + 1);
        httpPost("/insertConnectionRequest", dataForRequest, function (response) {
            if (response == "1") {
                $('#multiplerequest').modal();
            }
            else {
                $('#childrequest').modal();
            }

        });
    });



    return false;
});