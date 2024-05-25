const menuBtn = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.header__menu-list');

menuBtn.addEventListener('click', ()=> {
    menuMobile.classList.toggle('menu--open');
});

const swiperOne = new Swiper('.feedback__slider', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },
});

const swiperTwo = new Swiper('.process__slider', {
  loop: true,
    slidesPerView: 3,
    spaceBetween: 50,
    
  pagination: {
    el: '.swiper-pagination',
  },
});

const questionList = document.querySelector('.question__list');
const questionlistTitles = questionList.querySelectorAll('.question__list-title');

questionlistTitles.forEach.call(questionlistTitles, function(questionlistTitle) {
    questionlistTitle.addEventListener('click', function() {
        
        const currentText = questionlistTitle.parentElement.querySelector('.question__list-text');
        
        questionlistTitle.classList.toggle('question__list-text--active');
        currentText.classList.toggle('question__list-text--visible');
        
        if(currentText.classList.contains('question__list-text--visible')) {
           currentText.style.maxHeight = currentText.scrollHeight + 'px'
        } else {
           currentText.style.maxHeight = null
        }
    })
});