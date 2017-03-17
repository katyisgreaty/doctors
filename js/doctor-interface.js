var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  var newDoctor = new Doctor();
  $('#getDoctor').click(function(){
    var medicalIssue = $('#med-issue').val();
    $('#med-issue').val("");
    newDoctor.getDoctors(medicalIssue);
  });
});
