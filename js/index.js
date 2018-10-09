$('#news .news-container img, #news .news-container h3').mouseover(function(){
    var parent = $(this).parent();
    parent.children('img').addClass('zoom');
    parent.children('h3').addClass('textColor');
});

$('#news .news-container img, #news .news-container h3').mouseout(function(){
    var parent = $(this).parent();
    parent.children('img').removeClass('zoom');
    parent.children('h3').removeClass('textColor');
});

$('#events .events-container img, #events .events-container h3').mouseover(function(){
    var parent = $(this).parent();
    parent.children('img').addClass('zoom');
    parent.children('h3').addClass('textColor');
});

$('#events .events-container img, #events .events-container h3').mouseout(function(){
    var parent = $(this).parent();
    parent.children('img').removeClass('zoom');
    parent.children('h3').removeClass('textColor');
});