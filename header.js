const toggleNavMenu = () => {
    const navMenu = document.getElementById("menu");
    const style = window.getComputedStyle(navMenu);
    const menuMaxHeight = style.getPropertyValue('max-height');
    if (menuMaxHeight === "0px") {
        navMenu.style["max-height"] = "36vw";
        navMenu.style["padding-top"] = "1.6rem";
    } else {
        navMenu.style["max-height"] = "0px";
        navMenu.style["padding-top"] = "0px";
    }

    for (const li of navMenu.children) {
        li.classList.toggle('hideLi');
    }
}

const toggleSearchBar = () => {
    const searchBar = document.getElementById("search-bar");
    const sbInput = searchBar.children[0];
    const heading = document.getElementsByClassName("heading-wrapper")[0];
    const sbStyle = window.getComputedStyle(searchBar);
    
    const sbPosition = sbStyle.getPropertyValue("position");
    if (sbPosition === "fixed") {
        searchBar.style.position = "static";
        searchBar.style.top = "0";
        searchBar.style.opacity = "1";
        searchBar.style["max-width"] = "60%";
        sbInput.style.border = "3px solid white";
        heading.style.position = "fixed";
        heading.style.opacity = "0";
    } else {
        searchBar.style.position = "fixed";
        searchBar.style.top = "-99rem";
        searchBar.style.opacity = "0";
        searchBar.style["max-width"] = "0px";
        sbInput.style.border = "none";
        heading.style.position = "static";
        heading.style.opacity = "1";
    }
    
}

const navMenu = document.getElementById("menu");
let oldNavHeight;
let oldNavPadding;
let wasDesktop = false;

// fixes for when the hamburger menu and search bar are toggled and the screen is resized afterwards
window.onresize = window.onload = function() {
    if (window.innerWidth >= 600) {
        const searchBar = document.getElementById("search-bar");
        const sbInput = searchBar.children[0];
        const heading = document.getElementsByClassName("heading-wrapper")[0];
        searchBar.style.removeProperty("position");
        searchBar.style.removeProperty("top");
        searchBar.style.removeProperty("opacity");
        searchBar.style.removeProperty("max-width");
        sbInput.style.removeProperty("border");
        heading.style.position = "static";
        heading.style.opacity = "1";
    }
    
    oldNavHeight = navMenu.style["max-height"];
    oldNavPadding = navMenu.style["padding-top"];
        
    if (window.innerWidth >= 1100) {
        navMenu.style.removeProperty("max-height");
        navMenu.style.removeProperty("padding-top");
        wasDesktop = true;
    } else if (wasDesktop) {
        if (navMenu.children[0].classList[0] !== "hideLi") {
            for (const li of navMenu.children) {
                li.classList.toggle('hideLi');
            }
            
        }
        navMenu.style["max-height"] =  oldNavHeight;
        navMenu.style["padding-top"] = oldNavPadding;
        wasDesktop = false;
    }
}
