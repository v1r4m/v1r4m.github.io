jQuery(document).ready(function() {
	container = $('.playerBox');
	play = $('#play');
	pause = $('#pause');
	stop = $('#stop');
	song = new Audio('music/main.mp3');
	song.volume = 0.1;
	duration = song.duration;
	/*play.live('click', function(e){
		e.preventDefault();
		song.play();
	});

	pause.live('click', function(e){
		e.preventDefault();
		song.pause();
	});

	$('#stop').click(function(e){
		e.preventDefault();
		container.removeClass('containerLarge');
		cover.removeClass('coverLarge');
		song.pause();
		song.currentTime=0;
	});

	$("#seek").bind("change",function() {
		song.volume = $(this).val();
	});*/
	
});
$('#play').click(function(){
	song.play();
	console.log("clicked");
});

$('#pause').click(function(){
	song.pause();
});

$('#stop').click(function(){
	song.pause();
	song.currentTime=0;
});

$("#seek").bind("change",function() {
	song.volume = $(this).val()/100;
	console.log($(this).val());
});


// Basic Javascript
/*$(function(){
	// Trigger maximage
	jQuery('#maximage').maximage();
});

$(function(d){
	var img = d.getElementById("logo");
	img.onmouseover = function ()
	{
		this.src = "logo1.png";
	};
		img.onmouseout = function ()
	{
			this.src = "logo2.png"; 
	};
}*/