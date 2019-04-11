$(function () {

  //--------------------------------------------------
  //function

  function inview(name,add){
    var w_h = $(window).height();
    var elemPos = $(name).offset().top;
    var scroll = $(window).scrollTop();
    if (scroll > elemPos - w_h) {
      $(name).addClass(add);
    }
  };

  function pageStart(){
    $(".loder-cont .spinner").fadeOut(1000);
    setTimeout(function(){
      $(".loder-cont").addClass("comp");
    },1000);
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

    loader.on('progress', function (progressInfo) {
      console.log(progressInfo.loadedRatio);
    });

    loader.load();

    loader.on('allload', function ($img) {
      pageStart();
      callback();
    });
  }

  //--------------------------------------------------
  //header

  function navToggle(){
    var header = $("header");
    if (header.hasClass("active")){
      header.removeClass("active")
      $('.hd-msk').fadeOut(300);
    }else{
      header.addClass("active")
      $('.hd-msk').fadeIn(300);
    } 
  }

  $('.navButton').click(function () {
    navToggle();
  });
  $('.hd-msk').click(function () {
    navToggle();
  });
  

  setTimeout(function () {
    pageStart();
  }, 800);

  //--------------------------------------------------
  //TOP
  if ($('.top-page').length){
    
    
    var message_offset = $('#top-message').offset();
    var product_offset = $('#top-products').offset();
    var guide_offset = $('#top-guide').offset();


    $(window).on("load resize",function () {
      message_offset = $('#top-message').offset();
      product_offset = $('#top-products').offset();
      guide_offset = $('#top-guide').offset();
    });

    //pagescroll
    $('a[href^="#"]').click(function () {
      var speed = 400;
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      console.log(position);
      $('body,html').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
    
    $(window).scroll(function(){
      inview("#top-message .text-box", "show");

      //hd-scroll
      var Topscroll = $(window).scrollTop();
      $(".hd-link").removeClass("active");
      if (Topscroll > guide_offset.top){
        $(".hd-guide").addClass("active");
      } else if (Topscroll > product_offset.top){
        $(".hd-products").addClass("active");
      } else if (Topscroll > message_offset.top) {
        $(".hd-message").addClass("active");
      }else{
        $(".hd-top").addClass("active");
      }

      

    });

    setTimeout(function(){
      pageStart();
    },1000);

    setTimeout(function () {
      $(".firstView .chara").each(function (i) {
        var $this = $(this)
        setTimeout(function () {
          $this.addClass('show');
        }, 100 * i);
      });
    }, 3000);

      

    
  }

});