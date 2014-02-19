/**
 * Created by yedukondalu.v on 2/5/14.
 */
(function ($) {
    $.widget('lobby.toolTip', {
        options: {
            width: 'auto',
            height: 'auto'
        },
        _create: function () {
            var self = this;
            $(this.element).hover(function () {
                self._showToolTip($(this));
            },function () {
                self._hideToolTip($(this));
            }).mousemove(function (e) {
                self._getPosition(e);
            });
        },
        _showToolTip: function (element) {
            var getHtml = this._htmlForToolTip(element);
            element.after(getHtml);
        },
        _hideToolTip: function (element) {
            element.next('.tool-tip-container').remove();
        },
        _htmlForToolTip: function (element) {
            var str = "<div class='tool-tip-container'>";
            str += "<div class='tooltip-text'>" + element.attr('data-title') + "</div>";
            str += "</div>";
            return str;
        },
        _getPosition: function (e) {
            var mouseX = e.pageX + 10;
            var mouseY = e.pageY + 10;
            $(this.element).next('.tool-tip-container').css({'left': mouseX + 'px', 'top': mouseY + 'px'});
        },
        destroy: function () {
            $(this.element).off("mouseenter mouseleave");
        }
    });
})(jQuery);



