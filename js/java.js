function showMobileMenu(){

    const burger = document.querySelector('.menu_mobile');
    const header = document.querySelector('.header_title');
    const burger_arrow = document.querySelector('.menu_arrow');
    const arrow = document.querySelector('.arrow');


    if(burger.style.display == "none")
    {
        
        burger.style.display = "block";
        burger_arrow.style.display = "block"     
        arrow.style.display = "none";
        header.style.display = "none";
    }
    else
    {
        burger.style.display = "none";
        burger_arrow.style.display = "none";
        header.style.display = "block";
        arrow.style.display = "block"; 
    }


}