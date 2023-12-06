$(document).ready(function() {
    $("button#hello").click(function() {
    $("ul").append("<li>Bark Bark!</li>");
    });

        
    $("button#stop").click(function() {
    $("ul").append("<li>Meow!</li>");
    });
    });

$(document).ready(function() {
    $("button#hello").click(function() {
      $("ul#user").append("<li>Bark Bark!</li>");
      $("ul#webpage").append("<li>Meow!</li>");
      $('li').css('background-color', 'green');
    });
  
  
    $("button#stop").click(function() {
      $("ul#user").append("<li>Meow!</li>");
      $("ul#webpage").append("<li>Bark Bark!</li>");
      $('li').css('background-color', 'green');
    });

    // $("ul#user").children("li").first().click(function() {
    // $(this).remove();
    // });
    // $("ul#webpage").children("li").first().click(function() {
    // $(this).remove();
    // });
  });
   
    