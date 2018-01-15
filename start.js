$(document).ready(function () {
    $('h2').on('mouseenter', function () {
        $(this).css({
            color: '#34aa22'
        });
    }).on('mouseleave', function () {
        $(this).css({
            color: 'black'
        });
    });
});