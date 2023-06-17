$(document).ready(function () {
  /*-------Start------*/
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
    //
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
});
