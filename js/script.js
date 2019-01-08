var myMap;
var myMap1;
var myMap2;
var myMap3;
var myMap4;
var myMap5;
var myMap6;
var myMapFirm;

ymaps.ready(function() {
    myMap1 = new ymaps.Map("map1", {
        center: [55.746732, 37.763575],
        zoom: 14
    });

    var placemark = new ymaps.Placemark([55.746732, 37.763575],
        {
            balloonContent: 'Россия, г. Москва, Перовская улица, д.16'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    myMap1.geoObjects.add(placemark);

    myMap1.events.add('actiontick');
    if(document.body.clientWidth < 992){
        myMap1.behaviors.disable('drag');
    }

    /*----------------------------------*/
    myMap2 = new ymaps.Map("map2", {
        center: [55.741708, 37.209044],
        zoom: 14
    });

    var placemark = new ymaps.Placemark([55.741708, 37.209044],
        {
            balloonContent: 'сельское поселение Барвихинское'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    myMap2.geoObjects.add(placemark);

    myMap2.events.add('actiontick');
    if(document.body.clientWidth < 992){
        myMap2.behaviors.disable('drag');
    }
    /*-------------------------------------*/
    myMap3 = new ymaps.Map("map3", {
        center: [56.854840, 35.909903],
        zoom: 14
    });

    var placemark = new ymaps.Placemark([56.854840, 35.909903],
        {
            balloonContent: 'Центральный район Тверь'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    myMap3.geoObjects.add(placemark);

    myMap3.events.add('actiontick');
    if(document.body.clientWidth < 992){
        myMap3.behaviors.disable('drag');
    }
    /*------------------------------------------------*/
    myMap4 = new ymaps.Map("map4", {
        center: [58.534011, 31.258566],
        zoom: 14
    });

    var placemark = new ymaps.Placemark([58.534011, 31.258566],
        {
            balloonContent: 'Великий Новгород, Новгородская область, Россия'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    myMap4.geoObjects.add(placemark);

    myMap4.events.add('actiontick');
    if(document.body.clientWidth < 992){
        myMap4.behaviors.disable('drag');
    }

    myMap5 = new ymaps.Map("map5", {
        center: [53.239900, 34.366789],
        zoom: 14
    });

    var placemark = new ymaps.Placemark([53.239900, 34.366789],
        {
            balloonContent: 'Советский район Брянск'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    myMap5.geoObjects.add(placemark);

    myMap5.events.add('actiontick');
    if(document.body.clientWidth < 992){
        myMap5.behaviors.disable('drag');
    }

    myMap6 = new ymaps.Map("map6", {
        center: [55.792298, 49.153822],
        zoom: 14
    });

    var placemark = new ymaps.Placemark([55.792298, 49.153822],
        {
            balloonContent: 'Казань, Республика Татарстан, Россия'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    myMap6.geoObjects.add(placemark);

    myMap6.events.add('actiontick');
    if(document.body.clientWidth < 992){
        myMap6.behaviors.disable('drag');
    }
    /*-------------------------------*/
    myMap = new ymaps.Map("map", {
        center: [55.746732, 37.763575],
        zoom: 5
    });


    var placemark1 = new ymaps.Placemark([55.746732, 37.763575],
        {
            balloonContent: 'Россия, г. Москва, Перовская улица, д.16'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    var placemark2 = new ymaps.Placemark([55.741708, 37.209044],
        {
            balloonContent: 'сельское поселение Барвихинское'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    var placemark3 = new ymaps.Placemark([56.854840, 35.909903],
        {
            balloonContent: 'Центральный район Тверь'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    var placemark4 = new ymaps.Placemark([58.534011, 31.258566],
        {
            balloonContent: 'Великий Новгород, Новгородская область, Россия'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    var placemark5 = new ymaps.Placemark([53.239900, 34.366789],
        {
            balloonContent: 'Советский район Брянск'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    var placemark6 = new ymaps.Placemark([55.792298, 49.153822],
        {
            balloonContent: 'Казань, Республика Татарстан, Россия'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    myMap.geoObjects.add(placemark1);
    myMap.geoObjects.add(placemark2);
    myMap.geoObjects.add(placemark3);
    myMap.geoObjects.add(placemark4);
    myMap.geoObjects.add(placemark5);
    myMap.geoObjects.add(placemark6);

    myMap.events.add('actiontick');
    if(document.body.clientWidth < 992){
        myMap.behaviors.disable('drag');
    }
    /*-------------------------------------------*/
    myMapFirm = new ymaps.Map("mapfirm", {
        center: [59.932607, 30.374963],
        zoom: 14
    });

    var placemarkFirm = new ymaps.Placemark([59.932607, 30.374963],
        {
            balloonContent: '191024, Санкт-Петербург, ул. 5-я Советская, д. 45, офис 104-108'
        },
        {
            iconImageHref: 'images/marker.png',
            iconImageSize: [23, 23],
            iconImageOffset: [-10, -10]
        }
    );

    myMapFirm.geoObjects.add(placemarkFirm);

    myMapFirm.events.add('actiontick');
    if(document.body.clientWidth < 992){
        myMapFirm.behaviors.disable('drag');
    }
    /*-------------------------------------------------*/
});

function centerElements(){
    var leftN = $('.owl-carousel').width() / 2 - $('.owl-dots').width() / 2;
    $('.owl-dots').css('left', leftN);
}

centerElements();

$(window).resize(function(){
    centerElements();
});

$('.show_menu').click(function(){
    $('.float__menu').animate({left: 0}, 300);
});

$('.hide__menu').click(function(){
    $('.float__menu').animate({left: -236}, 300);
});

$('[popup-target]').click(function(e) {
    var el = $(this);
    var target = el.attr('popup-target');

    $('.overlay').fadeIn(200, function(){
        $('.popup.'+target).fadeIn(200);
        var top = document.documentElement.clientHeight / 2 - $('.popup.'+target).height() / 2 + $(window).scrollTop();
        var left = $('body').width() / 2 - $('.popup.'+target).width() / 2;
        left = left - 19;
        $('.popup.'+target).css('top', top).css('left', left);
    })


    return false;
});

$('.overlay, .close1').click(function(e) {
    var popup = $('.popup:visible');
    popup.fadeOut(200, function(){
        $('.overlay').fadeOut(200);
    });
    return false;
});

function keyExit(e){
    if(e.keyCode == 27){

        var popup = $('.popup:visible');
        popup.fadeOut(200, function(){
            $('.overlay').fadeOut(200);
        });

    }
}

addEventListener("keydown", keyExit);

jQuery(function(){
    jQuery(".phone").mask("+7(999) 999-9999");
});

$('.client').click(function(){
    var id = $(this).attr('map');

    $('.ya__maps').hide();

    $('#' + id).show();
});

$('.vac_link').click(function(){
    var id = $(this).attr('vac');

    $('.vac__text').hide();
    $('#' + id).show();
});

$('.faq__link').click(function(){
    var id = $(this).attr('faq');
    $('.faq__link').removeClass('active');
    $(this).addClass('active');

    $('.faq__test').hide();
    $('#' + id).show();
});

$('.checkbox').click(function(){
    var stat = $(this).attr('stat');

    if(stat == 'check'){
        $(this).attr('stat', 'uncheck');
    }else if(stat == 'uncheck'){
        $(this).attr('stat', 'check');
    }
});

$('.card__preview').click(function(){
    var src = $(this).attr('img');

    $('.card-img-big').empty();

    $('.card-img-big').append('<img src = "'+ src + '"/>');
});

$('.tabs li a').click(function(){
    var id = $(this).attr('tab');

    $('.tabs__content').hide();

    $('#' + id).show();

    $('.tabs li').removeClass('active');

    $(this).parent('li').addClass('active');
});

$('.adv__item').click(function(){
    $('.adv__item').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function() {

    $("#slider_clients").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 4
            },
            991: {
                items: 6
            }
        },
        margin: 44,
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        nav: true,
        navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
    });

    $("#slider_partners").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 2
            },
            991: {
                items: 3
            }
        },
        margin: 21,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: true,
        autoWidth: false,
        nav: false,
        navText: ['', ''],
    });

    $("#slider_command").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 2
            },
            991: {
                items: 3
            }
        },
        margin: 16,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: true,
        autoWidth: false,
        nav: false,
        navText: ['', ''],
    });

    $("#slider_reviews").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
    });

    $("#slider_portfolio").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
    });

    $("#slider_materials").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
    });

    $("#slider_preview").owlCarousel({
        responsive: {
            0: {
                items: 2
            },
            570: {
                items: 3
            },
            600: {
                items: 4
            },
            991: {
                items: 4
            }
        },
        margin: 0,
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev.png" alt = ""/>', '<img src = "images/next.png" alt = ""/>'],
    });

    $("#slider__news").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 2
            },
            600: {
                items: 2
            },
            991: {
                items: 3
            }
        },
        margin: 24,
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
    });

    $("#slider_adv").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            570: {
                items: 1
            },
            600: {
                items: 1
            },
            991: {
                items: 1
            }
        },
        margin: 0,
        loop: false,
        autoplay: false,
        autoplayTimeout: 3000,
        touchDrag: true,
        dots: false,
        autoWidth: false,
        nav: true,
        navText: ['<img src = "images/prev1.png" alt = ""/>', '<img src = "images/next1.png" alt = ""/>'],
    });

    $('#adv__item1').click(function(){
        $("#slider_adv").trigger('to.owl.carousel', [0, 300]);
    });

    $('#adv__item2').click(function(){
        $("#slider_adv").trigger('to.owl.carousel', [1, 300]);
    });

    $('#adv__item3').click(function(){
        $("#slider_adv").trigger('to.owl.carousel', [2, 300]);
    });

    $('#adv__item4').click(function(){
        $("#slider_adv").trigger('to.owl.carousel', [3, 300]);
    });

    $('#adv__item5').click(function(){
        $("#slider_adv").trigger('to.owl.carousel', [4, 300]);
    });

    $("#slider_adv").on('dragged.owl.carousel', function(event) {
        var in_owl = event.item.index;
        if (in_owl == 0) {
            $('.adv__item').removeClass('active');
            $('#adv__item1').addClass('active');
        } else if (in_owl == 1) {
            $('.adv__item').removeClass('active');
            $('#adv__item2').addClass('active');
        } else if(in_owl == 2){
            $('.adv__item').removeClass('active');
            $('#adv__item3').addClass('active');
        }else if(in_owl == 3){
            $('.adv__item').removeClass('active');
            $('#adv__item4').addClass('active');
        }else if(in_owl == 4){
            $('.adv__item').removeClass('active');
            $('#adv__item5').addClass('active');
        }
    });

    $("#slider_adv .owl-next").click(function(){
        $a = $(".adv__item.active");
        $x = $(this).hasClass('prev') ? $a.prev() : $a.next();

        if($x.length > 0){
            $x.add($a).toggleClass('active');
        }
    });

    $("#slider_adv .owl-prev").click(function(){
        $a = $(".adv__item.active");
        $x = $(this).hasClass('next') ? $a.next() : $a.prev();

        if($x.length > 0){
            $x.add($a).toggleClass('active');
        }
    });
});