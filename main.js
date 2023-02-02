function menu_open(){
    // alert("it is clicked");
    let mainUl = document.querySelector(".mainUl");
    
mainUl.classList.remove("scale-y-0");
    mainUl.classList.add("scale-y-[1]");
    console.log(mainUl);
}