const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

// 브라우저 창이라고 보면 됨 
// lodash cdn. html에 가서 자바 연결하는 태그 위에 올려주세연 
window .addEventListener('scroll', _.throttle(function() {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
    // 배지 숨기기
    // badgeEl.style.display = 'none'
    // gsap.to(요소, 지속시간-초단위, 옵션);
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    gsap.to(toTopEl, .2, {
      x: 0,
    });
  } else {
    // 배지 보이기
    // badgeEl.style.display = 'block'
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));
// 0.3초를 의미함
// _.throttle(함수, 시간)
// throttle이라는 메소드의 인수로는, 사용하려고 하는 함수를 넣어준다. 함수가 몇초에 한번씩 실행되는지를 미리세컨드 단위로 시간을 추가
// 자연스러운 변화. 애니메이션 gsap cdn

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0,
  });
});



const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1, 
  });
});
// new Swiper(선택자, 옵션) swiperjs.com
new Swiper('.notice-line .swiper', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
new Swiper('.promotion .swiper', {
  // direction: 'horizontal' 호라이즌탈은 기본값임
  slidesPerView: 3, //한번에 보여줄 수 있는 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  // autoplay: {
  //   delay: 5000
  // },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-button-prev',
    nextEl: '.promotion .swiper-button-next',
  }
});

new Swiper('.awards .swiper', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});

const thisYear= document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();




const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function (){
  isHidePromotion =!isHidePromotion
  if (isHidePromotion) {
    // 숨김 처리
    promotionEl.classList.add('hide');
  } else {
    // 보임 처리
    promotionEl.classList.remove('hide');
  }
});
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
function floatingObject (selector, delay, size) {
  // gsap.to(요소,시간,옵션);
  gsap.to(
    selector, // 선택자 
    random(1.5, 2.5), // 애니메이션 동작 시간
    { // 옵션
    y: size,
    repeat: -1, 
    yoyo: true,
    ease: "power1.inOutinOut",
    delay: random(0,delay)
  }
  );
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

const spyEls = document.querySelectorAll('section.scroll-spy')
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8,
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});