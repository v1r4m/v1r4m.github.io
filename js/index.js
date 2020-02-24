jQuery(document).ready(function()
{
	container = $('.playerBox');
	play = $('#play');
	pause = $('#pause');
	stop = $('#stop');
	song = new Audio('music/main.mp3');
	song.volume = 0.1;
	duration = song.duration;	
/*	var api_key = "RGAPI-f2f9967a-af66-4f6f-ab42-3090cf29ad2a";
	var lolapi = new XMLHttpRequest();
	lolapi.open("GET", "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"
				+'leagueoflehends' +'?api_key=' + api_key);
	lolapi.send();
	lolapi.onreadystatechange = function()
	{
		if(this.readyState == 200)
		{
			var response = JSON.parse(this.responseText);
			document.getElementById("lol").innerHTML = response.summonerLevel;
		}
	};*/
});


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