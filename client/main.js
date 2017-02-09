import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './imports/weightwidget.html';
import './imports/weightwidget.js';
import './main.html';
import './imports/dashboard.html';
import './imports/dashboard.js';

var FitbitApiClient = require("fitbit-node");

Template.buttons.events({
    'click': function(){
        var redirectUrl = 'http://localhost:3000/authcallback';
        var clientId = 'XXXXXX';
        var clientSecret = 'XXXXXXXXXX';
        var client = new FitbitApiClient(clientId, clientSecret);
        var authorizationUrl = client.getAuthorizeUrl('weight', redirectUrl);
        console.log('authorization url: ' +authorizationUrl);
        $(event.currentTarget).html('Redirecting to authorization...' +authorizationUrl);
        window.location.replace(authorizationUrl);
    }
});

// Define a couple of routes
Router.route('/', function () {
  this.render('main');
});

Router.route('dashboard', function() {
    this.render('dashboard');
});

Router.route('/authcallback', function() {
    console.log("authenticated, showing the callback url");
    this.render('dashboard');
});
