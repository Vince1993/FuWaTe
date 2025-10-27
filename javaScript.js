$(document).ready(function () {
    $("#trigram").click(slideInAndOut);
    $('#link_to_top').click(scrollToTop);
});

function slideInAndOut() {
    $(".main_navigation").toggle(500);}

function scrollToTop(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
    return false;}

