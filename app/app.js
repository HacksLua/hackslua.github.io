var app = angular.module('eventsApp', ['angular-loading-bar', 'googleApi', 'treeGrid', 'ngNotify']);

app.config(function(googleLoginProvider) {
    googleLoginProvider.configure({
        clientId: '997074517462-7prl4d0ii90eiabr97ektqp7busu3igh.apps.googleusercontent.com',
        scopes: ["https://www.googleapis.com/auth/userinfo.email", 
        	     "https://www.googleapis.com/auth/calendar", 
        	     "https://www.googleapis.com/auth/plus.login"]
    });
});

app.config(['cfpLoadingBarProvider', function (cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = true; // Show the spinner.
    cfpLoadingBarProvider.includeBar = true; // Show the bar.
}]);



