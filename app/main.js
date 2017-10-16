var app = new Vue({

  el: '#inputForm',

  data: {

    input: '',
    output: true,
    error: false,
    errorMessage: 'https request could not be completed, invalid zipcode.',
    apiRequest:'',
    temperatureOutputK: '',
    temperatureOutputF: '',
    temperatureOutputC: '',
    cityOutput: '',
    conditionOutput:'',
    weatherImage: '' ,


  },

  methods: {



    getWeather: function() {

  var url="https://api.openweathermap.org/data/2.5/weather?zip=<zipcode>&us&appid=ef6a94dab254dc386b931af4d5ca58c7";
  url = url.replace("<zipcode>", this.input); 

  apiRequest = new XMLHttpRequest();
  apiRequest.onload = this.catchResponse;
  apiRequest.onerror = this.httpErrorMessage;
  apiRequest.open('get',url, true);
  apiRequest.send();

    },

    catchResponse: function() {

      if (apiRequest.statusText === "OK") {

        this.errorMessage = '';
        this.error = false;
        this.output = true;

        this.parseResponse();
      }
        else {

    this.httpErrorMessage = JSON.parse(apiRequest.responseText).message;
    this.error= true;
    this.output = false;

    }

  },

    parseResponse: function () {

    var results = JSON.parse(apiRequest.responseText);

    var tempK = Math.round(results.main.temp);
    var tempF = Math.round(9/5 * (tempK - 273) + 32); // 9/5 (K - 273) + 32
    var tempC = tempK - 273; // K - 273

    this.temperatureOutputK = tempK;
    console.log(this.temperatureOutputK);
    this.temperatureOutputF = tempF;
    this.temperatureOutputC = tempC;

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
      this.weatherImage = "http://clipartix.com/wp-content/uploads/2016/05/Free-weather-clipart-clip-art-pictures-graphics-illustrations-6.jpg";
    }

}







},



















});