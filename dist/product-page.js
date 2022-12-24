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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3dpcGVyU2ltaWxhciA9IG5ldyBTd2lwZXIoJy5zaW1pbGFyX19zd2lwZXInLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxyXG4gICAgICBwcmV2RWw6ICcuc3dpcGVyLWJ1dHRvbi1wcmV2JyxcclxuICAgIH0sXHJcbiAgICBzcGFjZUJldHdlZW46IDMyLFxyXG4gICAgc2xpZGVzUGVyVmlldzogNCxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMTU0MDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDRcclxuICAgICAgfSxcclxuICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPj0gMTAyNHB4XHJcbiAgICAgIDEwMjQ6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAzXHJcbiAgICAgIH0sXHJcbiAgICAgIDc2ODoge1xyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzJcclxuICAgICAgfSxcclxuICAgICAgMzIwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuLy8vbW9kYWwgd2luZG93XFxcXFxcXHJcbmNvbnN0IGlucHV0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJylcclxuY29uc3QgaW5wdXRUZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVsJylcclxuY29uc3QgaW5wdXRDaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUtY2xpY2tfX2Zvcm1fX2NoZWNrYm94JylcclxuXHJcbmZ1bmN0aW9uIGNsb3NlQWxsKCl7XHJcbiAgICBpbnB1dE5hbWUudmFsdWUgPSAnJztcclxuICAgIGlucHV0VGVsLnZhbHVlID0gJyc7XHJcbiAgICB2YWxpZGF0ZS5yZWZyZXNoKCk7XHJcbiAgICBpbnB1dENoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxufVxyXG5cclxuY29uc3Qgb25lQ2xpY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fcmlnaHRfX2J0bicpO1xyXG5cclxuY29uc3QgZm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUtY2xpY2tfX2Zvcm1fX2J0bicpO1xyXG5jb25zdCBvbmVDbGlja1dpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vbmUtY2xpY2snKTtcclxuY29uc3Qgd2luZG93VGhhbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRvdy10aGFua3MnKTtcclxuY29uc3Qgd2luZG93QnV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbmRvdy1idXknKTtcclxuY29uc3QgY2xvc2VCdXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtYnV5Jyk7XHJcbmNvbnN0IGNsb3NlVGhhbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXRoYW5rcycpO1xyXG5cclxub25lQ2xpY2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgb25lQ2xpY2tXaW5kb3cuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0ZScpO1xyXG4gICAgd2luZG93QnV5LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdGUnKTtcclxufSlcclxuXHJcbmZvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIGlmICh2YWxpZGF0ZS5pc1ZhbGlkKSB7XHJcbiAgICAgIGNsb3NlQWxsKCk7XHJcbiAgICAgIHdpbmRvd0J1eS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXRlJyk7XHJcbiAgICAgIHdpbmRvd1RoYW5rcy5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXRlJylcclxuICAgIH1cclxuICAgIC8vdmFsaWRhdGUuaXNWYWxpZCA/ICB3aW5kb3dUaGFua3MuY2xhc3NMaXN0LmFkZCgndmlzaWJpbGl0ZScpIDogbnVsbDtcclxufSlcclxuXHJcbmNsb3NlQnV5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIG9uZUNsaWNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdGUnKTtcclxuICAgIGNsb3NlQWxsKCk7XHJcbn0pXHJcblxyXG5jbG9zZVRoYW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICBvbmVDbGlja1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXRlJyk7XHJcbiAgICB3aW5kb3dUaGFua3MuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0ZScpO1xyXG4gICAgY2xvc2VBbGwoKTtcclxufSlcclxuXHJcbi8vL2lucHV0IG1hc2tcXFxcXFxcclxuY29uc3Qgc2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbFwiKTtcclxuXHJcbmNvbnN0IGltID0gbmV3IElucHV0bWFzayhcIis3KDk5OSktOTk5LTk5LTk5XCIsIHtcclxuICBhdXRvVW5tYXNrOiB0cnVlXHJcbn0pO1xyXG5cclxuaW0ubWFzayhzZWxlY3Rvcik7XHJcblxyXG4vLy9qdXN0IHZhbGlkYXRlXFxcXFxcXHJcbmNvbnN0IHBob25lID0gc2VsZWN0b3IuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKTtcclxuXHJcbmNvbnN0IHZhbGlkYXRlID0gbmV3IHdpbmRvdy5KdXN0VmFsaWRhdGUoJy5vbmUtY2xpY2tfX2Zvcm0nLCB7XHJcbiAgZXJyb3JGaWVsZENzc0NsYXNzOiAnaXMtaW52YWxpZCcsXHJcbn0pO1xyXG5cclxudmFsaWRhdGVcclxuICAuYWRkRmllbGQoJyNuYW1lJywgW1xyXG4gICAge1xyXG4gICAgICBydWxlOiAncmVxdWlyZWQnLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQktGLINC90LUg0LLQstC10LvQuCDQuNC80Y8nLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcnVsZTogJ21pbkxlbmd0aCcsXHJcbiAgICAgIHZhbHVlOiAyLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdjdXN0b21SZWdleHAnLFxyXG4gICAgICB2YWx1ZTogL15b0LAt0Y/QkC3Qr10rJC8sXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG4gICAgfSxcclxuICBdKVxyXG4gIC5hZGRGaWVsZCgnI3RlbCcsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLRiyDQvdC1INCy0LLQtdC70Lgg0L3QvtC80LXRgCDRgtC10LvQtdGE0L7QvdCwJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHZhbGlkYXRvcjogKHBob25lKSA9PiBwaG9uZS5sZW5ndGggPT09IDEwLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgXSlcclxuICAuYWRkRmllbGQoJyNhZ3JlZScsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC+0LHRhdC+0LTQuNC80L4g0L/RgNC40L3Rj9GC0Ywg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUg0YHQvtCz0LvQsNGI0LXQvdC40Y8nLFxyXG4gICAgfVxyXG4gIF0pO1xyXG5cclxuLy8vZ2FsbGVyeVxcXFxcXFxyXG5jb25zdCBzd2lwZXJHYWxsZXJ5ID0gbmV3IFN3aXBlcignLmdhbGxlcnlfX3N3aXBlcicsIHtcclxuICBuYXZpZ2F0aW9uOiB7XHJcbiAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcclxuICAgIHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG4gIH0sXHJcbiAgYnJlYWtwb2ludHM6IHtcclxuICAgIDE1NDA6IHtcclxuICAgICAgc2xpZGVzUGVyVmlldzogMyxcclxuICAgICAgZW5hYmxlZDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzID49IDEwMjRweFxyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDc4LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDMyLFxyXG4gICAgfSxcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJHcm91cDogMSxcclxuICAgICAgc2xpZGVzUGVyVmlldzogMVxyXG4gICAgfVxyXG4gIH1cclxufSk7XHJcblxyXG5cclxuY29uc3QgbWFpbkltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19tYWluJyk7XHJcbmNvbnN0IGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYWxsZXJ5X19iYXJfX2ltZycpO1xyXG5cclxuaW1hZ2VzLmZvckVhY2goaW1nID0+IHtcclxuICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGxldCBjdXJyZW50SW1nID0gbWFpbkltZy5zcmNcclxuICAgIG1haW5JbWcuc3JjID0gdGhpcy5zcmNcclxuICAgIHRoaXMuc3JjID0gY3VycmVudEltZ1xyXG4gIH0pXHJcbn0pXHJcblxyXG5jb25zdCBvcGVuR2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19sZWZ0X19nYWxsZXJ5Jyk7XHJcbmNvbnN0IGNsb3NlR2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5X19jbG9zZScpO1xyXG5jb25zdCBnYWxsZXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbGxlcnknKTtcclxuXHJcbm9wZW5HYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICBnYWxsZXJ5LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdGUnKVxyXG59KVxyXG5cclxuY2xvc2VHYWxsZXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICBnYWxsZXJ5LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdGUnKVxyXG59KSJdLCJmaWxlIjoicHJvZHVjdC1wYWdlLmpzIn0=
