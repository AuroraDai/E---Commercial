

//nav bar


$('.nav_ul li').hover(function(){
    $(this).children('.dropdown-container').stop().slideToggle(200);


})



//carousel 
let carousel_slide = document.querySelector('.carousel-slide');
let pics = carousel_slide.querySelector('.pics');
let dotlist = document.querySelector('.dotlist');

var frameWidth = carousel_slide.offsetWidth;
var timer = null;
var num = 0;
var circle = 0;

for (var i = 0; i < pics.children.length; i++) {
    var li = document.createElement('li');

    li.setAttribute('index', i);
    dotlist.appendChild(li);

    //dotlist click change color
    li.addEventListener('click', function () {
        for (var i = 0; i < dotlist.children.length; i++) {
            dotlist.children[i].className = '';
        }
        this.className = 'active';

        var index = this.getAttribute('index');

        num = circle = index;

        animation(pics, -(index * frameWidth), 15);
    })
}

dotlist.children[0].className = 'active';

//clone the first img
var firstPic = pics.children[0].cloneNode(true);
pics.appendChild(firstPic);



var timer = setInterval(function () {
        if (num == pics.children.length - 1) {
            pics.style.left = 0;
            num = 0;
        }
        num++;
        animation(pics, -(num * frameWidth), 15);
        circle++;
        if (circle == dotlist.children.length) {
            circle = 0;
        }
        for (var i = 0; i < dotlist.children.length; i++) {
            dotlist.children[i].className = '';
        }
        dotlist.children[circle].className = 'active';

}, 4000)



