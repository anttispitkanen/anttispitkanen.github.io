var touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
if (touchsupport) {
    document.documentElement.className += " no-hover";
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

function addAClass(arrayOfArrays) {
    for(var i=0; i<arrayOfArrays.length; i++) {
        var id = arrayOfArrays[i][0];
        var classToBeAdded = arrayOfArrays[i][1];

        if(!document.getElementById(id).classList.contains(classToBeAdded)) {
            document.getElementById(id).classList.add(classToBeAdded);
        }
    }
}

//the elements listed in correct order for swiping to be possible
var classes = ["contact", "cooperation", "coding", "wellbeing", "music", "community"];

//for removing all the shown classes on esc key event
function removeShown() {
    for(var i=0; i<classes.length; i++) {
        var targetClass = classes[i];
        removeAClass([
            [targetClass, "expanded"],
            [targetClass+"-info", "shown"],
            [targetClass+"-close", "close-shown"],
            [targetClass+"-icon", "icon-hidden"],
            ["body", "body-open"]
        ])
        var targetId = "#" + targetClass;
        document.querySelector(targetId).removeAttribute("style");
    }
    somethingIsOpen = false;

}


//epic hack for closing an open div when going back in history:
//opening triggers a pushState function, so when ever a popstate fires, close all divs

//should probably refactor everything so that every closing function would just fire a popstate
//instead of directly calling removeShown => no unnecessary buildup of the history stack
window.onpopstate = function() {
    removeShown();
}


var somethingIsOpen = false;

function findTheOpenElement() {
    if(!somethingIsOpen) {
        return;
    }
    var indexOfOpenElement = 0;
    while(indexOfOpenElement < classes.length) {
        var inspectedClass = classes[indexOfOpenElement];
        var classlist = document.getElementById(inspectedClass).classList;
        if(classlist.contains('expanded')) {
            return indexOfOpenElement;
            break;
        } else {
            indexOfOpenElement++;
        }
    }
}

//for switching to the next element
function switchToNextElement() {
    if(!somethingIsOpen) {
        return;
    }

    var openElement = findTheOpenElement();
    var nextElement = null;
    if(openElement === 5) {
        nextElement = 0;
    } else {
        nextElement = openElement+1;
    }

    var openId = "#" + classes[openElement];
    var nextId = "#" + classes[nextElement];

    document.querySelector(openId).removeAttribute("style");
    document.querySelector(nextId).setAttribute("style", "animation: slideFromRight 0.5s ease");

    toggleShown(classes[openElement]);
    toggleShown(classes[nextElement]);
}

//for switching to the previous element
function switchToPreviousElement() {
    if(!somethingIsOpen) {
        return;
    }

    var openElement = findTheOpenElement();
    var previousElement = null;
    if(openElement === 0) {
        previousElement = 5;
    } else {
        previousElement = openElement-1;
    }

    var openId = "#" + classes[openElement];
    var previousId = "#" + classes[previousElement];

    document.querySelector(openId).removeAttribute("style");
    document.querySelector(previousId).setAttribute("style", "animation: slideFromLeft 0.5s ease");

    toggleShown(classes[openElement]);
    toggleShown(classes[previousElement]);
}


//event listeners for opening and closing divs by clicking
document.getElementById('contact-icon').onclick=function() {
    window.history.pushState(null, null, "");
    //document.querySelector("#contact").style.animation = "slideFromBelow 0.5s ease";
    document.querySelector("#contact").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("contact");
    somethingIsOpen = true;
};
document.getElementById('contact-close').onclick=function() { window.history.back() };

document.getElementById('cooperation-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#cooperation").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("cooperation");
    somethingIsOpen = true;
};
document.getElementById('cooperation-close').onclick=function() { window.history.back() };

document.getElementById('coding-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#coding").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("coding");
    somethingIsOpen = true;
};
document.getElementById('coding-close').onclick=function() { window.history.back() };

document.getElementById('wellbeing-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#wellbeing").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("wellbeing");
    somethingIsOpen = true;
};
document.getElementById('wellbeing-close').onclick=function() { window.history.back() };

document.getElementById('music-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#music").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("music");
    somethingIsOpen = true;
};
document.getElementById('music-close').onclick=function() { window.history.back() };

document.getElementById('community-icon').onclick=function() {
    window.history.pushState(null, null, "");
    document.querySelector("#community").setAttribute("style", "animation: slideFromBelow 0.5s ease");
    toggleShown("community");
    somethingIsOpen = true;
};
document.getElementById('community-close').onclick=function() { window.history.back() };



//regardless of which div is open pressing esc will try to close them all
//pressing key right takes to next element
//pressing key left takes to previous element
document.onkeydown=function(evt) {
    if(somethingIsOpen) {
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
    if (!somethingIsOpen) {
        return;
    }

    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;

    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* left swipe */
            switchToNextElement();
        } else {
            /* right swipe */
            switchToPreviousElement();
        }
    }
    /* reset values */
    xDown = null;
    yDown = null;
};

/*
document.addEventListener('backbutton', function() {
    if(somethingIsOpen) {
        removeShown();
    } else {
        history.go(-1);
    }
});
*/
