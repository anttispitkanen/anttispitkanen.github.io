var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
if (touchsupport) {
    document.documentElement.className += " no-hover";
}


var state = {
    "openSection": null,
    "sections": ["contact", "cooperation", "coding", "wellbeing", "music", "community"]
}

//receives array of arrays with [id, class]
function toggleClass(arrayOfArrays) {
    for(var i=0; i<arrayOfArrays.length; i++) {
        var id = arrayOfArrays[i][0];
        var addedClass = arrayOfArrays[i][1];

        if(!document.getElementById(id).classList.contains(addedClass)) {
            document.getElementById(id).classList.add(addedClass);
        } else {
            document.getElementById(id).classList.remove(addedClass);
        }
    }
}

//less repetition by using this function
function toggleShown(topic) {
    toggleClass([
        [topic, "expanded"],
        [topic+"-info", "shown"],
        [topic+"-close", "close-shown"],
        [topic+"-icon", "icon-hidden"],
        ["body", "body-open"]
    ])
    document.querySelector("#"+topic).scrollTop = 0; //scroll to top when a section is opened
}

//for the esc key event
function removeAClass(arrayOfArrays) {
    for(var i=0; i<arrayOfArrays.length; i++) {
        var id = arrayOfArrays[i][0];
        var classToBeRemoved = arrayOfArrays[i][1];

        if(document.getElementById(id).classList.contains(classToBeRemoved)) {
            document.getElementById(id).classList.remove(classToBeRemoved);
        }
    }
}


//for removing all the shown classes on esc key event
function removeShown() {
    var target = state.openSection;
    removeAClass([
        [target, "expanded"],
        [target+"-info", "shown"],
        [target+"-close", "close-shown"],
        [target+"-icon", "icon-hidden"],
        ["body", "body-open"]
    ])
    state.openSection = null;
}


//epic hack for closing an open div when going back in history:
//opening triggers a pushState function, so when ever a popstate fires, close the open class
window.onpopstate = function() {
    removeShown();
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

    var openId = "#" + state.sections[openElement];
    var nextId = "#" + state.sections[nextElement];

    document.querySelector(openId).removeAttribute("style");
    document.querySelector(nextId).setAttribute("style", "animation: slideFromRight 0.5s ease-in-out");

    toggleShown(state.sections[openElement]);
    toggleShown(state.sections[nextElement]);
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

    var openId = "#" + state.sections[openElement];
    var previousId = "#" + state.sections[previousElement];

    document.querySelector(openId).removeAttribute("style");
    document.querySelector(previousId).setAttribute("style", "animation: slideFromLeft 0.5s ease-in-out");

    toggleShown(state.sections[openElement]);
    toggleShown(state.sections[previousElement]);
    state.openSection = state.sections[previousElement];
}


//event listeners for opening and closing divs by clicking
document.getElementById('contact-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#contact").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("contact");
    state.openSection = "contact";
};
document.getElementById('contact-close').onclick=function() { window.history.back() };

document.getElementById('cooperation-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#cooperation").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("cooperation");
    state.openSection = "cooperation";
};
document.getElementById('cooperation-close').onclick=function() { window.history.back() };

document.getElementById('coding-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#coding").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("coding");
    state.openSection = "coding";
};
document.getElementById('coding-close').onclick=function() { window.history.back() };

document.getElementById('wellbeing-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#wellbeing").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("wellbeing");
    state.openSection = "wellbeing";
};
document.getElementById('wellbeing-close').onclick=function() { window.history.back() };

document.getElementById('music-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#music").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("music");
    state.openSection = "music";
};
document.getElementById('music-close').onclick=function() { window.history.back() };

document.getElementById('community-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#community").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("community");
    state.openSection = "community";
};
document.getElementById('community-close').onclick=function() { window.history.back() };



//pressing esc goes back in history => closes open div, epic hack
//pressing key right takes to next element
//pressing key left takes to previous element
document.onkeydown=function(evt) {
    if(state.openSection !== null) {
        if("key" in evt) {
            if(evt.key === "Esc" || evt.key === "Escape") {
                window.history.back();
            } else if (evt.key === "ArrowRight") {
                switchToNextElement();
            } else if (evt.key === "ArrowLeft") {
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
    if (state.openSection === null) {
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
    document.getElementById('loading').className += " hidden";
})
