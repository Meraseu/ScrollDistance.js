(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([], function () {
			return factory(root);
		});
	} else if (typeof exports === 'object') {
		module.exports = factory(root);
	} else {
		root.ScrollDistance = factory(root);
	}
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function (window) {

	'use strict';

	class ScrollDistance {
		constructor(element = window, options) {
            options = options || {};
            options = Object.assign({
                distance: 300,
                scrollAfter: function() {}
            }, options);
            this.element = element;
            this.options = options;
        }
        onDetectedScrolling() {
            this.isScrolling = null;
            this.scrollHandlers = this._onDetectedScrolling.bind(this);
            this.element.addEventListener('scroll', this.scrollHandlers);
        }
        _onDetectedScrolling(e) {
            clearTimeout(this.isScrolling);
            this.isScrolling = setTimeout(() => {
                this.options.scrollAfter();
            }, this.options.distance);
        }
        destroy() {
            this.element.removeEventListener('scroll', this.scrollHandlers);
        }
	}

    return ScrollDistance;    

});
