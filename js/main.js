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

document.getElementById("search-criteria").addEventListener("change",()=>{
    let option = document.getElementById("search-criteria").value;
    let date_labels = document.getElementsByClassName("date-label");
    let date_inputs = document.getElementsByClassName("date-input");
    switch(option){
        case("search-criteria-title"):
            Array.from(date_labels).forEach(label => label.classList.add("hide-date-title"))
            Array.from(date_inputs).forEach(label => label.classList.add("hide-date-title"))
            document.getElementById("search-title-label").classList.remove("hide-date-title");
            document.getElementById("search-title").classList.remove("hide-date-title");
            break;
        
        case("search-criteria-date"):
        Array.from(date_labels).forEach(label => label.classList.remove("hide-date-title"))
        Array.from(date_inputs).forEach(label => label.classList.remove("hide-date-title"))
        document.getElementById("search-title-label").classList.add("hide-date-title");
        document.getElementById("search-title").classList.add("hide-date-title");
        break;
        
        default:
            console.log("invalid search criteria selected")
        
    }
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
