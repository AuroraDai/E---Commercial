//responsive navbar
let hamburger = document.querySelector('.hamburger');
let mobile_menu = document.querySelector('.nav_list');
let navBar = document.querySelector('.navBar');
let nav_ul = document.querySelector('.nav_ul')


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');


})

mobile_menu.addEventListener('click', () => {
    nav_ul.classList.toggle('active');
    hamburger.classList.toggle('active');
})
