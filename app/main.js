const openWeatherBaseUrl = "http://api.openweathermap.org/data/2.5/weather?zip=";
const apiKey = "&us&appid=ef6a94dab254dc386b931af4d5ca58c7"

var app = new Vue({

  el: '#inputForm',

  data: {

    zipInput: '',
    error: false,
    results: [],
    dataResults: []
  },

  methods: {

    errorMessage: function() {
      if (badApi === 'true') {
        this.error = true;
      }
    },

    getWeather: function() {

      var url = openWeatherBaseUrl + this.zipInput + apiKey; 

      console.log(this.zipInput);
      console.log(url);

      axios.get(url)
      .then(response => this.results = response.data);
      
      console.log(JSON.parse(this.results);
      //this.results = this.dataResults;



      //console.log(this.dataResults);

      //console.log(this.results);

      //return this.parseResponse;

      //alert("hello!");

    }

    //parseResponse: function() {
     // var results = JSON.parse(this.dataResults);
      //console.log(this.results.name);

    //}


  }

});