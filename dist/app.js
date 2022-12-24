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
const swiperSimilar = new Swiper('.similar__swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 32,
    slidesPerView: 4,
    slidesPerGroup: 1,
    breakpoints: {
      1540: {
        slidesPerView: 4
      },
      // when window width is >= 1024px
      1024: {
        slidesPerView: 3
      },
      768: {
        spaceBetween: 32
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 16,
      }
    }
});

///modal window\\\
const inputName = document.querySelector('#name')
const inputTel = document.querySelector('#tel')
const inputCheckbox = document.querySelector('.one-click__form__checkbox')

function closeAll(){
    inputName.value = '';
    inputTel.value = '';
    validate.refresh();
    inputCheckbox.checked = false;
}

const oneClickBtn = document.querySelector('.content__right__btn');

const formBtn = document.querySelector('.one-click__form__btn');
const oneClickWindow = document.querySelector('.one-click');
const windowThanks = document.querySelector('.window-thanks');
const windowBuy = document.querySelector('.window-buy');
const closeBuy = document.querySelector('.close-buy');
const closeThanks = document.querySelector('.close-thanks');

oneClickBtn.addEventListener('click', function(){
    oneClickWindow.classList.add('visibilite');
    windowBuy.classList.add('visibilite');
})

formBtn.addEventListener('click', function(){

    if (validate.isValid) {
      closeAll();
      windowBuy.classList.remove('visibilite');
      windowThanks.classList.add('visibilite')
    }
    //validate.isValid ?  windowThanks.classList.add('visibilite') : null;
})

closeBuy.addEventListener('click', function(){
    oneClickWindow.classList.remove('visibilite');
    closeAll();
})

closeThanks.addEventListener('click', function(){
    oneClickWindow.classList.remove('visibilite');
    windowThanks.classList.remove('visibilite');
    closeAll();
})

///input mask\\\
const selector = document.getElementById("tel");

const im = new Inputmask("+7(999)-999-99-99", {
  autoUnmask: true
});

im.mask(selector);

///just validate\\\
const phone = selector.inputmask.unmaskedvalue();

const validate = new window.JustValidate('.one-click__form', {
  errorFieldCssClass: 'is-invalid',
});

validate
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'customRegexp',
      value: /^[а-яА-Я]+$/,
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели номер телефона',
    },
    {
      validator: (phone) => phone.length === 10,
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#agree', [
    {
      rule: 'required',
      errorMessage: 'Необходимо принять пользовательские соглашения',
    }
  ]);

///gallery\\\
const swiperGallery = new Swiper('.gallery__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1540: {
      slidesPerView: 3,
      enabled: true
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 78,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1
    }
  }
});


const mainImg = document.querySelector('.gallery__main');
const images = document.querySelectorAll('.gallery__bar__img');

images.forEach(img => {
  img.addEventListener('click', function(e){
    let currentImg = mainImg.src
    mainImg.src = this.src
    this.src = currentImg
  })
})

const openGallery = document.querySelector('.content__left__gallery');
const closeGallery = document.querySelector('.gallery__close');
const gallery = document.querySelector('.gallery');

openGallery.addEventListener('click', function(){
  gallery.classList.add('visibilite')
})

closeGallery.addEventListener('click', function(){
  gallery.classList.remove('visibilite')
})
const swiper = new Swiper('.hero__swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
});

const swiperSpecial = new Swiper('.special__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 32,
  breakpoints: {
    1540: {
      slidesPerView: 3,
      slidesPerGroup: 3
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 1
    }
  }
});

const swiperUseful = new Swiper('.useful__swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 32,
  slidesPerView: 2,
  slidesPerGroup: 1,
  breakpoints: {
    1540: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
      spaceBetween: 32
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32
    },
    320: {
      slidesPerView: 1
    }
  }
});

///input mask\\\
const selector = document.getElementById("tel");

const im = new Inputmask("+7(999)-999-99-99", {
  autoUnmask: true
});

im.mask(selector);

///just validate\\\
const phone = selector.inputmask.unmaskedvalue();

const validate = new window.JustValidate('#form', {
  errorFieldCssClass: 'is-invalid',
});

