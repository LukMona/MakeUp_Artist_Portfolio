$(window).load(function() {

  function parallaxSections(){
    //looking for sections which should be on parallax
    var sections = $(".section-prlx");

    //setting simple parallax
    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      sections.css({
        "transform" : "translate(0px, "+ wScroll/2 +"px)"
      });
    });
  }

  parallaxSections();

  function sendForm(){
    //setting attributes for sending for, to prevent from sending a form with basic errors
    $("#send").on("click", function(){
      event.preventDefault();

      var name = $("#name");
      var mail = $("#mail");
      var title = $("#title");
      var message = $("#message");
      var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;

      var nameGetInfo = name.val();
      var mailGetInfo = mail.val();
      var messageGetInfo = message.val();
      var titleGetInfo = title.val();

      //name should has more thank 5 characters
      if(nameGetInfo.length < 5){
        var newElement = $("<div>Name should be longer than 5 characters</div>");
        newElement.insertAfter(name);
      }

      //mail regex
      else if(testEmail.test(mailGetInfo) === false ){
        var newElement2 = $("<div'>Wrong mail address</div>");
        newElement2.insertAfter(mail);
      }

      //message title should has more thank 5 characters
      else if(messageGetInfo.length < 5){
        var newElement3 = $("<div>Title should be longer than 5 characters</div>");
        newElement3.insertAfter(title);
      }

      //message title should has more thank 10 characters
      else if(messageGetInfo.length < 10){
        var newElement4 = $("<div>Message should be longer than 10 characters</div>");
        newElement4.insertAfter(message);
      }

      else{
        $.ajax({
          url: 'send.php',
          data: $("#contactForm").serialize(),
          type: 'POST',
          success: function(data){
            $(".btn").html('<div style="background-color: green; padding: 5px; width: 100%; border-radius: 5px; color: white; "> We have received your request. Expect a feedback shortly.</div><br />');
          }
        });
      }

    });
  }

  sendForm();

  function moveToTheSection(){
    $("#myNavbar").find("a").on("click", function(){
      var hrefInside = $(this).attr("href");
      var checkHrefPosition = $(hrefInside).offset().top;

      $("html, body").animate({
        scrollTop: checkHrefPosition
      }, 2000);
      return false;
    });

  }

  moveToTheSection();
});
