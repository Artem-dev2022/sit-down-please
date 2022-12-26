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
    oneClickWindow.classList.add('visibility');
    windowBuy.classList.add('visibility');
})

formBtn.addEventListener('click', function(){
    if (validate.isValid) {
      closeAll();
      windowBuy.classList.remove('visibility');
      windowThanks.classList.add('visibility')
    }
})

closeBuy.addEventListener('click', function(){
    oneClickWindow.classList.remove('visibility');
    windowBuy.classList.remove('visibility');
    closeAll();
})

closeThanks.addEventListener('click', function(){
    oneClickWindow.classList.remove('visibility');
    windowThanks.classList.remove('visibility');
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
      slidesPerView: 4,
      enabled: true
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 78,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 39,
    },
    320: {
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
  gallery.classList.add('visibility')
})

closeGallery.addEventListener('click', function(){
  gallery.classList.remove('visibility')
})