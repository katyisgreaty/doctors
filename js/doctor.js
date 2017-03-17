var apiKey = require("./../.env").apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(response) {
    //  other actions go here
    console.log("function running");
    displayDoctors(medicalIssue, response.profile.last_name);
    })
   .fail(function(error){
      console.log("fail");
    });
};
