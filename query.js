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

    $('p').each(function () {
        if ($(this).css('marginLeft') === '15px') {
            $(this).on("mouseenter", function () {
                $(this).css({
                    borderLeftStyle: "solid",
                    borderLeftColor: "#C5F891",
                    borderLeftWidth: '15px',
                    marginLeft: '15px'
                });
            }).on('mouseleave', function () {
                $(this).css({
                    borderLeftStyle: "none",
                    borderLeftColor: "none"
                });
            });
        }
    });
    $("img").on('mouseenter', function () {
        $(this).css({
            width: '100%'
        });
    }).on('mouseleave', function () {
        $(this).css({
          width: '30%'
        })
    })
});