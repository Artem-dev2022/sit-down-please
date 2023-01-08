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
    1920: {
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

/// tippy js tooltip \\\

tippy('.tooltip', {
  theme: 'tippy-style',
  allowHTML: true,
  content: 'Реплицированные&nbsp;с&nbsp;зарубежных источников, исследования формируют глобальную сеть.',
 
});