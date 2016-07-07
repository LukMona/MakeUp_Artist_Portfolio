$(window).load(function() {

  function parallaxSections(){

    var sections = $(".section-prlx");
    console.log(sections);

    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      sections.css({
        "transform" : "translate(0px, "+ wScroll/2 +"px)"
      });
    });
  }

  parallaxSections();

});
