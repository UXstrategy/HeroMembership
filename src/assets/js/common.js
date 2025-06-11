// rem 수치 변환
const windowSize = $(window).innerWidth(),
baseSize = 640;
if(windowSize < baseSize){
  $(document).find('html').animate({fontSize:$(window).innerWidth()/360},0)
}else{
  $(document).find('html').animate({fontSize:baseSize/360},0)
}

// rem resize 수치 변환
$(window).on('resize',function(){
  if($(window).innerWidth() < baseSize){
    $(document).find('html').animate({fontSize:$(window).innerWidth()/360},0)
  }else{
    $(document).find('html').animate({fontSize:baseSize/360},0)
  }
});

// 다크모드 색상 변환
$('.thema_infor li').on('click',function(){
  let idx = $('.thema_infor li').index(this);
  $('body').removeClass();
  $('.thema_infor li').removeClass('active');
  switch (idx) {
    case 0:
      $('body').addClass('light');
      break;
    case 1:
      $('body').addClass('dark');
      break;
    default:
      break;
  }
  $('.thema_infor li').eq(idx).addClass('active');
});

/*----------------------------------swiper module----------------------------------*/
const swiperSet = (function(){
  let swiperDefault=[];
  function SwOptionGet(swiperEl){
    // 스와이퍼 생성시 엘리먼트에 지정된 attr 상태로 옵션값 조정
    let option = {
      // slide 효과이며, 기본 속성 slide 로 적용됨, data-effect="fade" 로하면 fade 효과적용
      effect : swiperEl.attr('data-effect') ? swiperEl.data('effect') : 'slide',
      // auto 타이머 작동 여부 및 속도 조절 기본 false , 3000초
      auto : swiperEl.attr('data-autoplay') ? swiperEl.data('autoplay') : false, //  autoplay 여부
      delay : swiperEl.attr('data-delay') ? swiperEl.data('delay') : 0,// autoplay 딜레이 
      speed : swiperEl.attr('data-speed') ? swiperEl.data('speed') : 500, // swiper 속도
      // centeredSlides 중앙 정렬 기본 true
      align : swiperEl.attr('data-align') ? swiperEl.data('align') : true,
      // 컨텐츠 loop 여부 기본 true
      loop : swiperEl.attr('data-loop') ? swiperEl.data('loop') : true,
      // 슬라이드 방향 기본은 가로
      direction : swiperEl.attr('data-direction') ? swiperEl.data('direction') : 'horizontal',
      // 처음 시작시 먼저 보여줄 컨텐츠 기본 0 
      initialSlide : swiperEl.attr('data-initial') ? swiperEl.data('initial') : 0,
      // perView 으로 기본은 auto 이며, 몇개씩 보여줄지 확인
      perView : swiperEl.attr('data-view') ? swiperEl.data('view') : 'auto',
      // slidesPerGroup 으로 2단 구성일지 1단 구성일지 초기 1개
      perGroup : swiperEl.attr('data-group') ? swiperEl.data('group') : 1,
      // spaceBetween 슬라이드 사이 간격 초기 0
      space : swiperEl.attr('data-space') ? swiperEl.data('space') : 0,
      // free mode 활성화 하면 일반 스크롤처럼 표현된다.
      mode : swiperEl.attr('data-mode') ? swiperEl.data('mode') : false,
      // arrow navi prev button 버튼 여부
      navPrev : swiperEl.find('.swiper-button-prev').length ? "swiper-button-prev" : null,
      navNext : swiperEl.find('.swiper-button-next').length ? "swiper-button-next" : null,
      // pagation navi type 으로 모양 변경 가능 기본은 bullets
      pager : swiperEl.find('.swiper-pagination').length ? "swiper-pagination" : null,
      pagerType : swiperEl.find('.swiper-pagination').length ? (swiperEl.find('.swiper-pagination').hasClass('fraction') ? 'fraction' : 'bullets') : null,
      // 스크롤바 옵션 여부 엘리먼트 없으면 null 
      scrollbar : swiperEl.find('.swiper-scrollbar').length ? "swiper-scrollbar" : null,
      touchMove : swiperEl.attr('data-touch-move') ? swiperEl.data('touch-move') : true,
      watchslide : swiperEl.attr('data-watchslide') ? swiperEl.data('watchslide') : false,
      disable : swiperEl.attr('data-disable') ? swiperEl.data('disable') : true,
    };
    return option;
  }
  function SwOptionSet(ElmOpt){
    let applyOpt = {
      effect: ElmOpt.effect,
      direction : ElmOpt.direction,
      slidesPerView: ElmOpt.perView,
      slidesPerGroup: ElmOpt.perGroup,
      centeredSlides: ElmOpt.align,
      loop: ElmOpt.loop,
      speed : ElmOpt.speed,
      spaceBetween : ElmOpt.space,
      pagination: {
        el: "."+ElmOpt.pager,
        clickable: true,
        type: ElmOpt.pagerType
      },
      autoplay: {
        enabled: ElmOpt.auto,
        delay: ElmOpt.delay,
        disableOnInteraction: ElmOpt.disable,
      },
      navigation: {
        nextEl: "."+ElmOpt.navNext,
        prevEl: "."+ElmOpt.navPrev,
      },
      freeMode : ElmOpt.mode,
      freeModeMomentumRatio:1,
      freeModeMomentumBounce: false,
      scrollbar: {
        el: "."+ElmOpt.scrollbar,
        dragSize: 'auto',
        draggable: true,
      },
      initialSlide: ElmOpt.initialSlide,
      observer:true,
      observeParents:true,
      allowTouchMove: ElmOpt.touchMove,
      watchSlidesProgress: ElmOpt.watchslide
    };
    return applyOpt;
  }
  return{
    init:function(){
      let swUnit = $(".swiper_unit");
      swUnit.each(function(index, swEl){
        // swiper index로 구분
        $(swEl).addClass("sw-" + index);
        // swiper option 적용
        const swOpt = SwOptionSet(SwOptionGet($(swEl)));
        // swiper 각자 생성
        
        swiperDefault[index] = new Swiper(".sw-"+index,swOpt);
      });
    },
    getter:function(){
      return swiperDefault;
    }
  }
})();
swiperSet.init();





