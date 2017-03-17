var apiKey = require("./../.env").apiKey;

function Doctor(){
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + "f1abe4d78dbdd5e9d675b6d0de0b2c1d")
  .then(function(response) {
    displayDoctors(response, medicalIssue);
  });
};
exports.doctorModule = Doctor;
