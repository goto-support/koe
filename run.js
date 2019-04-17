$(function () {

  //--------------------------------------------------
  //function

  function inview(name, add) {
    var w_h = $(window).height();
    var elemPos = $(name).offset().top;
    var scroll = $(window).scrollTop();
    if (scroll > elemPos - w_h) {
      $(name).addClass(add);
    }
  };

  function pageStart() {
    $(".loder-cont .spinner").fadeOut(1000);
    setTimeout(function () {
      $(".loder-cont").addClass("comp");
    }, 1000);
    setTimeout(function () {
      $(".loder-cont").hide();
    }, 2000);
  }

  function pageLoder(srcs, callback) {
    var obj_srcs = [];
    srcs.each(function () {
      obj_srcs.push($(this).attr("src"));
    });

    var loader = new $.ImgLoader({
      srcs: obj_srcs,
      pipesize: 3,
      delay: 0,
      useXHR2: true,
      timeout: 4000
    });

    loader.load();

    loader.on('allload', function ($img) {
      pageStart();
      callback();
    });
  }



  //--------------------------------------------------
  //header
  function hdOpen(){
    let body = $("body");

    if(body.hasClass("hd-open")){
      body.removeClass("hd-open");
      $('.hd-msk').fadeOut(300);
    }else{
      body.addClass("hd-open");
      $('.hd-msk').fadeIn(300);
    }
  }

  $('.menu-button, .hd-msk, .internal').click(function(){
    hdOpen();
  });

  
  //--------------------------------------------------
  //TOP
  if ($('.top-page').length){

    // var srcs = $('.product-img');
    // pageLoder(srcs, function () {

    //   setTimeout(function () {
    //     $("#top-first .chara").each(function (i) {
    //       var $this = $(this)
    //       setTimeout(function () {
    //         $this.addClass('show');
    //       }, 120 * i);
    //     });
    //   }, 2000);
    // });

    setTimeout(function () {
      pageStart();
    }, 100);

    setTimeout(function () {
      $("#top-first .chara").each(function (i) {
        var $this = $(this)
        setTimeout(function () {
          $this.addClass('show');
        }, 120 * i);
      });
    }, 2000);


    var product_offset = $('#top-product').offset();
    $(window).on("load resize", function () {
      product_offset = $('#top-product').offset();
    });


    $(window).scroll(function () {
      inview("#top-message .title", "show");
      inview("#top-message .lead", "show");

      var Topscroll = $(window).scrollTop();
      $(".hd-link").removeClass("active");
      if (Topscroll > product_offset.top) {
        $('.top-logo-box img').attr("src","img/top-logo-b.png");
        console.log('黒');
      }else {
        $('.top-logo-box img').attr("src", "img/top-logo-w.png");
        console.log('白');
      }

    });
  

    //pagescroll
    $('a[href^="#"]').click(function () {
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
    
  }

});