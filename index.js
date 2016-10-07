
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

document.getElementById('contact-icon').onclick=function() { toggleShown("contact"); };
document.getElementById('contact-close').onclick=function() { toggleShown("contact"); };

document.getElementById('cooperation-icon').onclick=function() { toggleShown("cooperation"); };
document.getElementById('cooperation-close').onclick=function() { toggleShown("cooperation"); };

document.getElementById('music-icon').onclick=function() { toggleShown("music"); };
document.getElementById('music-close').onclick=function() { toggleShown("music"); };

document.getElementById('writing-icon').onclick=function() { toggleShown("writing"); };
document.getElementById('writing-close').onclick=function() { toggleShown("writing"); };

document.getElementById('community-icon').onclick=function() { toggleShown("community"); };
document.getElementById('community-close').onclick=function() { toggleShown("community"); };

document.getElementById('coding-icon').onclick=function() { toggleShown("coding"); };
document.getElementById('coding-close').onclick=function() { toggleShown("coding"); };
