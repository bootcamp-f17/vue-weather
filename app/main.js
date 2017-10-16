var app = new Vue({

  el: '#inputForm',

  data: {

    input: '',
    error: false

  },

  methods: {

    errorMessage: function() {
      if (badApi === 'true') {
        this.error = true;
      }
    },

    getWeather: function() {

      var url = 'http://api.openweathermap.org/data/2.5/weather?zip=<zipcode>&us&appid=ef6a94dab254dc386b931af4d5ca58c7';

      alert("hello!");

    }

  }

});