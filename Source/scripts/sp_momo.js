// JavaScript source code Dessert Cafe MOMO
// Scripted by : Suim Park
// Script Date : 12 December, 2017

function resizeBrowser()
{
    var w = window.innerWidth;

    if (w < 768) {
        var snIcons = document.getElementsByClassName("btn-social-icon");
        for (var i = 0; i < snIcons.length; i++) {
            snIcons[i].classList.remove("btn-sm");
            snIcons[i].classList.add("btn-xs");
        }
    } else {
        var snIcons = document.getElementsByClassName("btn-social-icon");
        for (var i = 0; i < snIcons.length; i++) {
            snIcons[i].classList.remove("btn-xs");
            snIcons[i].classList.add("btn-sm");
       }
    }

    if (w < 400) {
        document.footer.div.div.button[3];
    }
}