var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctors = function(medicalIssue, doctorLastName) {
  $('#showDoctors').text("The doctors that matched your request for treatment of ");
  console.log(response);
}

$(document).ready(function() {
  var newDoctor = new Doctor();
  $('#getDoctor').submit(function(event){
    event.preventDefault();
    console.log("click running");
    // var medicalIssue = $('#med-issue').val();
    // $('#med-issue').val("");
    // newDoctor.getDoctors(medicalIssue);
    $('#showDoctors').text("test");
  });

});

// + medicalIssue + " are: " + response.profile.first_name + " " + response.profile.last_name
