var app = new Vue({

  el: '#weather',

  data: {

    zipInput: '',
    apiRequest: new XMLHttpRequest(),
    showError: false,
    showOutput: false,
    errorMessage: '',
    temperatureOutputK: '',
    temperatureOutputF: '',
    temperatureOutputC: '',
    cityOutput: '',
    conditionOutput: '',
    weatherImage: ''

  },

  methods: {

    getWeather: function() {

      var url="http://api.openweathermap.org/data/2.5/weather?zip=<zipcode>&us&appid=ef6a94dab254dc386b931af4d5ca58c7";
      url = url.replace("<zipcode>", this.zipInput); 

      this.apiRequest.onload = this.catchResponse;
      this.apiRequest.onerror = this.httpRequestOnError;
      this.apiRequest.open('get', url, true);
      this.apiRequest.send();

    },

    catchResponse: function() {

      if (this.apiRequest.statusText === "OK") {

        this.showError = false;
        this.showOutput = true;

        this.parseResponse();

      }

      else {

        this.errorMessage = JSON.parse(this.apiRequest.responseText).message;
        this.showError = true;

      }
      
    },

    httpRequestOnError: function() {

      this.errorMessage = "HTTP request could not be completed";
      this.showError = true;

    },

    parseResponse: function() {

      var results = JSON.parse(this.apiRequest.responseText);

      var tempK = Math.round(results.main.temp);
      var tempF = Math.round(9/5 * (tempK - 273) + 32); // 9/5 (K - 273) + 32
      var tempC = tempK - 273; // K - 273

      this.temperatureOutputK = tempK + "&deg;";
      this.temperatureOutputF = tempF + "&deg;";
      this.temperatureOutputC = tempC + "&deg;";

      this.cityOutput = results.name;

      this.conditionOutput = results.weather[0].description;

      if (tempF > 92) {
        this.weatherImage = "http://www.thelandofshadow.com/wp-content/uploads/2013/04/mordor_by_edli-d2yrha5.jpg";
      }
      else if (tempF > 85) {
        this.weatherImage = "https://media.rbl.ms/image?u=%2Ffiles%2F2016%2F04%2F15%2F635963469764710781-1002509858_tumblr_n6vi59KPmO1tbh1dho1_400.gif&ho=https%3A%2F%2Faz616578.vo.msecnd.net&s=765&h=09e03017b9751456564b4ce2542f761a7bb5f8d551aaf061b251294fbd316e80&size=980x&c=3646041352";
      }
      else if (tempF > 75) {
        this.weatherImage = "http://i0.kym-cdn.com/photos/images/original/001/093/677/752.png";
      }
      else if (tempF > 65) {
        this.weatherImage = "http://ecotechpoolservice.com/wp-content/uploads/2012/10/Swimming-Pool-Sustainability.jpg";
      }
      else if (tempF > 32) {
        this.weatherImage = "http://yumgoggle.com/wp-content/uploads/2015/12/Hot-Cocoa-DSC_4177-square-600.jpg";
      }
      else {
        this.weatherImage = "https://i.pinimg.com/736x/ba/74/25/ba7425153dfe73f669027c7fc9d0ef75--jon-snow-funny-animals.jpg";
      }

    }

  }

});