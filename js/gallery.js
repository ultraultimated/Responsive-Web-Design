$(function(){
    $("#galleryAll").load("gallery-all.html");
    $("#gallerySports").load("gallery-sports.html");
    $("#galleryGatherings").load("gallery-gatherings.html");
    $("#galleryCelebrations").load("gallery-celebrations.html");
  });

function doCollapse() {
    
    var allCollapsibleDivs = document.getElementsByClassName("collapse");

    for (const element of allCollapsibleDivs) {
        element.classList.remove("in");
    }

}