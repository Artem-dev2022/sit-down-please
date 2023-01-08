const swiperSimilar = new Swiper('.similar__swiper', {
    navigation: {
      nextEl: '.similar__buttons__next',
      prevEl: '.similar__buttons__prev',
    },
    slidesPerGroup: 1,
    breakpoints: {
      1920: {
        slidesPerView: 4,
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
    nextEl: '.gallery__swiper__btn__next',
    prevEl: '.gallery__swiper__btn__prev',
  },
  breakpoints: {
    1920: {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm9kdWN0LXBhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3dpcGVyU2ltaWxhciA9IG5ldyBTd2lwZXIoJy5zaW1pbGFyX19zd2lwZXInLCB7XHJcbiAgICBuYXZpZ2F0aW9uOiB7XHJcbiAgICAgIG5leHRFbDogJy5zaW1pbGFyX19idXR0b25zX19uZXh0JyxcclxuICAgICAgcHJldkVsOiAnLnNpbWlsYXJfX2J1dHRvbnNfX3ByZXYnLFxyXG4gICAgfSxcclxuICAgIHNsaWRlc1Blckdyb3VwOiAxLFxyXG4gICAgYnJlYWtwb2ludHM6IHtcclxuICAgICAgMTkyMDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDQsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMlxyXG4gICAgICB9LFxyXG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA+PSAxMDI0cHhcclxuICAgICAgMTAyNDoge1xyXG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDMsXHJcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAzMlxyXG4gICAgICB9LFxyXG4gICAgICA3Njg6IHtcclxuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICAgIHNwYWNlQmV0d2VlbjogMzJcclxuICAgICAgfSxcclxuICAgICAgMzIwOiB7XHJcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMixcclxuICAgICAgICBzcGFjZUJldHdlZW46IDE2LFxyXG4gICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4vLy9tb2RhbCB3aW5kb3dcXFxcXFxcclxuY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUnKVxyXG5jb25zdCBpbnB1dFRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0ZWwnKVxyXG5jb25zdCBpbnB1dENoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9uZS1jbGlja19fZm9ybV9fY2hlY2tib3gnKVxyXG5cclxuZnVuY3Rpb24gY2xvc2VBbGwoKXtcclxuICAgIGlucHV0TmFtZS52YWx1ZSA9ICcnO1xyXG4gICAgaW5wdXRUZWwudmFsdWUgPSAnJztcclxuICAgIHZhbGlkYXRlLnJlZnJlc2goKTtcclxuICAgIGlucHV0Q2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xyXG59XHJcblxyXG5jb25zdCBvbmVDbGlja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50X19yaWdodF9fYnRuJyk7XHJcbmNvbnN0IGZvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25lLWNsaWNrX19mb3JtX19idG4nKTtcclxuY29uc3Qgb25lQ2xpY2tXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub25lLWNsaWNrJyk7XHJcbmNvbnN0IHdpbmRvd1RoYW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kb3ctdGhhbmtzJyk7XHJcbmNvbnN0IHdpbmRvd0J1eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kb3ctYnV5Jyk7XHJcbmNvbnN0IGNsb3NlQnV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWJ1eScpO1xyXG5jb25zdCBjbG9zZVRoYW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS10aGFua3MnKTtcclxuXHJcbm9uZUNsaWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIG9uZUNsaWNrV2luZG93LmNsYXNzTGlzdC5hZGQoJ3Zpc2liaWxpdHknKTtcclxuICAgIHdpbmRvd0J1eS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5Jyk7XHJcbn0pXHJcblxyXG5mb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIGlmICh2YWxpZGF0ZS5pc1ZhbGlkKSB7XHJcbiAgICAgIGNsb3NlQWxsKCk7XHJcbiAgICAgIHdpbmRvd0J1eS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5Jyk7XHJcbiAgICAgIHdpbmRvd1RoYW5rcy5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5JylcclxuICAgIH1cclxufSlcclxuXHJcbmNsb3NlQnV5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgIG9uZUNsaWNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHknKTtcclxuICAgIHdpbmRvd0J1eS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5Jyk7XHJcbiAgICBjbG9zZUFsbCgpO1xyXG59KVxyXG5cclxuY2xvc2VUaGFua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG4gICAgb25lQ2xpY2tXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJpbGl0eScpO1xyXG4gICAgd2luZG93VGhhbmtzLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2liaWxpdHknKTtcclxuICAgIGNsb3NlQWxsKCk7XHJcbn0pXHJcblxyXG4vLy9pbnB1dCBtYXNrXFxcXFxcXHJcbmNvbnN0IHNlbGVjdG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWxcIik7XHJcblxyXG5jb25zdCBpbSA9IG5ldyBJbnB1dG1hc2soXCIrNyg5OTkpLTk5OS05OS05OVwiLCB7XHJcbiAgYXV0b1VubWFzazogdHJ1ZVxyXG59KTtcclxuXHJcbmltLm1hc2soc2VsZWN0b3IpO1xyXG5cclxuLy8vanVzdCB2YWxpZGF0ZVxcXFxcXFxyXG5jb25zdCBwaG9uZSA9IHNlbGVjdG9yLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKCk7XHJcblxyXG5jb25zdCB2YWxpZGF0ZSA9IG5ldyB3aW5kb3cuSnVzdFZhbGlkYXRlKCcub25lLWNsaWNrX19mb3JtJywge1xyXG4gIGVycm9yRmllbGRDc3NDbGFzczogJ2lzLWludmFsaWQnLFxyXG59KTtcclxuXHJcbnZhbGlkYXRlXHJcbiAgLmFkZEZpZWxkKCcjbmFtZScsIFtcclxuICAgIHtcclxuICAgICAgcnVsZTogJ3JlcXVpcmVkJyxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0JLRiyDQvdC1INCy0LLQtdC70Lgg0LjQvNGPJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdtaW5MZW5ndGgnLFxyXG4gICAgICB2YWx1ZTogMixcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBydWxlOiAnY3VzdG9tUmVnZXhwJyxcclxuICAgICAgdmFsdWU6IC9eW9CwLdGP0JAt0K9dKyQvLFxyXG4gICAgICBlcnJvck1lc3NhZ2U6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuICAgIH0sXHJcbiAgXSlcclxuICAuYWRkRmllbGQoJyN0ZWwnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9CS0Ysg0L3QtSDQstCy0LXQu9C4INC90L7QvNC10YAg0YLQtdC70LXRhNC+0L3QsCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB2YWxpZGF0b3I6IChwaG9uZSkgPT4gcGhvbmUubGVuZ3RoID09PSAxMCxcclxuICAgICAgZXJyb3JNZXNzYWdlOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcbiAgICB9LFxyXG4gIF0pXHJcbiAgLmFkZEZpZWxkKCcjYWdyZWUnLCBbXHJcbiAgICB7XHJcbiAgICAgIHJ1bGU6ICdyZXF1aXJlZCcsXHJcbiAgICAgIGVycm9yTWVzc2FnZTogJ9Cd0LXQvtCx0YXQvtC00LjQvNC+INC/0YDQuNC90Y/RgtGMINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC1INGB0L7Qs9C70LDRiNC10L3QuNGPJyxcclxuICAgIH1cclxuICBdKTtcclxuXHJcbi8vL2dhbGxlcnlcXFxcXFxcclxuY29uc3Qgc3dpcGVyR2FsbGVyeSA9IG5ldyBTd2lwZXIoJy5nYWxsZXJ5X19zd2lwZXInLCB7XHJcbiAgbmF2aWdhdGlvbjoge1xyXG4gICAgbmV4dEVsOiAnLmdhbGxlcnlfX3N3aXBlcl9fYnRuX19uZXh0JyxcclxuICAgIHByZXZFbDogJy5nYWxsZXJ5X19zd2lwZXJfX2J0bl9fcHJldicsXHJcbiAgfSxcclxuICBicmVha3BvaW50czoge1xyXG4gICAgMTkyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiA0LFxyXG4gICAgICBlbmFibGVkOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgMTAyNDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAzLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDc4LFxyXG4gICAgfSxcclxuICAgIDc2ODoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAyLFxyXG4gICAgICBzcGFjZUJldHdlZW46IDM5LFxyXG4gICAgfSxcclxuICAgIDMyMDoge1xyXG4gICAgICBzbGlkZXNQZXJWaWV3OiAxXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuXHJcbmNvbnN0IG1haW5JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fbWFpbicpO1xyXG5jb25zdCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FsbGVyeV9fYmFyX19pbWcnKTtcclxuXHJcbmltYWdlcy5mb3JFYWNoKGltZyA9PiB7XHJcbiAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcbiAgICBsZXQgY3VycmVudEltZyA9IG1haW5JbWcuc3JjXHJcbiAgICBtYWluSW1nLnNyYyA9IHRoaXMuc3JjXHJcbiAgICB0aGlzLnNyYyA9IGN1cnJlbnRJbWdcclxuICB9KVxyXG59KVxyXG5cclxuY29uc3Qgb3BlbkdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudF9fbGVmdF9fZ2FsbGVyeScpO1xyXG5jb25zdCBjbG9zZUdhbGxlcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeV9fY2xvc2UnKTtcclxuY29uc3QgZ2FsbGVyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYWxsZXJ5Jyk7XHJcblxyXG5vcGVuR2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgZ2FsbGVyeS5jbGFzc0xpc3QuYWRkKCd2aXNpYmlsaXR5JylcclxufSlcclxuXHJcbmNsb3NlR2FsbGVyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgZ2FsbGVyeS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmlsaXR5JylcclxufSkiXSwiZmlsZSI6InByb2R1Y3QtcGFnZS5qcyJ9
