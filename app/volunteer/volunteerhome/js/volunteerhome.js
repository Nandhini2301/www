$(document).ready(function () {
    var id = localStorage.getItem("user");
    var data = {}
    data.id = id;
    httpPost("/volunteerhome", data, function (response) {
        if (response == 0) {

            $('#selectchild').append('<a href="../../../../shared/viewchildprofile/en/viewchildprofile.html"><div class="col-sm-4 col-xs-4"><p>Child Profile<img src="../../../../helperfiles/img/childrenprofile.png" class="img-responsive " alt="View Children Profile" width="120"height="236"> </p></div></a>');
        }
        else {
            $('#selectchild').append('<a href="../../selectchild/en/listofchild.html"><div class="col-sm-4 col-xs-4"><p>Select Child<img src="../../../../helperfiles/img/addchildren.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div></a>');
        }
    }),
        httpPost("/viewchild", data, function (response) {
            if (response[0].approve_status == 1) {
                $('#tracker').append('<a href="../../tracker/en/tracker.html"><div class="col-sm-4 col-xs-4"><p>Tracker<img src="../../../../helperfiles/img/tracker.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div></a>');
            }
            else {
                $('#tracker').append('<div class="col-sm-4 col-xs-4"><p>Tracker<img src="../../../../helperfiles/img/tracker.png" class="img-responsive " alt="CHILD SELECTION" width="120" height="236"></p></div>');

            }
            console.log(response[0].approve_status);
        }),
     httpPost("/volunteerhomeviewmentor", data, function (response) {
     if (response == 0) {
         $('#selectmentor').append('<a href="../../viewmentorprofile/en/mentorprofile.html"><div class="col-sm-4 col-xs-4"><p>Mentor Profile	<img src="../../../../helperfiles/img/professional.png" class="img-responsive" alt="View Mentor Profile" width="120" height="236"></p></div>	</a>');
     }
     else {
         $('#selectmentor').append('<a href="../../selectmentor/en/listofmentor.html"><div class="col-sm-4 col-xs-4"><p>Select Mentor<img src="../../../../helperfiles/img/addmentor.png" class="img-responsive " alt="Mentor Assignment" width="120" height="236"></p></div></a>');
     }
    })});