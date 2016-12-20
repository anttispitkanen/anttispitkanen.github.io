'use strict';

var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
if (touchsupport) {
    document.documentElement.className += ' no-hover';
}


var state = {
    'openSection': null,
    'sections': ['contact', 'cooperation', 'coding', 'wellbeing', 'music', 'community']
}

var SLIDE_FROM_LEFT = 'slideFromLeft 0.5s ease-in-out';
var SLIDE_FROM_RIGHT = 'slideFromRight 0.5s ease-in-out';
var SLIDE_FROM_BELOW = 'slideFromBelow 0.5s ease-in-out';
var SLIDE_DOWN = 'slideDown 0.5s ease-in-out';



function openElement(target) {
    window.history.pushState(null, null, '');
    document.getElementById(target).style.display = 'block';
    document.getElementById(target).style.animation = SLIDE_FROM_BELOW;
    window.scrollTo(0, 0);
    document.getElementById(target).scrollTop = 0;
    state.openSection = target;
}




//epic hack for closing an open div when going back in history:
//opening triggers a pushState function, so when ever a popstate fires,
//close the open class after animating it down
window.onpopstate = function() {
    var targetElement = state.openSection;
    document.getElementById(targetElement).style.animation = SLIDE_DOWN;

    setTimeout(function() {
        document.getElementById(targetElement).style.display = 'none';;
    }, 400);

    state.openSection = null;
}



//returns the index of the open element from the classes array
function indexOfOpenElement() {
    if (state.openSection !== null) {
        return state.sections.indexOf(state.openSection);
    }
}


//for switching to the next element
function switchToNextElement() {
    if(!state.openSection) {
        return;
    }

    var openElement = indexOfOpenElement();
    var nextElement = null;
    if(openElement === 5) {
        nextElement = 0;
    } else {
        nextElement = openElement+1;
    }

    var openID = state.sections[openElement];
    var nextID = state.sections[nextElement];

    document.getElementById(openID).style.animation = '';
    document.getElementById(openID).style.display = 'none';

    document.getElementById(nextID).style.display = 'block';
    //document.getElementById(nextID).style.animation = SLIDE_FROM_RIGHT;
    document.getElementById(nextID).style.animation = SLIDE_FROM_RIGHT;


    window.scrollTo(0, 0);
    document.body.scrollRight = 0;
    //document.getElementById(nextID).scrollTop = 0;
    //document.getElementById(nextID).scrollLeft = 0;


    state.openSection = state.sections[nextElement];
}

//for switching to the previous element
function switchToPreviousElement() {
    if(!state.openSection) {
        return;
    }

    var openElement = indexOfOpenElement();
    var previousElement = null;
    if(openElement === 0) {
        previousElement = 5;
    } else {
        previousElement = openElement-1;
    }

    var openID = state.sections[openElement];
    var previousID = state.sections[previousElement];

    document.getElementById(openID).style.animation = '';
    document.getElementById(openID).style.display = 'none';

    document.getElementById(previousID).style.display = 'block';
    document.getElementById(previousID).style.animation = SLIDE_FROM_LEFT;

    window.scrollTo(0, 0);

    //document.getElementById(previousID).scrollTop = 0;

    state.openSection = state.sections[previousElement];
}


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* IIFE for adding event listeners for opening sections */
(function openListeners() {
    var sections = state.sections;
    for (var i = 0; i < sections.length; i++) {
        var id = sections[i] + '-trigger';
        document.getElementById(id).onclick = function(event) {
            var targetID = event.currentTarget.id;
            var target = targetID.substr(0, targetID.indexOf('-'));
            openElement(target);
        }
    }
})();



////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* IIFE FOR CLOSING LISTENERS */

(function closeListeners() {
    for (var i = 0; i < state.sections.length; i++) {
        var id = state.sections[i] + '-close';
        document.getElementById(id).onclick = function() { window.history.back() };
    }
})();



//pressing esc goes back in history => closes open div, epic hack
//pressing key right takes to next element
//pressing key left takes to previous element
document.onkeydown=function(evt) {
    if(state.openSection !== null) {
        if('key' in evt) {
            if(evt.key === 'sc' || evt.key === 'Escape') {
                window.history.back();
            } else if (evt.key === 'ArrowRight') {
                switchToNextElement();
            } else if (evt.key === 'ArrowLeft') {
                switchToPreviousElement();
            }
        } else {
            if(evt.keyCode === 27) { //esc
                window.history.back();
            } else if (evt.keyCode === 39) { //right key
                switchToNextElement();
            } else if (evt.keyCode === 37) { //left key
                switchToPreviousElement();
            }
        }
    }
};



document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    //only do something if something is opened
    if (!state.openSection) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    //if there's more horizontal movement than vertical movement
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {
        if ( xDiff > 0 ) {
            /* left swipe */
            switchToNextElement();
        } else if (xDiff < 0 ) {
            /* right swipe */
            switchToPreviousElement();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};


//remove the loading spinner when images have loaded
window.addEventListener('load', function() {
    document.getElementById('loading').className += ' hidden';
})
