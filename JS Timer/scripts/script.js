var countDate=new Date("Feb 15, 2022 12:00:00").getTime();
var tem=setInterval(timeDown,1000);
function timeDown(){
	var today=new Date().getTime();
	var dist=countDate-today;
	var days = Math.floor(dist / (1000 * 60 * 60 * 24));
	var hours = Math.floor((dist% (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minutes = Math.floor((dist % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((dist % (1000 * 60)) / 1000);

	if(dist>=0){
	document.getElementById('time').innerHTML=days+"D: "+hours+"H: "+minutes+"M: "+seconds+"S";}
	else
	{
		document.getElementById('time').innerHTML="Its Credenz Day!";
	}
}