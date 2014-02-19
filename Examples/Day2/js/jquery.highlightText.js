/**
 * Created by yedukondalu.v on 2/11/14.
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