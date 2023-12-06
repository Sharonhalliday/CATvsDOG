$(document).ready(function() {
  $(".dropdown-toggle").click(function() {
  $("#menu-showing").toggle();
  $("#menu-hidden").toggle();
  });


    $("button#hello").click(function() {
    $("ul.unstyled").prepend("<li>Bark Bark!</li>");
    $("ul.styled").prepend("<li>Meow!</li>");
    $('li').css('background-color', 'green');
    $("ul.unstyled").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul.styled").children("li").first().click(function() {
    $(this).remove();
   });
    });

        
    $("button#stop").click(function() {
    $("ul.unstyled").prepend("<li>Bark Bark!</li>");
    $("ul.styled").prepend("<li>Meow!</li>");
    $('li').css('background-color', 'green');
    $("ul.unstyled").children("li").first().click(function() {
    $(this).remove();
    });
    $("ul.styled").children("li").first().click(function() {
    $(this).remove();
    });
    });

    $(".clickclick").click(function() {
      $("#C-showing").toggle();
      $("#D-hidden").toggle();
      });
  });


  
   
    