
$('.toggle').click(function(){
    $('.modalll').toggleClass('active');
    $('.modalll a').toggleClass('active');
    });
    $('.modalll a').click(function(){
        $('.modalll').removeClass('active');
        $('.toggle').toggleClass('active');
    $('.modalll a').toggleClass('active');

        });
    
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
      
        if (scroll >= 10) {
            $("nav, header, nav ul li a").addClass("active");

        }
        else{
            $("nav, header, nav ul li a").removeClass("active");
        }
      });
      var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
      });
      let menutoggle = document.querySelector('.toggle');
      menutoggle.onclick = function(){
          menutoggle.classList.toggle('active')
      }


