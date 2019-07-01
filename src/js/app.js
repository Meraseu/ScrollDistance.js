import '../styles/app.scss';

import ScrollDistance from './components/ScrollDistance';

window.scrollDistance = window.scrollDistance || {};

scrollDistance = new ScrollDistance(window, {
    scrollAfter: function() {
        console.log(1);
    }
});

scrollDistance.onDetectedScrolling();