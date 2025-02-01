/* ==========================================================================
   jQuery plugin settings and other scripts
   ========================================================================== */

$(document).ready(function(){
  // These should be the same as the settings in _variables.scss
  scssLarge = 925; // pixels

  // Sticky footer
  var bumpIt = function() {
      $("body").css("margin-bottom", $(".page__footer").outerHeight(true));
    },
    didResize = false;

  bumpIt();

  $(window).resize(function() {
    didResize = true;
  });
  setInterval(function() {
    if (didResize) {
      didResize = false;
      bumpIt();
    }
  }, 250);
  
  // FitVids init
  fitvids();

  // Follow menu drop down
  $(".author__urls-wrapper button").on("click", function() {
    $(".author__urls").fadeToggle("fast", function() {});
    $(".author__urls-wrapper button").toggleClass("open");
  });

  // Restore the follow menu if toggled on a window resize
  jQuery(window).on('resize', function() {
    if ($('.author__urls.social-icons').css('display') == 'none' && $(window).width() >= scssLarge) {
      $(".author__urls").css('display', 'block')
    }
  });    

  // init smooth scroll, this needs to be slightly more than then fixed masthead height
  // $("a").smoothScroll({offset: -65});
  $("a").smoothScroll({offset: -500}); 

  // add lightbox class to all image links
  $("a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif']").addClass("image-popup");

  // Magnific-Popup options
  $(".image-popup").magnificPopup({
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      tError: '<a href="%url%">Image #%curr%</a> could not be loaded.',
    },
    removalDelay: 500, // Delay in milliseconds before popup is removed
    // Class that is added to body when popup is open.
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-zoom-in',
    callbacks: {
      beforeOpen: function() {
        // just a hack that adds mfp-anim class to markup
        this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
      }
    },
    closeOnContentClick: true,
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });

// 페이지 전환 시 해시 유지 및 스크롤 처리
$(window).on('hashchange', function() {
  var targetSection = window.location.hash;
  if (targetSection) {
    setTimeout(function() {
      var headerHeight = 65; // 고정 헤더 높이
      var targetOffset = $(targetSection).offset().top - headerHeight;
      console.log("Target Section:", targetSection); // 디버깅용 로그
      console.log("Target Offset:", targetOffset); // 디버깅용 로그
      $('html, body').animate({
        scrollTop: targetOffset
      }, 1000); // 1초 동안 스크롤
    }, 500); // 지연 시간을 500ms로 늘림
  }
});

// 초기 페이지 로드 시 해시 처리
if (window.location.hash) {
  $(window).trigger('hashchange'); // 해시 변경 이벤트 강제 실행
}

// 다른 페이지에서 메인 페이지로 이동할 때 스크롤 처리
$("a[href^='/#'], a[href^='#']").on("click", function(e) {
  e.preventDefault(); // 기본 동작 방지
  var targetHash = $(this).attr("href").split('#')[1]; // 해시 추출
  window.location.href = "/#" + targetHash; // 메인 페이지로 이동하면서 해시 유지
});

});
