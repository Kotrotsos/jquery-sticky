 /**
  * Namespace
  */

if (typeof cb == 'undefined') {
    var cb = {};
}
if (!cb.widget) {
    cb.widget = {};
}


(function($) {

    /**
     * Sticky header
     * Create a sticky header
     */
    cb.widget.Stickyheader = function() {
        this.init.apply(this, arguments);
    }

    cb.widget.Stickyheader.prototype.defaults = {
        defaultvalue: '.header'
    };

    /**
     * initialize the component. Set all eventhandlers.
     */
    cb.widget.Stickyheader.prototype.init = function(element, settings) {
        /* The element and optional settings */
        this.element = element;
        this.$element = $( element );
        this.settings = $.extend({}, 
            this.defaults, 
            settings || {}
            );
        
        /* */
        this.$window = $( window );
        this.header = this.element;
        this.origOffsetY = this.header.offsetTop;
        this.className = this.settings.className || "sticky";
        
        /* The Scroll event. */
        this.$window.bind('scroll', this.onScroll.bind(this));

    };

    cb.widget.Stickyheader.prototype.onScroll = function() {
        var origOffsetY = this.origOffsetY,
            header = this.header;
             
            window.scrollY >= origOffsetY ? header.classList.add(this.className) :
                                            header.classList.remove(this.className);
    };


    /* We are also available as a jQuery plugin. */
    $.fn.stickyheader = function(settings) {
        $(this).each(function() {
            $(this).data('Stickyheader', new cb.widget.Stickyheader(this, settings));
        });
    };

})(jQuery);

 


 