// 팝업 모듈
// onclick="popup.open('레이어명')" 팝업 오픈
// onclick="popup.close('레이어명')" 팝업 닫힘
// open 되면 active 클래스 추가
const popup = (function(){
  let dim = $('.dim'),
  ico_close = $('.popup .pop_header .popup_header_close'),
  // ico_close2 = $('.popup .pop_header .btn_close2'),
  close_flag=true;
  function popupOpen(el){
      el.removeClass('none');
      $("body").addClass('non_scroll');
      setTimeout(function () {
          var popupButtonHeight = el.find(".pop_body").children(".btn_box").height() || 0;
          var popupHeaderHeight = el.find(".pop_header").height() || 0;
          var popupContainerHeight = el.children(".popup_container").height() || 0;
          el.find(".pop-scroll").css({
          height: (popupContainerHeight - popupButtonHeight - popupHeaderHeight) + 'px'
          })
          el.addClass("active");
      }, 10);
      // dim.show();
  }
  function popupClose(el){
      el.removeClass("active");
      setTimeout(function(){
          el.addClass('none');
          if ($('.popup.active').length <= 1) {
              $("body").removeClass('non_scroll');
          }
      }, 500);
  }
  function popupCloseAll(el){
      el.removeClass("active");
      setTimeout(function(){
          // window.scrollTo(0,0);
          dim.hide();
          $("body").removeClass('non_scroll');
          el.addClass('none');
      }, 500);
  }
  return{
      init : function(){
          dim.on("click",function(){
              /* popupClose($(this).parents('.popup')); */
              const targetPop = $(this).parents('.popup');
              if( targetPop.hasClass('vs_type') !== true || targetPop.hasClass('head_fix') !== true ){
              popupClose($(this).parents('.popup'));
              } else {
              targetPop.removeClass('active');
              close_flag=true
              }
          });
          ico_close.on("click",function(){
              popupClose($(this).parents('.popup'));
          });
          // ico_close2.on("click",function(){
          //     if(close_flag){
          //     $(this).parents('.popup').addClass('active')
          //     close_flag=false;
          //     }else{
          //     $(this).parents('.popup').removeClass('active')
          //     close_flag=true
          //     }
          // });
      },
      open : function(el){
          popupOpen($("."+el));
      },
      close : function(el){
          popupClose($("."+el));
      },
      restoreChange: function(el, before, after){
          popupClose($("."+el));
          setTimeout(function() {
              $(`.${el} .${before}`).show(0);
              $(`.${el} .${after}`).hide(0);
          }, 501);
      },
      closeAll : function(el){
          popupcloseAll(el);
      }
  }
})();
popup.init();



var OnOff = function () {
  // const TimeSet = 엘리먼츠
  var TabLi = $('.tab_wrap .tab_head li'),
      TabCont = $('.tab_wrap .tab_cont'),
      TabScrollLi = $('.tab_wrap.tab_scroll > .tab_head li'),
      TabScrollCont = $('.tab_wrap.tab_scroll > .tab_cont');

  function ToggleOnOff(el) {
    el.toggleClass('on');
  }

  function TabOnOff(el, idx, box) {
    el.removeClass();
    el.eq(idx).addClass('on');

    if (box) {
      box.hide();
      box.eq(idx).show();
    }
  }

  return {
    init: function init() {
      // 탭 영역
      TabLi.on('click', function () {
        var idx = $(this).index();
        $(this).closest('.tab_depth').find('> .tab_cont').hide();
        $(this).closest('.tab_depth').find('> .tab_cont').eq(idx).show();
        $(this).closest('.tab_depth').find('> .tab_head .tab_list li').removeClass('on');
        $(this).closest('.tab_depth').find('> .tab_head .tab_list li').eq(idx).addClass('on');
      }); // 탭 Scroll 영역

      TabScrollLi.on('click', function () {
        TabOnOff(TabScrollLi, TabScrollLi.index(this), TabScrollCont);
      });
    },
    Toggle: function Toggle(el) {
      ToggleOnOff($(el));
    }
  };
}();

OnOff.init(); // 탭

$(".tab_menu li").on("click", function () {
  $(this).parents(".tab_wrapper").find(".tab_menu li").removeClass("active");
  $(this).addClass("active");
  $(this).parents(".tab_wrapper").find(".tab_content").removeClass('active');
  $(this).parents(".tab_wrapper").find(".tab_content").eq($(this).index()).addClass('active');
});