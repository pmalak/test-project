
var lastTarget = "",
    target = ""

$( document ).ready(function() {
  console.log( "ready!" );
  
  // ===== Animace loga po nacteni stranky ====

  $(".logo").animate({
    height: "250px",
    width: "250px",
    opacity : 1
    }, 300, function(){

      $(this).animate({
        height: "180px",
        width: "180px"
      }, 500,function(){

        $(".js-show-second").animate({
           opacity : 1
        }, 500,function(){
        
          $(".js-show-third").animate({
             opacity : 1
          }, 500)
        }) 
      })       
    })

  //============== Zobrazení skrytého textu============
  $('.button').click(function(e){
    e.preventDefault();

    function up(argument) {      
      $(lastTarget).animate({
        opacity: 0
      }, 300)
      $(".on-click-info").slideUp(300)
      $(lastTarget).addClass("js-hidden") 
    }

    function down(argument) {
      $(target).delay(500).removeClass("js-hidden")
      $( ".on-click-info" ).slideDown(500)
      $(target).animate({
        opacity: 1,
      }, 500) 
    }    

    $('.button').removeClass('selected')
    var target = "." + $(this).attr('id')       

    if ( target == lastTarget) {
      up()
      lastTarget = ""
    } else {
      $(this).addClass('selected')
      up()
      down()
      lastTarget = target;
    }    
    
    // Cancel the default action
    
  });

});






