/*
 * Wandering Elements
 * 
 *
 * Copyright (c) 2014 Josh Vanderwillik
 * Licensed under the fun license.
 */

(function ($) {
  var win = {
    h: $( window ).height(),
    w: $( window ).width()
  };
  $( window ).on( 'resize', function(){
    win = {
      h: $( window ).height(),
      w: $( window ).width()
    };
  });

  function random( max, min ){
    min = min || 0;
    return Math.floor( Math.random() * (max - min) ) + min;
  }

  var boogey = function( element ){
    $( element ).animate({
      top: random( win.h - $( element ).height() ),
      left: random( win.w - $( element ).width() )
    }, random( 2000, 700 ), function(){
      boogey( element );
    });
  };

  // Collection method.
  $.fn.wander = function () {
    return this.each(function (i) {
      var $this = $( this );
      var initial = $this.offset();
      $( this ).css({
        position: 'absolute',
        top: initial.top,
        left: initial.left
      });

      boogey( this );
    });
  };

  // Static method.
  $.wander = function (options) {
    var all = $("*");
    var wandering = [];
    for( var i = 0; i < 11; i++ ){
      wandering.push( all.get( Math.floor( Math.random() * all.length ) ) );
    }
    $(wandering).appendTo( 'body' ).wander();
  };

  // Static method default options.
  $.wander.options = {};
}(jQuery));
