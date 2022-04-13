$(document).ready(function () {
    $('#miCaja').mouseenter(mouseEnter);
    $('#miCaja').mouseleave(mouseLeave);
    // $('#miCaja').hover(mouseEnter, mouseLeave);
});

function mouseEnter() {
    console.log('Mouse Enter')
    $('ul li:odd').css('background-color', 'red');
    $('ul li:even').css('background-color', 'blue');
}

function mouseLeave() {
    console.log('Mouse Leave')
    $('ul li:even').css('background-color', 'transparent');
    $('ul li:odd').css('background-color', 'inherit');
}
