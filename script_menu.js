$(document).ready(function(){
    $("#header_menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
$(function () {
    $('input[type="tel"]').mask('+375(00)000-00-00');
});

$(document).ready(function() {
    $('#zak, .call_master, .dop_btn').click(function(event) {
        $('.dop_section').toggleClass('active');
    });
});