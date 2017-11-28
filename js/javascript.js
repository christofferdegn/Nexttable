$( document ).ready(function() {
    

$('.Fri').click(function(){
    $(this).parent().addClass('free').removeClass('busy reserved');


});
$('.Optaget').click(function(){
    $(this).parent().addClass('busy').removeClass('reserved free');

});
$('.Reserveret').click(function(){
    $(this).parent().addClass('reserved').removeClass('busy free');

});
});