// АНИМАЦИЯ шкал
$("#js-animationGraph").on('scrollSpy:enter', function() {
    document.getElementById("js-animationGraph").childNodes[1].childNodes[2].classList.add("animationGraph1");
    document.getElementById("js-animationGraph").childNodes[3].childNodes[1].classList.add("animationGraph2");
    document.getElementById("js-animationGraph").childNodes[5].childNodes[1].classList.add("animationGraph3");
    document.getElementById("js-animationGraph").childNodes[7].childNodes[1].classList.add("animationGraph4");
});
$("#js-animationGraph").scrollSpy();


//ТРЕУГОЛЬНИК ХЕДЕРА
$("#js-scrollSpyHeader").on('scrollSpy:enter', function() {
    const headerBodyWidth = $(".backgroundHeader").width();
    $("#js-backgroundHeader").addClass("triangleHeader");
    $(".triangleHeader").css({
        "border-left": headerBodyWidth / 2 + "px outset transparent",
        "border-right": headerBodyWidth / 2 + 'px outset transparent'
    });
});
$("#js-scrollSpyHeader").on('scrollSpy:exit', function() {
    $("#js-backgroundHeader").removeClass("triangleHeader");
    $("#js-backgroundHeader").removeAttr("style");
});
$("#js-scrollSpyHeader").scrollSpy();


//ТРЕУГОЛЬНИК ВОЗЛЕ "ЧТО МЫ ДЕЛАЕМ"
$("#js-services").on('scrollSpy:enter', function() {
    const serviceBodyWidth = $(".servicesBody").width();
    $("#js-services").addClass("triangleService");
    $(".triangleService").css({
        "border-left": serviceBodyWidth / 2 + "px outset transparent",
        "border-right": serviceBodyWidth / 2 + 'px outset transparent'
    });
});
$("#js-services").on('scrollSpy:exit', function() {
    $("#js-services").removeClass("triangleService");
    $("#js-services").removeAttr("style");
});
$("#js-services").scrollSpy();


//ТРЕУГОЛЬНИК ПОРТФОЛИО
$("#js-portfolio").on('scrollSpy:enter', function() {
    const portfolioBodyWidth = $(".portfolioBody").width();
    $("#js-portfolio").addClass("trianglePortfolio");
    $(".trianglePortfolio").css({
        "border-left": portfolioBodyWidth / 2 + "px outset transparent",
        "border-right": portfolioBodyWidth / 2 + 'px outset transparent'
    });
});
$("#js-portfolio").on('scrollSpy:exit', function() {
    $("#js-portfolio").removeClass("trianglePortfolio");
    $("#js-portfolio").removeAttr("style");
});
$("#js-portfolio").scrollSpy();

//ТРЕУГОЛЬНИК КТО МЫ?
$("#js-aboutUs").on('scrollSpy:enter', function() {
    const aboutUsBodyWidth = $(".aboutUsBody").width();
    $("#js-aboutUs").addClass("aboutUsTriangle");
    $(".aboutUsTriangle").css({
        "border-left": aboutUsBodyWidth / 2 + "px outset transparent",
        "border-right": aboutUsBodyWidth / 2 + 'px outset transparent'
    });
});
$("#js-aboutUs").on('scrollSpy:exit', function() {
    $("#js-aboutUs").removeClass("aboutUsTriangle");
    $("#js-aboutUs").removeAttr("style");
});
$("#js-aboutUs").scrollSpy();

//ТРЕУГОЛЬНИК ПОДПИСАТЬСЯ
$("#js-subscribe").on('scrollSpy:enter', function() {
    const subscribeBodyWidth = $(".aboutUsBody").width();
    $("#js-subscribe").addClass("subscribeTriangle");
    $(".subscribeTriangle").css({
        "border-left": subscribeBodyWidth / 2 + "px outset transparent",
        "border-right": subscribeBodyWidth / 2 + 'px outset transparent'
    });
});
$("#js-subscribe").on('scrollSpy:exit', function() {
    $("#js-subscribe").removeClass("subscribeTriangle");
    $("#js-subscribe").removeAttr("style");
});
$("#js-subscribe").scrollSpy();

//ИЗМЕНЕНИЕ ШИРИНЫ ТРЕУГОЛЬНИКОВ ПРИ ИЗМЕНЕНИИ ШИРИНЫ ЭКРАНА
$(window).resize(function () {
    const headerBodyWidth = $(".backgroundHeader").width();
    const serviceBodyWidth = $(".servicesBody").width();
    const portfolioBodyWidth = $(".portfolioBody").width();
    const aboutUsBodyWidth = $(".aboutUsBody").width();
    const subscribeBodyWidth = $(".aboutUsBody").width();

    $(".triangleHeader").css({
        "border-left": headerBodyWidth / 2 + "px outset transparent",
        "border-right": headerBodyWidth / 2 + 'px outset transparent'
    });
    $(".triangleService").css({
        "border-left": serviceBodyWidth / 2 + "px outset transparent",
        "border-right": serviceBodyWidth / 2 + 'px outset transparent'
    });
    $(".trianglePortfolio").css({
        "border-left": portfolioBodyWidth / 2 + "px outset transparent",
        "border-right": portfolioBodyWidth / 2 + 'px outset transparent'
    });
    $(".aboutUsTriangle").css({
        "border-left": aboutUsBodyWidth / 2 + "px outset transparent",
        "border-right": aboutUsBodyWidth / 2 + 'px outset transparent'
    });
    $(".subscribeTriangle").css({
        "border-left": subscribeBodyWidth / 2 + "px outset transparent",
        "border-right": subscribeBodyWidth / 2 + 'px outset transparent'
    });
});


// Удаление треугольника с хедера при обновлении страницы
if(window.pageYOffset>300){
    $("#js-backgroundHeader").removeClass("triangleHeader");
}




$(".burger").click(()=>{
    $("nav").toggleClass("burgerVisibility");
});
