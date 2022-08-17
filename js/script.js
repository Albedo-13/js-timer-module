'use strict';

import timer from './cyx-timer.min';

window.addEventListener('DOMContentLoaded', () => {

    timer({
        endDate: new Date(1900, 1, 1),  // Put your end date here
        parentSelector: ".timer",
        daySelector: "#days",
        hourSelector: "#hours",
        minuteSelector: "#minutes",
        secondSelector: "#seconds",
    });

    // *YOUR CODE GOES HERE*
});

