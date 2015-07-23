/**
 * ScrollSpy
 *
 */

var ScrollSpy = require('./modules/scrollspy');

global.ScrollSpy = module.exports = ScrollSpy;

(function ($) {

  $.fn.scrollSpy = function (options) {

    return this.each(function () {
      $(this).data('scrollspy', new ScrollSpy(this, options));
    });
  };

})(jQuery);
