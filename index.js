
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

//for removing all the shown classes on esc key event
function removeShown() {
    var classes = ["contact", "cooperation", "music", "wellbeing", "coding", "community"];
    for(var i=0; i<classes.length; i++) {
        var targetClass = classes[i];
        removeAClass([
            [targetClass, "expanded"],
            [targetClass+"-info", "shown"],
            [targetClass+"-close", "close-shown"],
            [targetClass+"-icon", "icon-hidden"],
            ["body", "body-open"]
        ])
    }

}


document.getElementById('contact-icon').onclick=function() { toggleShown("contact"); };
document.getElementById('contact-close').onclick=function() { toggleShown("contact"); };

document.getElementById('cooperation-icon').onclick=function() { toggleShown("cooperation"); };
document.getElementById('cooperation-close').onclick=function() { toggleShown("cooperation"); };

document.getElementById('music-icon').onclick=function() { toggleShown("music"); };
document.getElementById('music-close').onclick=function() { toggleShown("music"); };

document.getElementById('wellbeing-icon').onclick=function() { toggleShown("wellbeing") };
document.getElementById('wellbeing-close').onclick=function() { toggleShown("wellbeing") };

document.getElementById('community-icon').onclick=function() { toggleShown("community"); };
document.getElementById('community-close').onclick=function() { toggleShown("community"); };

document.getElementById('coding-icon').onclick=function() { toggleShown("coding"); };
document.getElementById('coding-close').onclick=function() { toggleShown("coding"); };

//regardless of which div is open pressing esc will try to close them all
document.onkeydown=function(evt) {
    console.log("nappulaa painettu");
    if("key" in evt) {
        if(evt.key === "Esc" || evt.key === "Escape") {
            removeShown();
        }
    } else {
        if(evt.keyCode === 27) {
            removeShown();
        }
    }
};
