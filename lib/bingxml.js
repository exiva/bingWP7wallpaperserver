var et = require('elementtree');

var XML = et.XML;
var ElementTree = et.ElementTree;
var element = et.Element;
var subElement = et.SubElement;

var date = new Date();

function createxml() {
	var root = element('images');
	root.set('market', 'en-ww');

	var images = subElement(root, 'image');

	var startdate = subElement(images, 'startdate');
	startdate.text = date.getYear()+pad2(date.getMonth())+pad2(date.getDate());

	var fullstartdate = subElement(images, 'fullstartdate');
	fullstartdate.text = date.getYear()+pad2(date.getMonth())+pad2(date.getDate())+'0000';

	var enddate = subElement(images, 'enddate');
	enddate.text = date.getYear()+pad2(date.getMonth())+pad2(date.getDate()+1); //tomorrow's date

	var url = subElement(images, 'url'); // I don't think this is used. Maybe for bing.com requests.
	url.text = "/wallpaper.jpg";

	var urlbase = subElement(images, 'urlBase'); 
	urlbase.text = "/wallpaper";

	var mobileurlbase = subElement(images, 'mobileUrlBase');
	mobileurlbase.text = "/wallpaper"; //request format fufilled by device. Should end with _480x800.jpg use static for proxy requests

	var copyright = subElement(images, "copyright");
	copyright.text = "Bing Wallpaper Server by exiva";

	var copyrightlink = subElement(images, 'copyrightlink');
	copyrightlink.text = "javascript:void(0)"; //seems unused on mobile

	var copyrightsource = subElement(images, 'copyrightsource');
	copyrightsource.text = "/r/somereddit";

	var drk = subElement(images, 'drk');
	drk.text = "1"; //dark 1 or light 0 bing logo

	var top = subElement(images, 'top');
	top.text = "1"; //No clue.

	var bot = subElement(images, 'bot');
	bot.text = "1"; //No clue.

	var hotspots = subElement(images, 'hotspots'); //appears unused
	var messages = subElement(images, 'messages'); //appears unused

	var tooltips = subElement(root, 'tooltips'); //this whole thing is unused on mobile. Creating to not break parsing.

	var loadmessage = subElement(tooltips, 'loadMessage');
	var message = subElement(loadmessage, 'message');
	message.text = "Loading...";

	var previousimage = subElement(tooltips, 'previousImage');
	var txt = subElement(previousimage, 'text');
	txt.text = "Previous";

	var nextimage = subElement(tooltips, 'nextImage');
	var txt = subElement(nextimage, 'text');
	txt.text = "Next"

	etree = new ElementTree(root);
	xml = etree.write({'xml_declaration': true});

	return xml;
}

// var bingxml = 

var bingxml = module.exports.bingxml = function bingxml(callback) {
  callback(false, createxml());
};

// console.log(xml);

function pad2(number) {
	return (number < 10 ? '0' : '') + number
}