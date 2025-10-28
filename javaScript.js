$(document).ready(function () {
    $("#trigram").click(slideInAndOut);
    $(".gallery > img").click(zoomInPic);
    $("#link_to_top").click(scrollToTop);
    
});

function slideInAndOut() {
    $(".main_navigation").toggle(500);}

function zoomInPic() {
    $(this).toggleClass("zoom");
    $(this).siblings().toggle();}

function scrollToTop(){
    $("html, body").animate({ scrollTop: 0 }, 'slow');
    return false;}

