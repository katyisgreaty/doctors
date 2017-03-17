var apiKey = require('./../.env').apiKey;
var Doctor = require('./../js/doctor.js').doctorModule;

var doctorsArray = [];

var displayDoctors = function(medicalIssue, doctorLastName) {
  $('#showDoctors').text("The doctors that matched your request for treatment of ");
  console.log(response);
}

$(document).ready(function() {
  // var newDoctor = new Doctor();
  $('#getDoctor').click(function(){
    var medicalIssue = $('#med-issue').val();
    $('#med-issue').val("");
      $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + "2f3e04b24230ea345871383997e30c90")
       .then(function(response) {
        //  other actions go here
        doctorsArray.push(response);
        console.log(doctorsArray);
        console.log(doctorsArray[0].data[0].profile.last_name);
        for(var i=0; i<response.data[0].length; i++){
          $('#showDoctors').text("The doctor that matched your request for treatment of " + medicalIssue + " is: Dr. " +  response.data[1].profile.last_name);
        };
      });
      //  .fail(function(error){
      //     console.log("fail");
      //   });
    });
  });
