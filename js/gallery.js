$(function () {
    $("#galleryAll").load("gallery-all.html");
    $("#gallerySports").load("gallery-sports.html");
    $("#galleryGatherings").load("gallery-gatherings.html");
    $("#galleryCelebrations").load("gallery-celebrations.html");
});

function doCollapse(clickedLink) {

    var allCollapsibleDivs = document.getElementsByClassName("collapse");

    for (const element of allCollapsibleDivs) {
        element.classList.remove("in");
    }

    if (document.getElementById("link1").classList.contains("link-active")) {
        document.getElementById("link1").classList.remove("link-active");
    }
    if (document.getElementById("link2").classList.contains("link-active")) {
        document.getElementById("link2").classList.remove("link-active");
    }
    if (document.getElementById("link3").classList.contains("link-active")) {
        document.getElementById("link3").classList.remove("link-active");
    }
    if (document.getElementById("link4").classList.contains("link-active")) {
        document.getElementById("link4").classList.remove("link-active");
    }

    clickedLink.classList.add("link-active");

}