/*
let addClassIfNotPresent = function(id, addedClass) {
    if(!document.getElementById(id).classList.contains(addedClass)) {
        document.getElementById(id).classList.add(addedClass);
    }
}
*/

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
/*
function addClassIfNotPresent(arrayOfArrays) {
    for(let i=0; i<arrayOfArrays.length; i++) {
        let id = arrayOfArrays[i][0];
        let addedClass = arrayOfArrays[i][1];

        if(!document.getElementById(id).classList.contains(addedClass)) {
            document.getElementById(id).classList.add(addedClass);
        }
    }
}
*/
document.getElementById('contact-icon').onclick=() => {
    toggleClass([
        ["contact", "expanded"],
        ["contact-info", "shown"],
        ["contact-close", "close-shown"],
        ["contact-icon", "icon-hidden"]
    ]);
};
document.getElementById('contact-close').onclick=() => {
    toggleClass([
        ["contact", "expanded"],
        ["contact-info", "shown"],
        ["contact-close", "close-shown"],
        ["contact-icon", "icon-hidden"]
    ]);
};

document.getElementById('cooperation-icon').onclick=() => {
    toggleClass([
        ["cooperation", "expanded"],
        ["cooperation-info", "shown"],
        ["cooperation-close", "close-shown"],
        ["cooperation-icon", "icon-hidden"]
    ]);
};
document.getElementById('cooperation-close').onclick=() => {
    toggleClass([
        ["cooperation", "expanded"],
        ["cooperation-info", "shown"],
        ["cooperation-close", "close-shown"],
        ["cooperation-icon", "icon-hidden"]
    ]);
};

document.getElementById('music-icon').onclick=() => {
    toggleClass([
        ["music", "expanded"],
        ["music-info", "shown"],
        ["music-close", "close-shown"],
        ["music-icon", "icon-hidden"]
    ]);
};
document.getElementById('music-close').onclick=() => {
    toggleClass([
        ["music", "expanded"],
        ["music-info", "shown"],
        ["music-close", "close-shown"],
        ["music-icon", "icon-hidden"]
    ]);
};

document.getElementById('writing-icon').onclick=() => {
    toggleClass([
        ["writing", "expanded"],
        ["writing-info", "shown"],
        ["writing-close", "close-shown"],
        ["writing-icon", "icon-hidden"]
    ]);
};
document.getElementById('writing-close').onclick=() => {
    toggleClass([
        ["writing", "expanded"],
        ["writing-info", "shown"],
        ["writing-close", "close-shown"],
        ["writing-icon", "icon-hidden"]
    ]);
};

document.getElementById('community-icon').onclick=() => {
    toggleClass([
        ["community", "expanded"],
        ["community-info", "shown"],
        ["community-close", "close-shown"],
        ["community-icon", "icon-hidden"]
    ]);
};
document.getElementById('community-close').onclick=() => {
    toggleClass([
        ["community", "expanded"],
        ["community-info", "shown"],
        ["community-close", "close-shown"],
        ["community-icon", "icon-hidden"]
    ]);
};

document.getElementById('coding-icon').onclick=() => {
    toggleClass([
        ["coding", "expanded"],
        ["coding-info", "shown"],
        ["coding-close", "close-shown"],
        ["coding-icon", "icon-hidden"]
    ]);
};
document.getElementById('coding-close').onclick=() => {
    toggleClass([
        ["coding", "expanded"],
        ["coding-info", "shown"],
        ["coding-close", "close-shown"],
        ["coding-icon", "icon-hidden"]
    ]);
};
