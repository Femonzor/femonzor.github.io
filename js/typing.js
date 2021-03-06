(function ($, document) {
  // Caption
  $('.article-entry').each(function (i) {
    $(this).find('img').each(function () {
      if ($(this).parent().hasClass('fancybox')) return

      var alt = this.alt

      if (alt) {
        $(this).after('<span class="caption">' + alt + '</span>')
      }

      $(this).wrap('<a href="' + this.src + '" title="' + alt + '" class="fancybox"></a>')
    })

    $(this).find('.fancybox').each(function () {
      $(this).attr('rel', 'article' + i)
    })
  })

  if ($.fancybox) {
    $('.fancybox').fancybox()
  }


  $(document).ready(function() {
    var QRBox = $('#QRBox');
    var MainBox = $('.MainBox');
    var BTCQR = $('#BTCQR');
    var AliPayQR = $('#AliPayQR');
    var WeChatQR = $('#WeChatQR');
    var currentQR;
    var $articleToc = $("#article-toc");
    var $window = $(window);
    
    if ($articleToc) {
      $window.scroll(function () {
        $window.scrollTop() > 110
        ? $articleToc.addClass("fix t150p").removeClass("t260p")
        : $articleToc.removeClass("fix t150p").addClass("t260p");
      });
    }

    function showQR(QR) {
      $('#DonateText,#donateBox,#github').addClass('blur');
      currentQR = QR;
      QRBox.fadeIn(300,function(argument) {
        QR.addClass('showQR');
      });
    }

    $('#donateBox>li').click(function(event) {
      var thisID = $(this).attr('id');
      if (thisID === 'BTC') {
        showQR(BTCQR);
        new Clipboard('#BTCBn');
      } else if (thisID === 'AliPay') {
        showQR(AliPayQR);
      } else if (thisID === 'WeChat') {
        showQR(WeChatQR);
      }
    });

    MainBox.click(function(event) {
      if (currentQR) currentQR.removeClass('showQR').addClass('hideQR');
      setTimeout (function(a) {
        QRBox.fadeOut(300,function(argument) {
          MainBox.removeClass('hideQR');
        });
        $('#DonateText,#donateBox,#github').removeClass('blur');
      },600);
    });

    $('#menu').click(function (event) {
      var nav = $('#main-nav');
      nav.toggle('fast');
    });

    $(window).resize(function () {
      var viewportWidth = $(window).width();
      if (viewportWidth > 468) {
        $('#main-nav').show('fast');
      } else {
        $('#main-nav').hide('fast');
      }
    });
    $(window).load(function () {
      // $("pre").addClass("prettyprint linenums").attr("style", "overflow:auto;");
      // 不显示行号似乎效果更好
      $("pre").addClass("prettyprint").attr("style", "overflow:auto;");
      prettyPrint();
    });
  });
})(jQuery, document);
