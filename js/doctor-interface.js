var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, doctorFirstName, doctorLastName) {
$('#showDoctors').text("The doctors that matched your request for treatment of " + medicalIssue + " are: " + response.profile.first_name + " " + response.profile.last_name);
  console.log(response);
}

$(document).ready(function() {
  var newDoctor = new Doctor();
  $('#getDoctor').click(function(){
    var medicalIssue = $('#med-issue').val();
    $('#med-issue').val("");
    newDoctor.getDoctors(medicalIssue);
  });

});
