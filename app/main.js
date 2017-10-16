var app = new Vue({

  el: '#inputForm',

  data: {

    input: '',
    output: '',
    error: false,
    errorMessage: 'https request could not be completed'


  },

  methods: {

    httpErrorMessage: function() {
      if (badApi === 'true') {
        this.error = true;

      }
    },

    getWeather: function() {

  var url="https://api.openweathermap.org/data/2.5/weather?zip=<zipcode>&us&appid=ef6a94dab254dc386b931af4d5ca58c7";
  url = url.replace("<zipcode>", zipInput.value); 

  apiRequest = new XMLHttpRequest();
  apiRequest.onload = catchResponse;
  apiRequest.onerror = httpErrorMessage;
  apiRequest.open('get', url, true);
  apiRequest.send();

    },

    catchResponse: function() {

      if (apiRequest.statusText === "OK") {

        this.errorMessage = '';
        this.error = false;
        this.output = true;

        parseResponse();
      }

  }

}

});