$.getJSON('http://en.wikipedia.org/w/api.php?action=parse&page=Albert_Einstein&prop=text&format=json&callback=?', function(json) {
    $('#einstein_info').html(json.parse.text['*']);
    $("#einstein_info").find("a:not(.references a)").attr("href", function(){ return "http://www.wikipedia.org" + $(this).attr("href");});
    $("einstein_info").find("a").attr("target", "_blank");
 });

$(document).ready(function(){
	$(".hamburger").on("click",function(){
		$("aside").toggleClass("open");
	});
});