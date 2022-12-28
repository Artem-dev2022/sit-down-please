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

/// tippy js tooltip \\\

tippy('.tooltip', {
  theme: 'tippy-style',
  allowHTML: true,
  content: 'Реплицированные&nbsp;с&nbsp;зарубежных источников, исследования формируют глобальную сеть.',
 
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3dpcGVyID0gbmV3IFN3aXBlcignLmhlcm9fX3N3aXBlcicsIHtcclxuICAgIGxvb3A6IHRydWUsXHJcbiAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgIGVsOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcclxuICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyU3BlY2lhbCA9IG5ldyBTd2lwZXIoJy5zcGVjaWFsX19zd2lwZXInLCB7XHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcbiAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICB9LFxyXG4gIHNwYWNlQmV0d2VlbjogMzIsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDE1NDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDNcclxuICAgIH0sXHJcbiAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAxMDI0cHhcclxuICAgIDEwMjQ6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDFcclxuICAgIH0sXHJcbiAgICA3Njg6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc2xpZGVzUGVyR3JvdXA6IDFcclxuICAgIH1cclxuICB9XHJcbn0pO1xyXG5cclxuY29uc3Qgc3dpcGVyVXNlZnVsID0gbmV3IFN3aXBlcignLnVzZWZ1bF9fc3dpcGVyJywge1xyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBzcGFjZUJldHdlZW46IDMyLFxyXG4gIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgc2xpZGVzUGVyR3JvdXA6IDEsXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDE1NDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgc3BhY2VCZXR3ZWVuOiAzMlxyXG4gICAgfSxcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDEwMjRweFxyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMyXHJcbiAgICB9LFxyXG4gICAgNzY4OiB7XHJcbiAgICAgIHNsaWRlc1BlclZpZXc6IDIsXHJcbiAgICAgIHNwYWNlQmV0d2VlbjogMzJcclxuICAgIH0sXHJcbiAgICAzMjA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG4vLy9pbnB1dCBtYXNrXFxcXFxcXHJcbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWxcIik7XHJcblxyXG5jb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soXCIrNyg5OTkpLTk5OS05OS05OVwiLCB7XHJcbiAgYXV0b1VubWFzazogdHJ1ZVxyXG59KTtcclxuXHJcbmltLm1hc2soc2VsZWN0b3IpO1xyXG5cclxuLy8vanVzdCB2YWxpZGF0ZVxcXFxcXFxyXG5jb25zdCBwaG9uZSA9IHNlbGVjdG9yLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XHJcblxyXG5jb25zdCB2YWxpZGF0ZSA9IG5ldyB3aW5kb3cuSnVzdFZhbGlkYXRlKCcjZm9ybScsIHtcclxuICBlcnJvckZpZWxkQ3NzQ2xhc3M6ICdpcy1pbnZhbGlkJyxcclxufSk7XHJcblxyXG52YWxpZGF0ZVxyXG4gIC5hZGRGaWVsZCgnI25hbWUnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CS0Ysg0L3QtSDQstCy0LXQu9C4INC40LzRjycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnbWluTGVuZ3RoJyxcclxuICAgICAgdmFsdWU6IDIsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ2N1c3RvbVJlZ2V4cCcsXHJcbiAgICAgIHZhbHVlOiAvXlvQsC3Rj9CQLdCvXSskLyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcbiAgICB9LFxyXG4gIF0pXHJcbiAgLmFkZEZpZWxkKCcjdGVsJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsaWRhdG9yOiAocGhvbmUpID0+IHBob25lLmxlbmd0aCA9PT0gMTAsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgfSxcclxuICBdKVxyXG4gIC5hZGRGaWVsZCgnI2VtYWlsJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCBlbWFpbCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnZW1haWwnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINCy0LLQtdC70Lgg0L3QtdCy0LXRgNC90YvQuSBlbWFpbCcsXHJcbiAgICB9LFxyXG4gIF0pXHJcbiAgLmFkZEZpZWxkKCcjYWdyZWUnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQvtCx0YXQvtC00LjQvNC+INC/0YDQuNC90Y/RgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC1INGB0L7Qs9C70LDRiNC10L3QuNGPJyxcclxuICAgIH1cclxuICBdKTtcclxuXHJcbi8vLyBnbyB0byBjYXRhbG9nIFxcXFxcXFxyXG5jb25zdCBoaWdoUmFpdGluZ0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oaWdoLXJhaXRpbmdfX2J0bicpO1xyXG5cclxuaGlnaFJhaXRpbmdCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICdjYXRhbG9nLmh0bWwnKTtcclxuXHJcbi8vLyB0aXBweSBqcyB0b29sdGlwIFxcXFxcXFxyXG5cclxudGlwcHkoJy50b29sdGlwJywge1xyXG4gIHRoZW1lOiAndGlwcHktc3R5bGUnLFxyXG4gIGFsbG93SFRNTDogdHJ1ZSxcclxuICBjb250ZW50OiAn0KDQtdC/0LvQuNGG0LjRgNC+0LLQsNC90L3Ri9C1Jm5ic3A70YEmbmJzcDvQt9Cw0YDRg9Cx0LXQttC90YvRhSDQuNGB0YLQvtGH0L3QuNC60L7Qsiwg0LjRgdGB0LvQtdC00L7QstCw0L3QuNGPINGE0L7RgNC80LjRgNGD0Y7RgiDQs9C70L7QsdCw0LvRjNC90YPRjiDRgdC10YLRjC4nLFxyXG4gXHJcbn0pOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
