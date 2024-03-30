$(window).on('load',function(){
    $("#splash").delay(100).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(100).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
    $(".alert,.heijou,.tanni,.annkoku").hide();//ロゴを1.2秒（1200ms）待機してからフェードアウト
  });

  $(function(){
    $('.toTop').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 100);
      return false;
    });
  });
  
  $(function(){
    $('.toMap').click(function () {
      $('body,html').animate({
        scrollTop:$('#Map').offset().top
      }, 100);
      return false;
    });
  });
  

  $(function(){
    $('.toAccess').click(function () {
      $('body,html').animate({
        scrollTop:$('#Access').offset().top
      }, 100);
      return false;
    });
  });


  $(function(){
    $(window).scroll(function (){
        $('.fadein2').each(function(){
            var position = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > position - windowHeight + 10){
              $(this).addClass('active');
            }
        });
    });
});

$('.saihanagerareta').click(function(){
  let colorlist = ["white", "#e8d3c7",  "#f8b862",  "#333631","#84b9cb",  "#c3d825"];
  // let colorlist = ["white","#333631"];
  let randomIndex = Math.floor(Math.random() * 6);
  $('#splash_logo').children('img').attr('src', `js/saikoro/${String(randomIndex+1)}.jpg`);
  $('#splash_logo').children('img').attr('class', `splash_sai`);
  // randomIndex = 4;
  $(".alert,.heijou,.tanni,.annkoku").hide();
  $("#splash").show();
  $("#splash_logo").show();//ロゴを1.2秒（1200ms）待機してからフェードアウト
  $("#splash").delay(100).fadeOut('slow');
  $("#splash_logo").delay(200).fadeOut('slow');
// 黒色
  // ピンク色
  if(colorlist[randomIndex]=="#e8d3c7"){
        $('body').sakura('start',{
          fallSpeed: 0.5,
          newOn: 10,
          maxSize: 18,
          minSize: 9
        });
    }else{
      $('body').sakura('stop');
    }
  if(colorlist[randomIndex]=="#84b9cb"){// 青
    $("body").snowfall('clear');
    $("body").snowfall({
      　flakeCount: 200, //降らせる数
      　minSize : 50, // 最小サイズ（数値）
      　maxSize : 100, // 最大サイズ（数値）
      　minSpeed : 30, // 最低速度（数値）
      　maxSpeed : 76, //最大速度
      　image : "js/ame.png", //ここで画像を指定
      });
    }else if(colorlist[randomIndex]=="#f8b862"){// オレンジ
      $("body").snowfall('clear');
      $("body").snowfall({
        　flakeCount: 100, //降らせる数
        　minSize : 30, // 最小サイズ（数値）
        　maxSize : 40, // 最大サイズ（数値）
        　minSpeed : 6, // 最低速度（数値）
        　maxSpeed : 16, //最大速度
        　image : "js/kadai.png", //ここで画像を指定
        });

      $(".alert,.heijou").show();
      $(".alert,.heijou").delay(1500).fadeOut('slow');
       
      }else if(colorlist[randomIndex]=="#c3d825"){ // 緑
        
        $("body").snowfall('clear');
      $("body").snowfall({
        　flakeCount: 100, //降らせる数
        　minSize : 30, // 最小サイズ（数値）
        　maxSize : 40, // 最大サイズ（数値）
        　minSpeed : 6, // 最低速度（数値）
        　maxSpeed : 16, //最大速度
        　image : "js/tanni.png", //ここで画像を指定
        });
        $(".alert,.tanni").show();
      $(".alert,.tanni").delay(1500).fadeOut('slow');
       
      }else{
      $("body").snowfall('clear');
    }
  

  if(colorlist[randomIndex]=="#333631"){//　黒
    $(".alert,.annkoku").show();
    $(".alert,.annkoku").delay(1500).fadeOut('slow');
    $('.saihanagerareta,p,h1,h2,h3,h4,a').css('color',"white");
    $('html,.box1, .side').css('background-color',colorlist[randomIndex]);
    $('.saihanagerareta,p,h1,h2,h3,h4,a,.map1').css('background-color',"transparent");
  }else{ 
  $('.saihanagerareta,p,h1,h2,h3,h4,a').css('color',"black");
  $('p,h1,h2,h3,h4,a').css('background-color',"white")
                      .css('width'," fit-content")
                      .css('padding',"2px")
                      .css('border-radius',"4px");
  $('html, .box1, .side,.saihanagerareta,.map1').css('background-color',colorlist[randomIndex]).css('color',"white");
  if(colorlist[randomIndex]=="white"){
    $('p,h1,h2,h3,h4,a').css('background-color',"transparent")
    $('.saihanagerareta').css('color',"black");
    $('.map1').css('background-color',"#e8ecef");

  }
}
  });

  