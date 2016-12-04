/**
 * Created by user on 20.11.16.
 */
(function($) {
    document.body.onmouseover = document.body.onmouseout = handler;
    document.body.addEventListener('click', getCurrentEl);
    var current_element = {};

    function handler(event) {
        function str(el) {
            if (!el) return "null";
            return {
                        element: el,
                        element_id: el.id|| '',
                        element_className: el.className || '',
                        element_tagName: el.tagName || ''
                    };
        }
        current_element = str(event.target);
        if (event.type == 'mouseover') {
            event.target.style.border = '1px solid blue';
        }
        if (event.type == 'mouseout') {
            event.target.style.border = '';
        }
    }

    function getCurrentEl() {
        current_element.element.innerText = 'Cool element';
    }
})(jQuery);