validate
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 2,
      errorMessage: 'Недопустимый формат',
    },
    {
      rule: 'customRegexp',
      value: /^[а-яА-Я]+$/,
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели номер телефона',
    },
    {
      validator: (phone) => phone.length === 10,
      errorMessage: 'Недопустимый формат',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели email',
    },
    {
      rule: 'email',
      errorMessage: 'Вы ввели неверный email',
    },
  ])
  .addField('#agree', [
    {
      rule: 'required',
      errorMessage: 'Необходимо принять пользовательские соглашения',
    }
  ]);

/// go to catalog \\\
const highRaitingBtn = document.querySelector('.high-raiting__btn');

highRaitingBtn.addEventListener('click', () => window.location.href = 'catalog.html');
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJoZWFkZXItZm9vdGVyLmpzIiwicHJvZHVjdC1wYWdlLmpzIiwic2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHNsaWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5nZS1zbGlkZXInKTtcclxuY29uc3QgZnJvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmljZS1mcm9tJyk7XHJcbmNvbnN0IHRvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaWNlLXRvJyk7XHJcblxyXG5ub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcclxuICAgIHN0YXJ0OiBbMjAwMCwgMTUwMDAwXSxcclxuICAgIGNvbm5lY3Q6IHRydWUsXHJcbiAgICByYW5nZToge1xyXG4gICAgICAgICdtaW4nOiAwLFxyXG4gICAgICAgICdtYXgnOiAxODAwMDBcclxuICAgIH1cclxufSk7XHJcblxyXG5mcm9tLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCl7XHJcbiAgICBzbGlkZXIubm9VaVNsaWRlci5zZXQoW2Zyb20udmFsdWUsIHRvLnZhbHVlXSk7XHJcbn0pXHJcblxyXG50by5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpe1xyXG4gICAgc2xpZGVyLm5vVWlTbGlkZXIuc2V0KFtmcm9tLnZhbHVlLCB0by52YWx1ZV0pO1xyXG59KVxyXG5cclxuc2xpZGVyLm5vVWlTbGlkZXIub24oJ3VwZGF0ZS5vbmUnLCBmdW5jdGlvbigpe1xyXG4gICAgZnJvbS52YWx1ZSA9IE1hdGgucm91bmQoc2xpZGVyLm5vVWlTbGlkZXIuZ2V0KClbMF0pO1xyXG4gICAgdG8udmFsdWUgPSBNYXRoLnJvdW5kKHNsaWRlci5ub1VpU2xpZGVyLmdldCgpWzFdKTtcclxufSk7XHJcblxyXG4vLy9wYWdpbmF0aW9uXFxcXFxcXHJcblxyXG5sZXQgcGFnZUJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fcHJvZHVjdHNfX3BhZ2luYXRpb25fX3BhZ2UnKVswXTtcclxubGV0IHBhZ2VCdG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX3Byb2R1Y3RzX19wYWdpbmF0aW9uX19wYWdlJylbMV07XHJcbmxldCBwYWdlQnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19wcm9kdWN0c19fcGFnaW5hdGlvbl9fcGFnZScpWzJdO1xyXG5cclxuY29uc3QgY2FyZEFsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XHJcbmNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcclxuXHJcbmZ1bmN0aW9uIGhpZGVBbGxDYXJkcygpe1xyXG4gICAgZm9yIChsZXQgaSBvZiBjYXJkQWxsKSB7XHJcbiAgICAgICAgaS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4tY2FyZCcpXHJcbiAgICAgICAgaS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUtY2FyZCcpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dDYXJkKGkpe1xyXG4gICAgY2FyZEFsbFtpXS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4tY2FyZCcpO1xyXG4gICAgY2FyZEFsbFtpXS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUtY2FyZCcpO1xyXG59XHJcblxyXG5wYWdlQnRuMS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBwYWdlQnRuMS5jbGFzc0xpc3QuYWRkKCdjYXRhbG9nX19wcm9kdWN0c19fcGFnaW5hdGlvbl9fYWN0aXZlJylcclxuICAgIHBhZ2VCdG4yLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2dfX3Byb2R1Y3RzX19wYWdpbmF0aW9uX19hY3RpdmUnKVxyXG4gICAgcGFnZUJ0bjMuY2xhc3NMaXN0LnJlbW92ZSgnY2F0YWxvZ19fcHJvZHVjdHNfX3BhZ2luYXRpb25fX2FjdGl2ZScpXHJcbiAgICBoaWRlQWxsQ2FyZHMoKTtcclxuICAgIGlmIChzY3JlZW5XaWR0aCA+PSAxMDI0KSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHNob3dDYXJkKGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHNob3dDYXJkKGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuXHJcbnBhZ2VCdG4yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIHBhZ2VCdG4yLmNsYXNzTGlzdC5hZGQoJ2NhdGFsb2dfX3Byb2R1Y3RzX19wYWdpbmF0aW9uX19hY3RpdmUnKVxyXG4gICAgcGFnZUJ0bjEuY2xhc3NMaXN0LnJlbW92ZSgnY2F0YWxvZ19fcHJvZHVjdHNfX3BhZ2luYXRpb25fX2FjdGl2ZScpXHJcbiAgICBwYWdlQnRuMy5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19wcm9kdWN0c19fcGFnaW5hdGlvbl9fYWN0aXZlJylcclxuICAgIGhpZGVBbGxDYXJkcygpO1xyXG4gICAgaWYgKHNjcmVlbldpZHRoID49IDEwMjQpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gOTsgaSA8IDE4OyBpKyspIHtcclxuICAgICAgICAgICAgc2hvd0NhcmQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gNjsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgICAgICAgc2hvd0NhcmQoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5cclxucGFnZUJ0bjMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgcGFnZUJ0bjMuY2xhc3NMaXN0LmFkZCgnY2F0YWxvZ19fcHJvZHVjdHNfX3BhZ2luYXRpb25fX2FjdGl2ZScpXHJcbiAgICBwYWdlQnRuMS5jbGFzc0xpc3QucmVtb3ZlKCdjYXRhbG9nX19wcm9kdWN0c19fcGFnaW5hdGlvbl9fYWN0aXZlJylcclxuICAgIHBhZ2VCdG4yLmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGFsb2dfX3Byb2R1Y3RzX19wYWdpbmF0aW9uX19hY3RpdmUnKVxyXG4gICAgaGlkZUFsbENhcmRzKCk7XHJcbiAgICBmb3IgKGxldCBpID0gMTI7IGkgPCAxODsgaSsrKSB7XHJcbiAgICAgICAgc2hvd0NhcmQoaSk7XHJcbiAgICB9XHJcbn0pXHJcblxyXG5cclxuLy8vIGZpbHRlciBkcm9wZG93biBcXFxcXFxcclxuY29uc3QgZmlsdGVyQnRuQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fZmlsdGVyX19pdGVtJylbMF07XHJcbmNvbnN0IGZpbHRlckJ0blByaWNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2ZpbHRlcl9faXRlbScpWzFdO1xyXG5jb25zdCBmaWx0ZXJCdG5TYWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhdGFsb2dfX2ZpbHRlcl9faXRlbScpWzJdO1xyXG5jb25zdCBmaWx0ZXJCdG5Db2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19maWx0ZXJfX2l0ZW0nKVszXTtcclxuY29uc3QgZmlsdGVyRHJkQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fZmlsdGVyX19pdGVtX19kcm9wZG93bicpWzBdO1xyXG5jb25zdCBmaWx0ZXJEcmRQcmljZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19maWx0ZXJfX2l0ZW1fX2Ryb3Bkb3duJylbMV07XHJcbmNvbnN0IGZpbHRlckRyZFNhbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2F0YWxvZ19fZmlsdGVyX19pdGVtX19kcm9wZG93bicpWzJdO1xyXG5jb25zdCBmaWx0ZXJEcmRDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXRhbG9nX19maWx0ZXJfX2l0ZW1fX2Ryb3Bkb3duJylbM107XHJcblxyXG5maWx0ZXJCdG5DYXRlZ29yeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZmlsdGVyRHJkQ2F0ZWdvcnkuY2xhc3NMaXN0LnRvZ2dsZSgnZmlsdGVyX19kcm9wZG93bl9faGlkZGVuJylcclxufSlcclxuXHJcbmZpbHRlckJ0blByaWNlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBmaWx0ZXJEcmRQcmljZS5jbGFzc0xpc3QudG9nZ2xlKCdmaWx0ZXJfX2Ryb3Bkb3duX19oaWRkZW4nKVxyXG59KVxyXG5cclxuZmlsdGVyQnRuU2FsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZmlsdGVyRHJkU2FsZS5jbGFzc0xpc3QudG9nZ2xlKCdmaWx0ZXJfX2Ryb3Bkb3duX19oaWRkZW4nKVxyXG59KVxyXG5cclxuZmlsdGVyQnRuQ29sb3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGZpbHRlckRyZENvbG9yLmNsYXNzTGlzdC50b2dnbGUoJ2ZpbHRlcl9fZHJvcGRvd25fX2hpZGRlbicpXHJcbn0pIiwiLy8vcmVnaW9uIGRyb3Bkb3duXFxcXFxcXHJcbmNvbnN0IHJlZ2lvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3RvcF9fcmVnaW9uX19idG4nKTtcclxuY29uc3QgcmVnaW9uRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b3BfX3JlZ2lvbl9fZHJvcGRvd24nKTtcclxuY29uc3QgcmVnaW9uQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX190b3BfX3JlZ2lvbl9fYXJyb3cnKTtcclxuXHJcbnJlZ2lvbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgcmVnaW9uRHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgncmVnaW9uLWRyb3Bkb3duLXZpc2liaWxpdHknKTtcclxuICByZWdpb25BcnJvdy5jbGFzc0xpc3QudG9nZ2xlKCdyZWdpb24tZHJvcGRvd24tcm90YXRlJyk7XHJcbn0pXHJcblxyXG5cclxuLy8vY2F0ZWdvcnkgZHJvcGRvd25cXFxcXFxcclxuY29uc3QgY2F0ZWdvcnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19ib3R0b21fX2NhdGVnb3J5X19idG4nKTtcclxuY29uc3QgY2F0ZWdvcnlEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2JvdHRvbV9fY2F0ZWdvcnlfX2Ryb3Bkb3duJyk7XHJcbmNvbnN0IGNhdGVnb3J5QXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19ib3R0b21fX2NhdGVnb3J5X19hcnJvdycpO1xyXG5cclxuY2F0ZWdvcnlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gIGNhdGVnb3J5RHJvcGRvd24uY2xhc3NMaXN0LnRvZ2dsZSgnY2F0ZWdvcnktZHJvcGRvd24tdmlzaWJpbGl0eScpO1xyXG4gIGNhdGVnb3J5QXJyb3cuY2xhc3NMaXN0LnRvZ2dsZSgnY2F0ZWdvcnktZHJvcGRvd24tcm90YXRlJyk7XHJcbn0pXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICBlLnRhcmdldCAhPT0gcmVnaW9uQnRuID8gZS50YXJnZXQgIT09IHJlZ2lvbkRyb3Bkb3duID8gKHJlZ2lvbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ3JlZ2lvbi1kcm9wZG93bi12aXNpYmlsaXR5JyksIHJlZ2lvbkFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ3JlZ2lvbi1kcm9wZG93bi1yb3RhdGUnKSkgOiBudWxsIDogbnVsbFxyXG4gIGUudGFyZ2V0ICE9PSBjYXRlZ29yeUJ0biA/IGUudGFyZ2V0ICE9PSBjYXRlZ29yeURyb3Bkb3duID8gKGNhdGVnb3J5RHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnY2F0ZWdvcnktZHJvcGRvd24tdmlzaWJpbGl0eScpLCBjYXRlZ29yeUFycm93LmNsYXNzTGlzdC5yZW1vdmUoJ2NhdGVnb3J5LWRyb3Bkb3duLXJvdGF0ZScpKSA6IG51bGwgOiBudWxsXHJcbn0pIiwiY29uc3Qgc3dpcGVyU2ltaWxhciA9IG5ldyBTd2lwZXIoJy5zaW1pbGFyX19zd2lwZXInLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBzcGFjZUJldHdlZW46IDMyLFxyXG4gICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMTU0MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDRcclxuICAgICAgfSxcclxuICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMTAyNHB4XHJcbiAgICAgIDEwMjQ6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzJcclxuICAgICAgfSxcclxuICAgICAgMzIwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8vbW9kYWwgd2luZG93XFxcXFxcXHJcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJylcclxuY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsJylcclxuY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUtY2xpY2tfX2Zvcm1fX2NoZWNrYm94JylcclxuXHJcbmZ1bmN0aW9uIGNsb3NlQWxsKCl7XHJcbiAgICBpbnB1dE5hbWUudmFsdWUgPSAnJztcclxuICAgIGlucHV0VGVsLnZhbHVlID0gJyc7XHJcbiAgICB2YWxpZGF0ZS5yZWZyZXNoKCk7XHJcbiAgICBpbnB1dENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuY29uc3Qgb25lQ2xpY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fcmlnaHRfX2J0bicpO1xyXG5cclxuY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUtY2xpY2tfX2Zvcm1fX2J0bicpO1xyXG5jb25zdCBvbmVDbGlja1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUtY2xpY2snKTtcclxuY29uc3Qgd2luZG93VGhhbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRvdy10aGFua3MnKTtcclxuY29uc3Qgd2luZG93QnV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRvdy1idXknKTtcclxuY29uc3QgY2xvc2VCdXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV5Jyk7XHJcbmNvbnN0IGNsb3NlVGhhbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXRoYW5rcycpO1xyXG5cclxub25lQ2xpY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgb25lQ2xpY2tXaW5kb3cuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0ZScpO1xyXG4gICAgd2luZG93QnV5LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdGUnKTtcclxufSlcclxuXHJcbmZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZS5pc1ZhbGlkKSB7XHJcbiAgICAgIGNsb3NlQWxsKCk7XHJcbiAgICAgIHdpbmRvd0J1eS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXRlJyk7XHJcbiAgICAgIHdpbmRvd1RoYW5rcy5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXRlJylcclxuICAgIH1cclxuICAgIC8vdmFsaWRhdGUuaXNWYWxpZCA/ICB3aW5kb3dUaGFua3MuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0ZScpIDogbnVsbDtcclxufSlcclxuXHJcbmNsb3NlQnV5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIG9uZUNsaWNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdGUnKTtcclxuICAgIGNsb3NlQWxsKCk7XHJcbn0pXHJcblxyXG5jbG9zZVRoYW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBvbmVDbGlja1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXRlJyk7XHJcbiAgICB3aW5kb3dUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0ZScpO1xyXG4gICAgY2xvc2VBbGwoKTtcclxufSlcclxuXHJcbi8vL2lucHV0IG1hc2tcXFxcXFxcclxuY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbFwiKTtcclxuXHJcbmNvbnN0IGltID0gbmV3IElucHV0bWFzayhcIis3KDk5OSktOTk5LTk5LTk5XCIsIHtcclxuICBhdXRvVW5tYXNrOiB0cnVlXHJcbn0pO1xyXG5cclxuaW0ubWFzayhzZWxlY3Rvcik7XHJcblxyXG4vLy9qdXN0IHZhbGlkYXRlXFxcXFxcXHJcbmNvbnN0IHBob25lID0gc2VsZWN0b3IuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKTtcclxuXHJcbmNvbnN0IHZhbGlkYXRlID0gbmV3IHdpbmRvdy5KdXN0VmFsaWRhdGUoJy5vbmUtY2xpY2tfX2Zvcm0nLCB7XHJcbiAgZXJyb3JGaWVsZENzc0NsYXNzOiAnaXMtaW52YWxpZCcsXHJcbn0pO1xyXG5cclxudmFsaWRhdGVcclxuICAuYWRkRmllbGQoJyNuYW1lJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCDQuNC80Y8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdjdXN0b21SZWdleHAnLFxyXG4gICAgICB2YWx1ZTogL15b0LAt0Y/QkC3Qr10rJC8sXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgfSxcclxuICBdKVxyXG4gIC5hZGRGaWVsZCgnI3RlbCcsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLRiyDQvdC1INCy0LLQtdC70Lgg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbGlkYXRvcjogKHBob25lKSA9PiBwaG9uZS5sZW5ndGggPT09IDEwLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgXSlcclxuICAuYWRkRmllbGQoJyNhZ3JlZScsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC+0LHRhdC+0LTQuNC80L4g0L/RgNC40L3Rj9GC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUg0YHQvtCz0LvQsNGI0LXQvdC40Y8nLFxyXG4gICAgfVxyXG4gIF0pO1xyXG5cclxuLy8vZ2FsbGVyeVxcXFxcXFxyXG5jb25zdCBzd2lwZXJHYWxsZXJ5ID0gbmV3IFN3aXBlcignLmdhbGxlcnlfX3N3aXBlcicsIHtcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDE1NDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDEwMjRweFxyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDc4LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMyLFxyXG4gICAgfSxcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19tYWluJyk7XHJcbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5X19iYXJfX2ltZycpO1xyXG5cclxuaW1hZ2VzLmZvckVhY2goaW1nID0+IHtcclxuICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGxldCBjdXJyZW50SW1nID0gbWFpbkltZy5zcmNcclxuICAgIG1haW5JbWcuc3JjID0gdGhpcy5zcmNcclxuICAgIHRoaXMuc3JjID0gY3VycmVudEltZ1xyXG4gIH0pXHJcbn0pXHJcblxyXG5jb25zdCBvcGVuR2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19sZWZ0X19nYWxsZXJ5Jyk7XHJcbmNvbnN0IGNsb3NlR2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19jbG9zZScpO1xyXG5jb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcclxuXHJcbm9wZW5HYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICBnYWxsZXJ5LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdGUnKVxyXG59KVxyXG5cclxuY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICBnYWxsZXJ5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdGUnKVxyXG59KSIsImNvbnN0IHN3aXBlciA9IG5ldyBTd2lwZXIoJy5oZXJvX19zd2lwZXInLCB7XHJcbiAgICBsb29wOiB0cnVlLFxyXG4gICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXHJcbiAgICAgIGNsaWNrYWJsZTogdHJ1ZVxyXG4gICAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlclNwZWNpYWwgPSBuZXcgU3dpcGVyKCcuc3BlY2lhbF9fc3dpcGVyJywge1xyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBzcGFjZUJldHdlZW46IDMyLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxNTQwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAzXHJcbiAgICB9LFxyXG4gICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMTAyNHB4XHJcbiAgICAxMDI0OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNsaWRlc1Blckdyb3VwOiAxXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IHN3aXBlclVzZWZ1bCA9IG5ldyBTd2lwZXIoJy51c2VmdWxfX3N3aXBlcicsIHtcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgc3BhY2VCZXR3ZWVuOiAzMixcclxuICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gIGJyZWFrcG9pbnRzOiB7XHJcbiAgICAxNTQwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzJcclxuICAgIH0sXHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAxMDI0cHhcclxuICAgIDEwMjQ6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMlxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMyXHJcbiAgICB9LFxyXG4gICAgMzIwOiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDFcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuLy8vaW5wdXQgbWFza1xcXFxcXFxyXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVsXCIpO1xyXG5cclxuY29uc3QgaW0gPSBuZXcgSW5wdXRtYXNrKFwiKzcoOTk5KS05OTktOTktOTlcIiwge1xyXG4gIGF1dG9Vbm1hc2s6IHRydWVcclxufSk7XHJcblxyXG5pbS5tYXNrKHNlbGVjdG9yKTtcclxuXHJcbi8vL2p1c3QgdmFsaWRhdGVcXFxcXFxcclxuY29uc3QgcGhvbmUgPSBzZWxlY3Rvci5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xyXG5cclxuY29uc3QgdmFsaWRhdGUgPSBuZXcgd2luZG93Lkp1c3RWYWxpZGF0ZSgnI2Zvcm0nLCB7XHJcbiAgZXJyb3JGaWVsZENzc0NsYXNzOiAnaXMtaW52YWxpZCcsXHJcbn0pO1xyXG5cclxudmFsaWRhdGVcclxuICAuYWRkRmllbGQoJyNuYW1lJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCDQuNC80Y8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdjdXN0b21SZWdleHAnLFxyXG4gICAgICB2YWx1ZTogL15b0LAt0Y/QkC3Qr10rJC8sXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgfSxcclxuICBdKVxyXG4gIC5hZGRGaWVsZCgnI3RlbCcsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLRiyDQvdC1INCy0LLQtdC70Lgg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbGlkYXRvcjogKHBob25lKSA9PiBwaG9uZS5sZW5ndGggPT09IDEwLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgXSlcclxuICAuYWRkRmllbGQoJyNlbWFpbCcsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLRiyDQvdC1INCy0LLQtdC70LggZW1haWwnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ2VtYWlsJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLRiyDQstCy0LXQu9C4INC90LXQstC10YDQvdGL0LkgZW1haWwnLFxyXG4gICAgfSxcclxuICBdKVxyXG4gIC5hZGRGaWVsZCgnI2FncmVlJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10L7QsdGF0L7QtNC40LzQviDQv9GA0LjQvdGP0YLRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtSDRgdC+0LPQu9Cw0YjQtdC90LjRjycsXHJcbiAgICB9XHJcbiAgXSk7XHJcblxyXG4vLy8gZ28gdG8gY2F0YWxvZyBcXFxcXFxcclxuY29uc3QgaGlnaFJhaXRpbmdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGlnaC1yYWl0aW5nX19idG4nKTtcclxuXHJcbmhpZ2hSYWl0aW5nQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnY2F0YWxvZy5odG1sJyk7Il19
