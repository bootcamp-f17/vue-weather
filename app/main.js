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

      alert("hello!");

    }

  }

});