jQuery(document).ready(function()
{
	container = $('.playerBox');
	play = $('#play');
	pause = $('#pause');
	stop = $('#stop');
	song = new Audio('music/main.mp3');
	song.volume = 0.1;
	duration = song.duration;	
});

function Pinger_ping(ip, callback) {

	if(!this.inUse) {
  
	  this.inUse = true;
	  this.callback = callback
	  this.ip = ip;
  
	  var _that = this;
  
	  this.img = new Image();
  
	  this.img.onload = function() {_that.good();};
	  this.img.onerror = function() {_that.good();};
  
	  this.start = new Date().getTime();
	  this.img.src = "http://caujg.herokuapp.com/" + ip;
	  this.timer = setTimeout(function() { _that.bad();}, 1500);
  
	}
  }

$('#play').click(function()
{
	song.play();
	console.log("clicked");
});

$('#pause').click(function()
{
	song.pause();
});

$('#stop').click(function()
{
	song.pause();
	song.currentTime=0;
});

$("#seek").bind("change",function()
{
	song.volume = $(this).val()/100;
	console.log($(this).val());
});