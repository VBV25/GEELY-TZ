$(document).ready(function() {
    /*-------Start------*/

    //----fancybox
    $('.advertising-form-block').fancybox({
        "hideOnOverlayClick": true,
        "overlayShow": true,
        "overlayOpacity": 0.7,
    });

    $('.policy-popup').fancybox({
        "hideOnOverlayClick": true,
        "overlayShow": true,
        "overlayOpacity": 0.7,
    });
    $('.nav-contact-popup').fancybox({
        "hideOnOverlayClick": true,
        "overlayShow": true,
        "overlayOpacity": 0.7,
    });



    //----Слайдеры---
    $('.advertising-block__text-wrapper').slick({
        //------свойства слайдера-----
        fade: true,
        //---стрелки-
        arrows: false,

        //--скорость пролистывания
        speed: 1000,
        //--бесконечность!!!
        infinite: true,
        //--свайп мышкой и пальцем
        draggable: true,
        swipe: true,
        touchThreshold: 3,
        touchMove: true,
        autoplay: true,
        autoplaySpeed: 3500,


    });
    $('.photo-slider').slick({
        //------свойства слайдера-----
        //---стрелки-
        arrows: true,
        //--количество отображаемых слайдов
        slidesToShow: 3,
        //--количество пролистываемых слайдов
        slidesToScroll: 1,
        //--скорость пролистывания
        speed: 1000,
        //--бесконечность!!!
        infinite: true,
        //--свайп мышкой и пальцем
        draggable: true,
        swipe: true,
        touchThreshold: 3,
        touchMove: true,
        //--вертикальный слайдер
        vertical: true,
        verticalSwiping: true,
        //адаптивность
        responsive: [{
            breakpoint: 768.5,
            settings: {
                vertical: false,
                verticalSwiping: false,
            },
        }, ],
    });
    //
    $('.car-slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.car-slider__bullet'),
        fade: true,
        speed: 1000,
        infinite: true,
        draggable: true,
        swipe: true,
        touchThreshold: 3,
        touchMove: true,
    });

    //

    //-----мобильное-меню----
    $('.navigation-block__menu-mobile').click(function() {
        $('.navigation-block__menu').css('right', '0%');
        $('body,html').addClass('hidden');
    });
    $('.navigation-block__model-mobile').click(function() {
        $('.navigation-block__model').css('left', '0%');
        $('body,html').addClass('hidden');
    });
    $('.navigation-block__btn-exit').click(function() {
        $('.navigation-block__model').attr('style', '');
        $('.navigation-block__menu').attr('style', '');
        $('body,html').removeClass('hidden');
    })
    $('.navigation-block__link').click(function() {
        $('.navigation-block__model').attr('style', '');
        $('.navigation-block__menu').attr('style', '');
        $('body,html').removeClass('hidden');
    })


    //---изменение-размера-экрана----
    $(window).resize(function() {
        //перезагрузка слайдера при изменении размера экрана
        $('.photo-slider').slick('setPosition');
        $('.car-slider').slick('setPosition');
    });
    //----------------------
    $('.model-link').click(function() {
        $('.model-link').removeClass('active-nav-link');
        $(this).addClass('active-nav-link');
        var textModelBtn = $(this).text().toLowerCase();
        console.log(textModelBtn);

        $('.model-car-text').text(textModelBtn)
            //--меняем фото в зависимости от модели--
        var galeryAllPhotoCar = $('.car-splice')
        $.each(galeryAllPhotoCar, function(i, key) {
            var galeryPhotoCarAttr = key.getAttribute('src');
            var galeryPhotoCarArrSplit = galeryPhotoCarAttr.split('/');
            galeryPhotoCarArrSplit.splice(1, 1, textModelBtn);
            var nevSrcGaleryPhotoCar = galeryPhotoCarArrSplit.join('/');
            key.setAttribute('src', nevSrcGaleryPhotoCar);

        })
        $('.photo-slider').slick('setPosition');
        $('.car-slider').slick('setPosition');
    })

    //------------------------------

});