$(window).load(function() {

  function parallaxSections(){

    var sections = $(".section-prlx");

    $(window).scroll(function(){
      var wScroll = $(this).scrollTop();
      sections.css({
        "transform" : "translate(0px, "+ wScroll/2 +"px)"
      });
    });
  }

  parallaxSections();

  function sendForm(){
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

      if(nameGetInfo.length < 5){
        var newElement = $("<div class='alert alert-info'>Name should be longer than 5 characters</div>");
        newElement.insertAfter(name);
      }

      if(testEmail.test(mailGetInfo) === false ){
        var newElement2 = $("<div class='alert alert-info'>Wrong mail address</div>");
        newElement2.insertAfter(mail);
      }

      if(messageGetInfo.length < 5){
        var newElement3 = $("<div class='alert alert-info'>Title should be longer than 5 characters</div>");
        newElement3.insertAfter(title);
      }

      if(messageGetInfo.length < 10){
        var newElement4 = $("<div class='alert alert-info'>Message should be longer than 10 characters</div>");
        newElement4.insertAfter(message);
      }

    });
  }

sendForm();
});
