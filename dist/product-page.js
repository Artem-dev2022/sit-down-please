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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3dpcGVyU2ltaWxhciA9IG5ldyBTd2lwZXIoJy5zaW1pbGFyX19zd2lwZXInLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBzcGFjZUJldHdlZW46IDMyLFxyXG4gICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMTU0MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDRcclxuICAgICAgfSxcclxuICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMTAyNHB4XHJcbiAgICAgIDEwMjQ6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzJcclxuICAgICAgfSxcclxuICAgICAgMzIwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8vbW9kYWwgd2luZG93XFxcXFxcXHJcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJylcclxuY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsJylcclxuY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUtY2xpY2tfX2Zvcm1fX2NoZWNrYm94JylcclxuXHJcbmZ1bmN0aW9uIGNsb3NlQWxsKCl7XHJcbiAgICBpbnB1dE5hbWUudmFsdWUgPSAnJztcclxuICAgIGlucHV0VGVsLnZhbHVlID0gJyc7XHJcbiAgICB2YWxpZGF0ZS5yZWZyZXNoKCk7XHJcbiAgICBpbnB1dENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuY29uc3Qgb25lQ2xpY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fcmlnaHRfX2J0bicpO1xyXG5jb25zdCBmb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uZS1jbGlja19fZm9ybV9fYnRuJyk7XHJcbmNvbnN0IG9uZUNsaWNrV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uZS1jbGljaycpO1xyXG5jb25zdCB3aW5kb3dUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZG93LXRoYW5rcycpO1xyXG5jb25zdCB3aW5kb3dCdXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZG93LWJ1eScpO1xyXG5jb25zdCBjbG9zZUJ1eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1idXknKTtcclxuY29uc3QgY2xvc2VUaGFua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtdGhhbmtzJyk7XHJcblxyXG5vbmVDbGlja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBvbmVDbGlja1dpbmRvdy5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5Jyk7XHJcbiAgICB3aW5kb3dCdXkuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eScpO1xyXG59KVxyXG5cclxuZm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBpZiAodmFsaWRhdGUuaXNWYWxpZCkge1xyXG4gICAgICBjbG9zZUFsbCgpO1xyXG4gICAgICB3aW5kb3dCdXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eScpO1xyXG4gICAgICB3aW5kb3dUaGFua3MuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0eScpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5jbG9zZUJ1eS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBvbmVDbGlja1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5Jyk7XHJcbiAgICB3aW5kb3dCdXkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eScpO1xyXG4gICAgY2xvc2VBbGwoKTtcclxufSlcclxuXHJcbmNsb3NlVGhhbmtzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIG9uZUNsaWNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHknKTtcclxuICAgIHdpbmRvd1RoYW5rcy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5Jyk7XHJcbiAgICBjbG9zZUFsbCgpO1xyXG59KVxyXG5cclxuLy8vaW5wdXQgbWFza1xcXFxcXFxyXG5jb25zdCBzZWxlY3RvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVsXCIpO1xyXG5cclxuY29uc3QgaW0gPSBuZXcgSW5wdXRtYXNrKFwiKzcoOTk5KS05OTktOTktOTlcIiwge1xyXG4gIGF1dG9Vbm1hc2s6IHRydWVcclxufSk7XHJcblxyXG5pbS5tYXNrKHNlbGVjdG9yKTtcclxuXHJcbi8vL2p1c3QgdmFsaWRhdGVcXFxcXFxcclxuY29uc3QgcGhvbmUgPSBzZWxlY3Rvci5pbnB1dG1hc2sudW5tYXNrZWR2YWx1ZSgpO1xyXG5cclxuY29uc3QgdmFsaWRhdGUgPSBuZXcgd2luZG93Lkp1c3RWYWxpZGF0ZSgnLm9uZS1jbGlja19fZm9ybScsIHtcclxuICBlcnJvckZpZWxkQ3NzQ2xhc3M6ICdpcy1pbnZhbGlkJyxcclxufSk7XHJcblxyXG52YWxpZGF0ZVxyXG4gIC5hZGRGaWVsZCgnI25hbWUnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CS0Ysg0L3QtSDQstCy0LXQu9C4INC40LzRjycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnbWluTGVuZ3RoJyxcclxuICAgICAgdmFsdWU6IDIsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ2N1c3RvbVJlZ2V4cCcsXHJcbiAgICAgIHZhbHVlOiAvXlvQsC3Rj9CQLdCvXSskLyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcbiAgICB9LFxyXG4gIF0pXHJcbiAgLmFkZEZpZWxkKCcjdGVsJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCDQvdC+0LzQtdGAINGC0LXQu9C10YTQvtC90LAnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdmFsaWRhdG9yOiAocGhvbmUpID0+IHBob25lLmxlbmd0aCA9PT0gMTAsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgfSxcclxuICBdKVxyXG4gIC5hZGRGaWVsZCgnI2FncmVlJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10L7QsdGF0L7QtNC40LzQviDQv9GA0LjQvdGP0YLRjCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtSDRgdC+0LPQu9Cw0YjQtdC90LjRjycsXHJcbiAgICB9XHJcbiAgXSk7XHJcblxyXG4vLy9nYWxsZXJ5XFxcXFxcXHJcbmNvbnN0IHN3aXBlckdhbGxlcnkgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeV9fc3dpcGVyJywge1xyXG4gIG5hdmlnYXRpb246IHtcclxuICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTU0MDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDc4LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDM5LFxyXG4gICAgfSxcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fbWFpbicpO1xyXG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeV9fYmFyX19pbWcnKTtcclxuXHJcbmltYWdlcy5mb3JFYWNoKGltZyA9PiB7XHJcbiAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBsZXQgY3VycmVudEltZyA9IG1haW5JbWcuc3JjXHJcbiAgICBtYWluSW1nLnNyYyA9IHRoaXMuc3JjXHJcbiAgICB0aGlzLnNyYyA9IGN1cnJlbnRJbWdcclxuICB9KVxyXG59KVxyXG5cclxuY29uc3Qgb3BlbkdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fbGVmdF9fZ2FsbGVyeScpO1xyXG5jb25zdCBjbG9zZUdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fY2xvc2UnKTtcclxuY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XHJcblxyXG5vcGVuR2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgZ2FsbGVyeS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5JylcclxufSlcclxuXHJcbmNsb3NlR2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgZ2FsbGVyeS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5JylcclxufSkiXSwiZmlsZSI6InByb2R1Y3QtcGFnZS5qcyJ9
