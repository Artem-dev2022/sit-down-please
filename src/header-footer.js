///region dropdown\\\
const regionBtn = document.querySelector('.header__top__region__btn');
const regionDropdown = document.querySelector('.header__top__region__dropdown');
const regionArrow = document.querySelector('.header__top__region__arrow');

regionBtn.addEventListener('click', function(){
  regionDropdown.classList.toggle('region-dropdown-visibility');
  regionArrow.classList.toggle('region-dropdown-rotate');
})


///category dropdown\\\
const categoryBtn = document.querySelector('.header__bottom__category__btn');
const categoryDropdown = document.querySelector('.header__bottom__category__dropdown');
const categoryArrow = document.querySelector('.header__bottom__category__arrow');

categoryBtn.addEventListener('click', function(){
  categoryDropdown.classList.toggle('category-dropdown-visibility');
  categoryArrow.classList.toggle('category-dropdown-rotate');
})


document.addEventListener('click', function(e){
  e.target !== regionBtn ? e.target !== regionDropdown ? (regionDropdown.classList.remove('region-dropdown-visibility'), regionArrow.classList.remove('region-dropdown-rotate')) : null : null
  e.target !== categoryBtn ? e.target !== categoryDropdown ? (categoryDropdown.classList.remove('category-dropdown-visibility'), categoryArrow.classList.remove('category-dropdown-rotate')) : null : null
})