var app = new Vue({

  el: '#inputForm',

  data: {

    input: '',
    cityName:'',
    error: false,
    getWeatherStr:'',


  },


  methods: {

    errorMessage: function() {
      if (badApi === 'true') {
        this.error = true;
      }
    },

    getWeather: function() {

      var url = 'http://api.openweathermap.org/data/2.5/weather?zip=<zipcode>&us&appid=ef6a94dab254dc386b931af4d5ca58c7';

      url = url.replace("<zipcode>", this.input);

      getWeatherStr=url;

      


 // Boiler plate code

      apiRequest = new XMLHttpRequest();
      // apiRequest.onload = catchResponse;
      // apiRequest.onerror = httpRequestOnError;
      //apiRequest.open('get',url, true);
      //apiRequest.send();
      //alert("hello!");


      console.log(getWeatherStr);
      //console.log(JSON.parse(this.getWeather));
      this.parseResponse();
      return getWeatherStr;

    },
    parseResponse: function(){

      var results = JSON.parse(apiRequest.name);
      this.cityName = results.name;
      console.log(this.cityName);


    }

  }

});