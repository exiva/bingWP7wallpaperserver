var rereddit = require('rereddit');

var redditimg = module.exports.redditmg = function redditimg(callback) {
	rereddit.read('CityPorn').limit(10)
    	.end(function(err, posts) {
        // console.log(posts);
        console.log(posts.data.children[1].data.url);
        callback(false, posts.data.children[1].data.url);
    });
    }