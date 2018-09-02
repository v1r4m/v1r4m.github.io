// Basic Javascript
$(function(){
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
}