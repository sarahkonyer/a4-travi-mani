$(document).ready(function(){
	$("#herbs > li").find("img").click(function(){
		var herb = $(this).closest(".name");
		var answer = herb.data("herb");
		var type = $('<p class="type">'+answer+'</p>');
		herb.append(type);
	});
});