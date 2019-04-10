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
  //TOP
  if ($('.top-page').length){
    $(window).scroll(function(){
      inview(".top-message .text-box", "show");
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