/**
 * Created by yedukondalu.v on.
 */
(function ($) {
    $.fn.highlightText = function (options) {
        var defaults = {
            textColor: 'black',
            backgroundColor: 'green'
        }
        $.extend(defaults, options);
        $(this).css({
            'color': defaults.textColor,
            'backgroundColor': defaults.backgroundColor
        });
    };
})(jQuery);