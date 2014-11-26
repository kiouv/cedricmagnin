/*global $:false */

// require( './helpers/requestAnimationFrame' );
// require( './vendors/tweenLite' );
// require( './tools/gsap.CSSPlugin' );

/* var /*Drag = require( './tools/infiniteDrag' ),
    View = require( './views/window.js' ),
    _ = require( 'underscore' ),*/

var Site = function(){

  // TABS
  $( "#tabs" ).tabs();

  // COLLAPSE
  $( ".faq" ).accordion({
    heightStyle: "content"
  });

  // SCROLL
  $("a[href^=#].scrollto").click(function(e) { 
    e.preventDefault();
    var dest = $(this).attr('href');
    if( $('a.nav-mobile' ).is(':visible') ) {
      $('html,body').animate({ scrollTop: $(dest).offset().top -40 }, 'slow');
    } else {
      $('html,body').animate({ scrollTop: $(dest).offset().top }, 'slow');
    }
  });

  // HEADER
  var stickyTop = $('#hero nav').offset().top; // returns number 
  
  $(document).ready(function(){ // load event
    var windowTop = $(document).scrollTop(); // returns number

    if ( stickyTop > windowTop ) {
      $('#hero nav').addClass('min');
    } else {
      $('#hero nav').removeClass('min');
    }

  });

  $(document).scroll(function(){ // scroll event
    var windowMove = $(document).scrollTop(); // returns number

    if ( stickyTop < windowMove ) {
      $('#hero nav').addClass('min');
    } else {
      $('#hero nav').removeClass('min');
    }

  });

  // HOVER IMGS
  // $( ".equipe img" ).hover(
  //   function() {
  //     $( this ).attr('temp-src', $( this ).attr('src') );
  //     $( this ).attr('src', $( this ).attr('data-replacement') );
  //   },
  //   function() {
  //     $( this ).attr('data-replacement', $( this ).attr('src') );
  //     $( this ).attr('src', $( this ).attr('temp-src') );
  //   }
  // );

  // NAV MOBILE
  if( !$('#hero nav ul' ).is(':visible') ) {
    $('a.nav-mobile').click( function() {
      $('#hero nav ul' ).toggle( 'blind', 300 );
    });
    $('#hero nav ul li a' ).click( function() {
      $('#hero nav ul' ).hide( 'blind', 300 );
    });
  }

  // MAIL
  $('#submit').click(function(){
   
    $.post("mail.php", $("#contact-form").serialize(),  function(response) {
      $('#success').html(response);
      // $('#success').hide('slow');
    });
    return false;
   
  });

  // DOMAINES
  $( '#domaines' ).hide();
  $( '#toggle-domaines' ).click( function(e) {
    e.preventDefault();
    $('#domaines' ).toggle( 'blind', 300 );
  });

};

new Site();


