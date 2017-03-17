var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var doctorsArray = [];

var displayDoctors = function(response, medicalIssue) {
  $(".results").show();
  $("#med-concern").text(medicalIssue);
  for(var i=0; i<response.data.length; i++){
    $('#showDoctors').append("<li><span class='docName'>Dr. " +  response.data[i].profile.first_name + " " + response.data[i].profile.last_name + ",</span> " + response.data[i].profile.title + " at " + response.data[i].practices[0].name + "</li>");
  };
}

$(document).ready(function() {
  // var newDoctor = new Doctor();
  $('#getDoctor').click(function(){
    var medicalIssue = $('#med-issue').val();
    console.log(medicalIssue);
    $('#med-issue').val("");
    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + "f1abe4d78dbdd5e9d675b6d0de0b2c1d")
    .then(function(response) {
      displayDoctors(response, medicalIssue);
    });
  });
});
