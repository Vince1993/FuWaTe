$(document).ready(function () {
    $("#trigram").click(slideInAndOut);
});

function slideInAndOut() {
    $(".main_navigation").toggle(500);
}