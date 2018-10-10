// For News Container

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

// For Event Container

$('#events .events-container img').mouseover(function(){
    var parent = $(this).parent('.event-column');
    parent.children('img').addClass('zoom');
    parent.find('h3').addClass('textColor');
});

$('#events .events-container img').mouseout(function(){
    var parent = $(this).parent('.event-column');
    parent.children('img').removeClass('zoom');
    parent.find('h3').removeClass('textColor');
});

$('#events .events-container h3').mouseover(function(){
    var parent = $(this).parent('.content').parent('.event-column');
    parent.children('img').addClass('zoom');
    parent.find('h3').addClass('textColor');
});

$('#events .events-container h3').mouseout(function(){
    var parent = $(this).parent('.content').parent('.event-column');
    parent.children('img').removeClass('zoom');
    parent.find('h3').removeClass('textColor');
});

