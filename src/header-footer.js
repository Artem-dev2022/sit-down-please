///region dropdown\\\
const regionBtn = document.querySelector('.header__top__region__btn');
const regionDropdown = document.querySelector('.header__top__region__dropdown');
const regionArrow = document.querySelector('.header__top__region__arrow');
const regionOption = document.querySelector('.header__top__region__option');
const regionCity = document.querySelectorAll('.header__top__region__city');

regionBtn.addEventListener('click', function(){
  regionDropdown.classList.toggle('region-dropdown-visibility');
  regionArrow.classList.toggle('region-dropdown-rotate');
})

regionCity.forEach(city => {
  city.addEventListener('click', function(){
    let currentCity = regionOption.textContent;
    regionOption.textContent=city.textContent;
    city.textContent = currentCity;
  })
})

///category dropdown\\\
const categoryBtn = document.querySelector('.header__bottom__category__btn');
const categoryDropdown = document.querySelector('.header__bottom__category__dropdown');
const categoryArrow = document.querySelector('.header__bottom__category__arrow');
const categoryTitle = document.querySelector('.header__bottom__category__title');
const categoryItem = document.querySelectorAll('.header__bottom__category__item');

categoryBtn.addEventListener('click', function(){
  categoryDropdown.classList.toggle('category-dropdown-visibility');
  categoryArrow.classList.toggle('category-dropdown-rotate');
})

categoryItem.forEach( item => {
  item.addEventListener('click', function(){
    categoryTitle.textContent=item.textContent
  })
})

document.addEventListener('click', function(e){
  e.target !== regionBtn ? e.target !== regionDropdown ? (regionDropdown.classList.remove('region-dropdown-visibility'), regionArrow.classList.remove('region-dropdown-rotate')) : null : null
  e.target !== categoryBtn ? e.target !== categoryDropdown ? (categoryDropdown.classList.remove('category-dropdown-visibility'), categoryArrow.classList.remove('category-dropdown-rotate')) : null : null
})
///burger menu\\\
const body = document.querySelector('body');
const burger = document.querySelector('.header__mid__burger');
const burgerClose = document.querySelector('.header__mid__close');
const menu = document.querySelector('.header__mid__nav');
const list = document.querySelector('.header__mid__list');
const grayBg = document.querySelector('.gray-bg-on-burger');

burger.addEventListener('click', function(){
  menu.classList.add('burger-open')
  list.classList.add('list-transform')
  body.style.overflow = 'hidden'
  grayBg.classList.add('gray-bg-on-burger-active')
})

function hideBurgerMenu(){
  menu.classList.remove('burger-open')
  list.classList.remove('list-transform')
  body.style.overflow = 'auto'
  grayBg.classList.remove('gray-bg-on-burger-active')
}

burgerClose.addEventListener('click', function(){
  hideBurgerMenu();
})

grayBg.addEventListener('click', function(){
  hideBurgerMenu();
})