
// $(function () {
//     // 스크롤 시 header fade-in
//     $(document).on('scroll', function () {
//         if ($(window).scrollTop() > 200) {
//             $("#header").removeClass("deactive");
//             $("#header").addClass("active");
//         } else {
//             $("#header").removeClass("active");
//             $("#header").addClass("deactive");
//         }
//     })

// });

// $(function () {
//     var wrap = $('#gnbWrap');
//     var menu = $('#gnb>li');
//     var menuHeight = menu.find('>a').height();
//     var header = $('#header');

//     menu.on({
//         mouseover: function () {
//             var tg = $(this);
//             tg.addClass('on');

//             header.css({ 
//                 'background': '#151515', 
//                 'transition': 'none', 
//                 'height':'66px'
//             });
            
//             var th = menuHeight + tg.find('>.sGnbArea').height();
//             //console.log(th)
//             wrap.stop().animate({ 'height': th }, 200)
//         }, mouseout: function () {
//             var tg = $(this);
//             tg.removeClass('on');
//             header.css({ 
//                 'background': '', 
//                 'transition': 'none' ,
//                 'height':'66px'
//             });
//             var th = menuHeight;
//             // console.log(th)
//             wrap.stop().animate({ 'height': th }, 200);
//         }
//     });
// });




$(function () {
    // 스크롤 시 header fade-in
    $(document).on('scroll', function () {
        if ($(window).scrollTop() > 200 && $(window).width() > 767) {
            $("#header").removeClass("deactive");
            $("#header").addClass("active");
        } else {
            $("#header").removeClass("active");
            $("#header").addClass("deactive");
        }
    })
});

$(function () {
    var wrap = $('#gnbWrap');
    var menu = $('#gnb>li');
    var menuHeight = menu.find('>a').height();
    var header = $('#header');

    menu.on({
        mouseover: function () {
            var tg = $(this);
            tg.addClass('on');

            if ($(window).width() > 767) {
                header.css({ 
                    'background': '#151515', 
                    'transition': 'none', 
                    'height':'66px'
                });
                
                var th = menuHeight + tg.find('>.sGnbArea').height();
                wrap.stop().animate({ 'height': th }, 200);
            }
        }, 
        mouseout: function () {
            var tg = $(this);
            tg.removeClass('on');

            if ($(window).width() > 767) {
                header.css({ 
                    'background': '', 
                    'transition': 'none' ,
                    'height':'66px'
                });
                
                var th = menuHeight;
                wrap.stop().animate({ 'height': th }, 200);
            }
        }
    });
});
