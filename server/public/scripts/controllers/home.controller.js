
myApp.controller('HomeController', ['$location', function($location) {
    // console.log('LandingController created');
    var self = this;

    self.toLogin = function() {
        $location.url('/fat')
      } // end toLogin

  }]);


