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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJjYXRhbG9nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBzbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2Utc2xpZGVyJyk7XHJcbmNvbnN0IGZyb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJpY2UtZnJvbScpO1xyXG5jb25zdCB0byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS10bycpO1xyXG5cclxubm9VaVNsaWRlci5jcmVhdGUoc2xpZGVyLCB7XHJcbiAgICBzdGFydDogWzIwMDAsIDE1MDAwMF0sXHJcbiAgICBjb25uZWN0OiB0cnVlLFxyXG4gICAgcmFuZ2U6IHtcclxuICAgICAgICAnbWluJzogMCxcclxuICAgICAgICAnbWF4JzogMTgwMDAwXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZnJvbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgc2xpZGVyLm5vVWlTbGlkZXIuc2V0KFtmcm9tLnZhbHVlLCB0by52YWx1ZV0pO1xyXG59KVxyXG5cclxudG8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKXtcclxuICAgIHNsaWRlci5ub1VpU2xpZGVyLnNldChbZnJvbS52YWx1ZSwgdG8udmFsdWVdKTtcclxufSlcclxuXHJcbnNsaWRlci5ub1VpU2xpZGVyLm9uKCd1cGRhdGUub25lJywgZnVuY3Rpb24oKXtcclxuICAgIGZyb20udmFsdWUgPSBNYXRoLnJvdW5kKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpWzBdKTtcclxuICAgIHRvLnZhbHVlID0gTWF0aC5yb3VuZChzbGlkZXIubm9VaVNsaWRlci5nZXQoKVsxXSk7XHJcbn0pO1xyXG5cclxuLy8vcGFnaW5hdGlvblxcXFxcXFxyXG5cclxubGV0IHBhZ2VCdG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX3Byb2R1Y3RzX19wYWdpbmF0aW9uX19wYWdlJylbMF07XHJcbmxldCBwYWdlQnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19wcm9kdWN0c19fcGFnaW5hdGlvbl9fcGFnZScpWzFdO1xyXG5sZXQgcGFnZUJ0bjMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fcHJvZHVjdHNfX3BhZ2luYXRpb25fX3BhZ2UnKVsyXTtcclxuXHJcbmNvbnN0IGNhcmRBbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xyXG5jb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XHJcblxyXG5mdW5jdGlvbiBoaWRlQWxsQ2FyZHMoKXtcclxuICAgIGZvciAobGV0IGkgb2YgY2FyZEFsbCkge1xyXG4gICAgICAgIGkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWNhcmQnKVxyXG4gICAgICAgIGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlLWNhcmQnKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93Q2FyZChpKXtcclxuICAgIGNhcmRBbGxbaV0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuLWNhcmQnKTtcclxuICAgIGNhcmRBbGxbaV0uY2xhc3NMaXN0LmFkZCgnYWN0aXZlLWNhcmQnKTtcclxufVxyXG5cclxucGFnZUJ0bjEuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcGFnZUJ0bjEuY2xhc3NMaXN0LmFkZCgnY2F0YWxvZ19fcHJvZHVjdHNfX3BhZ2luYXRpb25fX2FjdGl2ZScpXHJcbiAgICBwYWdlQnRuMi5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19wcm9kdWN0c19fcGFnaW5hdGlvbl9fYWN0aXZlJylcclxuICAgIHBhZ2VCdG4zLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2dfX3Byb2R1Y3RzX19wYWdpbmF0aW9uX19hY3RpdmUnKVxyXG4gICAgaGlkZUFsbENhcmRzKCk7XHJcbiAgICBpZiAoc2NyZWVuV2lkdGggPj0gMTAyNCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBzaG93Q2FyZChpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xyXG4gICAgICAgICAgICBzaG93Q2FyZChpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5wYWdlQnRuMi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBwYWdlQnRuMi5jbGFzc0xpc3QuYWRkKCdjYXRhbG9nX19wcm9kdWN0c19fcGFnaW5hdGlvbl9fYWN0aXZlJylcclxuICAgIHBhZ2VCdG4xLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2dfX3Byb2R1Y3RzX19wYWdpbmF0aW9uX19hY3RpdmUnKVxyXG4gICAgcGFnZUJ0bjMuY2xhc3NMaXN0LnJlbW92ZSgnY2F0YWxvZ19fcHJvZHVjdHNfX3BhZ2luYXRpb25fX2FjdGl2ZScpXHJcbiAgICBoaWRlQWxsQ2FyZHMoKTtcclxuICAgIGlmIChzY3JlZW5XaWR0aCA+PSAxMDI0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDk7IGkgPCAxODsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNob3dDYXJkKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDY7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNob3dDYXJkKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbnBhZ2VCdG4zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhZ2VCdG4zLmNsYXNzTGlzdC5hZGQoJ2NhdGFsb2dfX3Byb2R1Y3RzX19wYWdpbmF0aW9uX19hY3RpdmUnKVxyXG4gICAgcGFnZUJ0bjEuY2xhc3NMaXN0LnJlbW92ZSgnY2F0YWxvZ19fcHJvZHVjdHNfX3BhZ2luYXRpb25fX2FjdGl2ZScpXHJcbiAgICBwYWdlQnRuMi5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19wcm9kdWN0c19fcGFnaW5hdGlvbl9fYWN0aXZlJylcclxuICAgIGhpZGVBbGxDYXJkcygpO1xyXG4gICAgZm9yIChsZXQgaSA9IDEyOyBpIDwgMTg7IGkrKykge1xyXG4gICAgICAgIHNob3dDYXJkKGkpO1xyXG4gICAgfVxyXG59KVxyXG5cclxuXHJcbi8vLyBmaWx0ZXIgZHJvcGRvd24gXFxcXFxcXHJcbmNvbnN0IGZpbHRlckJ0bkNhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2ZpbHRlcl9faXRlbScpWzBdO1xyXG5jb25zdCBmaWx0ZXJCdG5QcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19maWx0ZXJfX2l0ZW0nKVsxXTtcclxuY29uc3QgZmlsdGVyQnRuU2FsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19maWx0ZXJfX2l0ZW0nKVsyXTtcclxuY29uc3QgZmlsdGVyQnRuQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fZmlsdGVyX19pdGVtJylbM107XHJcbmNvbnN0IGZpbHRlckRyZENhdGVnb3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2ZpbHRlcl9faXRlbV9fZHJvcGRvd24nKVswXTtcclxuY29uc3QgZmlsdGVyRHJkUHJpY2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fZmlsdGVyX19pdGVtX19kcm9wZG93bicpWzFdO1xyXG5jb25zdCBmaWx0ZXJEcmRTYWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2ZpbHRlcl9faXRlbV9fZHJvcGRvd24nKVsyXTtcclxuY29uc3QgZmlsdGVyRHJkQ29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fZmlsdGVyX19pdGVtX19kcm9wZG93bicpWzNdO1xyXG5cclxuZmlsdGVyQnRuQ2F0ZWdvcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGZpbHRlckRyZENhdGVnb3J5LmNsYXNzTGlzdC50b2dnbGUoJ2ZpbHRlcl9fZHJvcGRvd25fX2hpZGRlbicpXHJcbn0pXHJcblxyXG5maWx0ZXJCdG5QcmljZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZmlsdGVyRHJkUHJpY2UuY2xhc3NMaXN0LnRvZ2dsZSgnZmlsdGVyX19kcm9wZG93bl9faGlkZGVuJylcclxufSlcclxuXHJcbmZpbHRlckJ0blNhbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGZpbHRlckRyZFNhbGUuY2xhc3NMaXN0LnRvZ2dsZSgnZmlsdGVyX19kcm9wZG93bl9faGlkZGVuJylcclxufSlcclxuXHJcbmZpbHRlckJ0bkNvbG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBmaWx0ZXJEcmRDb2xvci5jbGFzc0xpc3QudG9nZ2xlKCdmaWx0ZXJfX2Ryb3Bkb3duX19oaWRkZW4nKVxyXG59KSJdLCJmaWxlIjoiY2F0YWxvZy5qcyJ9
