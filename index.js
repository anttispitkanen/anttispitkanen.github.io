//document.getElementById('heading').onclick=() => {
//    console.log("jou");
//};

let isExpanded = false;
console.log("funktioiden ulkopuolella ollaan että " + isExpanded);

let addClassIfNotPresent = function(id, addedClass) {
    if(!document.getElementById(id).classList.contains(addedClass)) {
        document.getElementById(id).classList.add(addedClass);
    }
}


document.getElementById('contact').onclick=() => {
    //if(!isExpanded) {
        addClassIfNotPresent('contact', 'expanded');
        addClassIfNotPresent('contact-info', 'shown');
        addClassIfNotPresent('contact-close', 'close-shown');
        addClassIfNotPresent('contact-icon', 'icon-hidden');
        //isExpanded = true;
        console.log("avataan " + isExpanded);

        document.getElementById('contact-close').onclick=() => {
            document.getElementById('contact').classList.toggle('expanded');
            document.getElementById('contact-info').classList.toggle('shown');
            document.getElementById('contact-close').classList.toggle('close-shown');
            document.getElementById('contact-icon').classList.toggle('icon-hidden');
            console.log("ruksiin osui :D");
            //isExpanded = false;
        };
    //};
};

/*
if (!isExpanded) {
    document.getElementById('contact').onclick=() => {
        document.getElementById('contact').classList.toggle('expanded');
        document.getElementById('contact-info').classList.toggle('shown');
        document.getElementById('contact-close').classList.toggle('close-shown');
        document.getElementById('contact-icon').classList.toggle('icon-hidden');
        isExpanded = true;
        console.log(isExpanded);
    }
};
*/






document.getElementById('music').onclick=() => {
    document.getElementById('music').classList.toggle('expanded');
    document.getElementById('music-info').classList.toggle('shown');
    document.getElementById('music-close').classList.toggle('close-shown');
    document.getElementById('music-icon').classList.toggle('icon-hidden');
};
