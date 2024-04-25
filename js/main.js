document.getElementById("btn-login").addEventListener("click", function(){
    //submit user and password ....
    window.location.replace("../pages/home.html");
});



document.getElementById("btn-lateral-menu-toggle").addEventListener("click", hide);

document.getElementById("btn-close-menu").addEventListener("click", hide);

document.getElementById("btn-toggle-search").addEventListener("click",()=>{
    document.getElementsByClassName("search-div")[0].classList.toggle("remove")
})

document.getElementById("btn-toggle-filters").addEventListener("click",()=>{
    document.getElementsByClassName("filters-div")[0].classList.toggle("remove")
})

function hide(){
    document.getElementsByClassName("lateral-menu")[0].classList.toggle("lateral-menu-expanded");
    document.getElementById("btn-toggle-search").classList.toggle("hide")
    document.getElementById("btn-toggle-filters").classList.toggle("hide")
    document.getElementById("btn-close-menu").classList.toggle("hide")
    document.getElementsByClassName("search-div")[0].classList.add("remove")
    document.getElementsByClassName("filters-div")[0].classList.add("remove")
    let notes = document.getElementsByClassName("lateral-menu-item");
    Array.from(notes).forEach(element => {
        element.classList.toggle("remove");
    });
}
