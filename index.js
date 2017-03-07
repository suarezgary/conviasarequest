var request = require('request');
var r = request.defaults({'proxy':'http://IWSVAGNN01:8080'})

formData = {
    ORIGEN:'CCS',
    DESTINO:'CZE',
    fecha_desde:'08/03/2017',
    fecha_hasta:'21/03/2017',
    adultos:2,
    ninos:0,
    bebes:0
}
r.post({ url: 'https://wftc1.e-travel.com/plnext/Conviasa/Override.action', form: {key:'value'}}, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
}); 