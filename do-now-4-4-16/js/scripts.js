$(".animate-on-mouseenter").on("mouseenter", function() {
	$(this).toggleClass("animated bounce");
})/*.on("mouseleave", function() {
	$(this).toggleClass("animated bounce");
}*/

$(".animate-on-mouseenter-2").on("mouseenter", function() {
	$(this).toggleClass("animated flipInX");
});

$(".animate-on-mouseenter-3").on("mouseenter", function() {
	$(this).toggleClass("animated rubberBand");
});
/*
$(".animate-on-click").on("click", function() {
	$(this).prev().addClass("animated bounce");
};
*/