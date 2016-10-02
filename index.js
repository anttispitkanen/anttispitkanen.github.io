
//receives array of arrays with [id, class]
function toggleClass(arrayOfArrays) {
    for(let i=0; i<arrayOfArrays.length; i++) {
        let id = arrayOfArrays[i][0];
        let addedClass = arrayOfArrays[i][1];

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

document.getElementById('contact-icon').onclick=() => { toggleShown("contact"); };
document.getElementById('contact-close').onclick=() => { toggleShown("contact"); };

document.getElementById('cooperation-icon').onclick=() => { toggleShown("cooperation"); };
document.getElementById('cooperation-close').onclick=() => { toggleShown("cooperation"); };

document.getElementById('music-icon').onclick=() => { toggleShown("music"); };
document.getElementById('music-close').onclick=() => { toggleShown("music"); };

document.getElementById('writing-icon').onclick=() => { toggleShown("writing"); };
document.getElementById('writing-close').onclick=() => { toggleShown("writing"); };

document.getElementById('community-icon').onclick=() => { toggleShown("community"); };
document.getElementById('community-close').onclick=() => { toggleShown("community"); };

document.getElementById('coding-icon').onclick=() => { toggleShown("coding"); };
document.getElementById('coding-close').onclick=() => { toggleShown("coding"); };
