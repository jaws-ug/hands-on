'use strict';
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

exports.handler = function(event, context) {
    console.log(JSON.stringify(event, null, 2));
    console.log(JSON.stringify(context, null, 2));

    var postMessage = 'We love AWS!';
    if (event.tweet) {
        postMessage = event.tweet;
    }
    client.post('statuses/update', {status: postMessage},  function(error, tweet, response){
        if (error) {
            console.log(error);
            context.done('error getting object', error);
        } else {
            console.log(tweet);
            context.succeed(postMessage);
        }
    });
};
