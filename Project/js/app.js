// SET THE SECTIONS WIDTH AND ALIGN THE SECRIONS PROPERLY
document.querySelectorAll("section").forEach(function(el, i) {
    el.style.width = "60%";
    if (i % 2 === 0) {
        el.style.float = "left";
        el.style.textAlign = "left";
    } else {
        el.style.float = "right";
        el.style.textAlign = "right";
    }
});

// CREATE THE NAV BUTTONS DYNAMICALLY
document.querySelectorAll("section").forEach(el => {
    let tmp = document.createElement("button");
    // tmp.setAttribute("href", "#" + el.id);
    tmp.innerHTML = el.id;
    tmp.style.paddingTop = "20px";
    tmp.style.paddingBottom = "20px";
    tmp.style.paddingLeft = "20px";
    tmp.style.paddingRight = "20px";
    tmp.style.fontSize = "1.2rem";
    // WE GIVE THE ANCHOR A UNIQUE ID TO BE ABLE TO HIGHLOGHT ACTIVE SECTION BY 
    // ITS CORRESPONDING BUTTON
    tmp.id = el.id + "anchor";
    document.getElementsByClassName("topnav")[0].appendChild(tmp);
});

// alert(document.getElementById("section1").getBoundingClientRect().width);

// FUNCTION TO KNOW WHICH SECTION IS SCROLLED INTO VIEWPORT
function scrollEvent(){
    document.querySelectorAll("section").forEach(el => {
        let rect = el.getBoundingClientRect();
        // WE COMPARE THE START AND END OF SECTION WITH THE START AND END OF 
        // VIEWPORT WITH A LITTLE MARGIN TO IMPROVE INTERACTICITY
        if ((rect.top - 50) <= 0 &&
            rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)) {
            console.log("In View!! " + el.id );
            // THE NEXT TWO LINES HIGHLIGHT BOTH THE SECTION AND CORRESPONDING BUTTON AS WELL
            el.className = "active";
            document.getElementById(el.id + "anchor").className = "active";
            clearOtherAnchors(el.id + "anchor");
        } else {
            el.className = "";
        }
    });
}

document.querySelectorAll("button").forEach(el => {
    el.addEventListener("click", function(){
        console.log(el);
        el.className = "active";

        clearOtherAnchors(el.id);

        // THIS IS TO USE SCROLLINTOVIEW METHOD
        // WE GET THE ID OF THE SECTION WHICH WE KNOW IS THE TEXT CONTENT OF THE ANCHOR TAG
        let secId = el.textContent;
        document.getElementById(secId).scrollIntoView({behavior: "smooth"});
    });
});

function clearOtherAnchors(str) {
    document.querySelectorAll("button").forEach(el => {
        if (el.id !== str) {
            el.className = "";
        }
    });
}