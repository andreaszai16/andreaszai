function openNav() {
    document.getElementById("sidebar").style.width = "135px";
    document.getElementById("sidebar").style.padding = "20px 20px";

    document.getElementById("content").style.marginLeft = "180px";

    document.getElementById("closebtn").style.transition = "0.3s 0.3s";
    document.getElementById("closebtn").style.visibility = "visible";
    document.getElementById("closebtn").style.opacity = "1";

    document.getElementById("hamburger").style.transition = "0s";
    document.getElementById("hamburger").style.visibility = "hidden";
    document.getElementById("hamburger").style.opacity = "0";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("sidebar").style.padding = "20px 0px";

    document.getElementById("content").style.marginLeft = "45px";

    document.getElementById("closebtn").style.transition = "0s";
    document.getElementById("closebtn").style.visibility = "hidden";
    document.getElementById("closebtn").style.opacity = "0";

    document.getElementById("hamburger").style.transition = "0.3s 0.3s";
    document.getElementById("hamburger").style.visibility = "visible";
    document.getElementById("hamburger").style.opacity = "1";
}