
$(document).ready(function () {

  var user={
    username : null,
    userId : null,
    email : null,
    logedIn : false,
    logIn : function(email_, password_){

    },
    logOut : function(){
      user.email = null;
      user.userId = null;
      user.user = null;
      user.logedIn = false;
      $("#LogOut_button").show();
    },
    comment : function(establishmentID){

    },
    rate : function(establishmentID){

    }
  }

  
  //---------------------------------------Smooth scroll---------------------------------
  //---------------------------------------Smooth scroll---------------------------------
  //---------------------------------------Smooth scroll---------------------------------


  $('body').scrollspy({ target: ".navbar", offset: 50 });
  
  $("#navbarResponsive a").on('click', function (event) {
    
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {
        window.location.hash = hash;
      });
    } 
  });

  //--------------------------------Updating Modal values---------------------------------
  //--------------------------------Updating Modal values---------------------------------
  //--------------------------------Updating Modal values---------------------------------

  $("#carousel-item1-button").click(function (event) { 
    $("#modal-title").text($("#carousel-item1-title").text());
    $("#modal-desc").text($("#carousel-item1-desc").text());
    $("#modal-address").text($("#carousel-item1-address").text());
    $("#modal-img").attr("src", $("#carousel-item1-img").attr("src"));
  });

  $("#carousel-item2-button").click(function (event) { 
    $("#modal-title").text($("#carousel-item2-title").text());
    $("#modal-desc").text($("#carousel-item2-desc").text());
    $("#modal-address").text($("#carousel-item2-address").text());
    $("#modal-img").attr("src", $("#carousel-item2-img").attr("src"));
  });

  $("#carousel-item3-button").click(function (event) { 
    $("#modal-title").text($("#carousel-item3-title").text());
    $("#modal-desc").text($("#carousel-item3-desc").text());
    $("#modal-address").text($("#carousel-item3-address").text());
    $("#modal-img").attr("src", $("#carousel-item3-img").attr("src"));
  });

  $("#carousel-item4-button").click(function (event) { 
    $("#modal-title").text($("#carousel-item4-title").text());
    $("#modal-desc").text($("#carousel-item4-desc").text());
    $("#modal-address").text($("#carousel-item4-address").text());
    $("#modal-img").attr("src", $("#carousel-item4-img").attr("src"));
  });
});

