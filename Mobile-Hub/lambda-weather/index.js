'use strict';
var FeedParser = require('feedparser');
var http = require('http');

var prefix = 'http://rss.weather.yahoo.co.jp/rss/days/';

exports.handler = function(event, context) {
    console.log(JSON.stringify(event, null, 2));
    console.log(JSON.stringify(context, null, 2));

    var param = '9110';
    if (isFinite(event.id)) {
        param = event.id;
    }
    var feedMeta;
    var items = [];

    http.get(prefix + param + '.xml', function(res) {
        res.pipe(new FeedParser({}))
            .on('error', function(error) {
                console.log(error);
                context.done('error', error);
            })
            .on('meta', function(meta) {
                feedMeta = meta;
            })
            .on('readable', function() {
                var stream = this;
                var item;
                while (item = stream.read()) {
                    var i = {
                        title: item.title,
                        description: item.description,
                        pubdate: item.pubdate,
                        link: item.link,
                        author: item.author
                    };
                    items.push(i);
                }
            })
            .on('end', function() {
                var result = [];
                for (var i=0; i<items.length; i++) {
                    result.push(items[i]['title']);
                }
                context.succeed(result);
            });
    });
};
