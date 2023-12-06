$(document).ready(function() {
    $("button#hello").click(function() {
    $("ul").prepend("<li>Bark bark!</li>");
    });

        
    $("button#stop").click(function() {
    $("ul").prepend("<li>Meow!</li>");
    });
    });

$(document).ready(function() {
    $("button#hello").click(function() {
      $("ul#user").prepend("<li>Meow</li>");
      $("ul#webpage").prepend("<li>Bark Bark!</li>");
      $('li').css('background-color', 'green');
    });
  
  
    $("button#stop").click(function() {
      $("ul#user").prepend("<li>Bark bark!</li>");
      $("ul#webpage").prepend("<li>Meow.</li>");
      $('li').css('background-color', 'green');
    });
  });
   
    