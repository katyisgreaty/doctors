var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;


$(document).ready(function() {
  var newDoctor = new Doctor();
  $('#getDoctor').submit(function(event){
    event.preventDefault();
    var medicalIssue = $('#med-issue').val();
    $('#med-issue').val("");
    newDoctor.getDoctors(medicalIssue);
  });
});
