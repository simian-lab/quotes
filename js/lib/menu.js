/*
 * Menu for the quotes
 *
 * This script identifies the headings on the document
 * and links them for quick access.
 *
 */

(function( $ ){

  $.fn.menu = function() {
    return this.each(function() {
      var $this = $(this);
      var $toggle = $('<a href="#" class="menu-toggle">&nbsp;</a>');

      $toggle.click(function(e) {
        $('.menu-list').toggleClass('visible');

        e.preventDefault();
      });

      // Make sure the links close the menu
      $this.find('a').click(function() {
        $('.menu-list').removeClass('visible');
      });

      $this.prepend($toggle);
    });
  };

})( jQuery );
