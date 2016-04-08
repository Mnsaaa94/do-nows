$(document).ready(function()) {
	var name = "";
	$("#first-name").on("click" function(e) {
		e.preventDefault();
		name = $("#first-name").val();
		console.log(name);
		$("#show-name").text(name);
	})
})