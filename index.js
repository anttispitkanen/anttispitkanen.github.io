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


/*
document.getElementById('contact-icon').onclick=() => {
    addClassIfNotPresent('contact', 'expanded');
    addClassIfNotPresent('contact-info', 'shown');
    addClassIfNotPresent('contact-close', 'close-shown');
    addClassIfNotPresent('contact-icon', 'icon-hidden');
    console.log("avataan " + isExpanded);

};
*/

document.getElementById('contact-close').onclick=() => {
    toggleClass([
        ["contact", "expanded"],
        ["contact-info", "shown"],
        ["contact-close", "close-shown"],
        ["contact-icon", "icon-hidden"]
    ]);
    /*
    document.getElementById('contact').classList.toggle('expanded');
    document.getElementById('contact-info').classList.toggle('shown');
    document.getElementById('contact-close').classList.toggle('close-shown');
    document.getElementById('contact-icon').classList.toggle('icon-hidden');
    */
};






document.getElementById('music').onclick=() => {
    document.getElementById('music').classList.toggle('expanded');
    document.getElementById('music-info').classList.toggle('shown');
    document.getElementById('music-close').classList.toggle('close-shown');
    document.getElementById('music-icon').classList.toggle('icon-hidden');
};
