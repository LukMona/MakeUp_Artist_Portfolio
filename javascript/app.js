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

  function photoGallery(){
    //looking for sections with portfolio
    var imgs = $(".img-gallery");
    var body = $("#portfolio");

    //setting attributes for clicked imgs, full screen etc.
    for (var i = 0; i < imgs.length; i++){
      $(imgs[i]).on("click", function(){
        var imgSrc = this.getAttribute("src");
        var newDiv = $("<div class='fullScreen'><button class='close'><span>&#x2613;</span></button><img src=" + imgSrc + "></div>");

        newDiv.appendTo(body);

        //setting closing attribute for fullscreen img
        newDiv.on("click", "button", function(){
          $(".fullScreen").remove();
        });

      });
    }
  }

  photoGallery();

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
      if(testEmail.test(mailGetInfo) === false ){
        var newElement2 = $("<div'>Wrong mail address</div>");
        newElement2.insertAfter(mail);
      }

      //message title should has more thank 5 characters
      if(messageGetInfo.length < 5){
        var newElement3 = $("<div>Title should be longer than 5 characters</div>");
        newElement3.insertAfter(title);
      }

      //message title should has more thank 10 characters
      if(messageGetInfo.length < 10){
        var newElement4 = $("<div>Message should be longer than 10 characters</div>");
        newElement4.insertAfter(message);
      }

    });
  }

  sendForm();
});
