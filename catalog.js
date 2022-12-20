let slider = document.getElementById('range-slider');
const from = document.querySelector('.price-from');
const to = document.querySelector('.price-to');

noUiSlider.create(slider, {
    start: [2000, 150000],
    connect: true,
    range: {
        'min': 0,
        'max': 180000
    }
});

from.addEventListener('change', function(){
    slider.noUiSlider.set([from.value, to.value]);
})

to.addEventListener('change', function(){
    slider.noUiSlider.set([from.value, to.value]);
})

slider.noUiSlider.on('update.one', function(){
    from.value = Math.round(slider.noUiSlider.get()[0]);
    to.value = Math.round(slider.noUiSlider.get()[1]);
});

///pagination\\\

let pageBtn1 = document.querySelectorAll('.catalog__products__pagination__page')[0];
let pageBtn2 = document.querySelectorAll('.catalog__products__pagination__page')[1];
let pageBtn3 = document.querySelectorAll('.catalog__products__pagination__page')[2];

const cardAll = document.querySelectorAll('.card');
const screenWidth = window.screen.width;

function hideAllCards(){
    for (let i of cardAll) {
        i.classList.add('hidden-card')
        i.classList.remove('active-card')
    }
}

function showCard(i){
    cardAll[i].classList.remove('hidden-card');
    cardAll[i].classList.add('active-card');
}

pageBtn1.addEventListener('click', function(){
    pageBtn1.classList.add('catalog__products__pagination__active')
    pageBtn2.classList.remove('catalog__products__pagination__active')
    pageBtn3.classList.remove('catalog__products__pagination__active')
    hideAllCards();
    if (screenWidth >= 1024) {
        for (let i = 0; i < 9; i++) {
                showCard(i);
            }
    } else {
        for (let i = 0; i < 6; i++) {
            showCard(i);
        }
    }
})

pageBtn2.addEventListener('click', function(){
    pageBtn2.classList.add('catalog__products__pagination__active')
    pageBtn1.classList.remove('catalog__products__pagination__active')
    pageBtn3.classList.remove('catalog__products__pagination__active')
    hideAllCards();
    if (screenWidth >= 1024) {
        for (let i = 9; i < 18; i++) {
            showCard(i);
        }
    } else {
        for (let i = 6; i < 12; i++) {
            showCard(i);
        }
    }
})

pageBtn3.addEventListener('click', function(){
    pageBtn3.classList.add('catalog__products__pagination__active')
    pageBtn1.classList.remove('catalog__products__pagination__active')
    pageBtn2.classList.remove('catalog__products__pagination__active')
    hideAllCards();
    for (let i = 12; i < 18; i++) {
        showCard(i);
    }
})


/// filter dropdown \\\
const filterBtnCategory = document.querySelectorAll('.catalog__filter__item')[0];
const filterBtnPrice = document.querySelectorAll('.catalog__filter__item')[1];
const filterBtnSale = document.querySelectorAll('.catalog__filter__item')[2];
const filterBtnColor = document.querySelectorAll('.catalog__filter__item')[3];
const filterDrdCategory = document.querySelectorAll('.catalog__filter__item__dropdown')[0];
const filterDrdPrice = document.querySelectorAll('.catalog__filter__item__dropdown')[1];
const filterDrdSale = document.querySelectorAll('.catalog__filter__item__dropdown')[2];
const filterDrdColor = document.querySelectorAll('.catalog__filter__item__dropdown')[3];

filterBtnCategory.addEventListener('click', function(e){
    filterDrdCategory.classList.toggle('filter__dropdown__hidden')
})

filterBtnPrice.addEventListener('click', function(e){
    filterDrdPrice.classList.toggle('filter__dropdown__hidden')
})

filterBtnSale.addEventListener('click', function(e){
    filterDrdSale.classList.toggle('filter__dropdown__hidden')
})

filterBtnColor.addEventListener('click', function(e){
    filterDrdColor.classList.toggle('filter__dropdown__hidden')
})