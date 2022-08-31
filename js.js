
$(function () {
    var pull = $('#pull');
    menu = $('nav ul');
    menuHeight = menu.height();
    p = $('.text');

    $(pull).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle(); s
        p.css("marginTop", "300px");
    });
});

$(window).resize(function () {
    var w = $(window).width();
    if (w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
});

let btn_st = document.querySelector(".button-style");

let pic1 = document.getElementById('1');
let pic2 = document.getElementById('2');
let pic3 = document.getElementById('3');
let pic4 = document.getElementById('4');

let flexPic1 = document.querySelector(".flex-portf-imgs1");
let flexPic2 = document.querySelector(".flex-portf-imgs2");

function btnClick() {
    btn_st.style.textTransform = "lowercase";
    btn_st.style.boxShadow = "0px 0px 10px 10px #865c48";
}



function portfClickWeb() {
    if (pic1.hidden == true) {
        pic1.hidden = false;
    }
    pic2.hidden = true;
    pic3.hidden = true;
    pic4.hidden = true;
}

function portfClickApp() {
    if (pic2.hidden == true && pic3.hidden == true) {
        pic2.hidden = false;
        pic3.hidden = false;
    }
    pic1.hidden = true;
    pic4.hidden = true;
}

function portfClickIc() {
    if (pic4.hidden == true) {
        pic4.hidden = false;
    }

    pic1.hidden = true;
    pic2.hidden = true;
    pic3.hidden = true;
}

function portfClickAll() {
    pic1.hidden = false;
    pic2.hidden = false;
    pic3.hidden = false;
    pic4.hidden = false;
}

