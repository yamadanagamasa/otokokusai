$(window).on('load',function(){
    $("#splash").delay(100).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
    $("#splash_logo").delay(100).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
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
  $("#splash").show();
  $("#splash_logo").show();//ロゴを1.2秒（1200ms）待機してからフェードアウト
  $("#splash").delay(100).fadeOut('slow');
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
  if(colorlist[randomIndex]=="#333631"){
    $('.saihanagerareta,p,h1,h2,h3,h4,a,img').css('color',"white");
    $('html,.box1, .side').css('background-color',colorlist[randomIndex]);
    $('.saihanagerareta,p,h1,h2,h3,h4,a').css('background-color',"transparent");
  }else{ 
  $('.saihanagerareta,p,h1,h2,h3,h4,a,img').css('color',"black");
  $('p,h1,h2,h3,h4,a').css('background-color',"white")
                      .css('width'," fit-content")
                      .css('padding',"2px")
                      .css('border-radius',"2px");
  $('html, .box1, .side,.saihanagerareta').css('background-color',colorlist[randomIndex]).css('color',"white");
  if(colorlist[randomIndex]=="white"){
    $('.saihanagerareta').css('color',"black");
  }
}
  });