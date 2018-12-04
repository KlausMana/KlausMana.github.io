//JavaScript is one of my strongest points, but it is mainly used for design purposes such as animations here. Anyway, feel free to check it out!

$(document).ready(function () {

//Making the divs the same height
var theHeight = $('.page').height();
var stringHeight = theHeight.toString() + 'px';
$('.contacts').css('min-height', stringHeight);
$('.portfolio').css('min-height', stringHeight);


//Making the top bar appear.
    $('#topBar').fadeIn(1000).removeClass('hidden');
    $('.topBarMain').fadeIn(2000).removeClass('hidden');
    $('.topBarSecondary').fadeIn(4000).removeClass('hidden');

//Making the top bar the same width as the Main page
    $("#topBar").css({
    'width': ($(".page").width() + 'px')
    })

//Initializing the Slider for use in Testimonials
    $('.slider').slider();
});
