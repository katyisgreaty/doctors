var apiKey = require("./../.env").apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
    //  other actions go here
    $('#showDoctors').text)"The doctors that matched your request for treatment of " + medicalIssue + " are: " + result.profile.first_name + " " + result.profile.last_name);
      console.log(result);
    })
   .fail(function(error){
      console.log("fail");
    });
};
