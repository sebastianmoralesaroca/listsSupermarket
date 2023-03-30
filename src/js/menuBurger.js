function funMenuDesplegado () {
    menuNavigation.style = "display:block; position:absolute; z-index:5; background-color:whitesmoke; width:100%; text-align:center; margin-top:40px;"
    logo.style = "margin-left:0px; width:40px; height:40px;" ;
    titleNav.style = "font-size:30px;"
    menuUl.style = "width:90%; padding-left:4%;" ;
    btnLiSupermarket.style = "padding-left:0%; text-align:center; height:70px; font-size:20px;" ;
    btnLiNavidad.style = "padding-left:0%; text-align:center; height:70px; font-size:20px;" ;
    btnLiSchool.style = "padding-left:0%; text-align:center; height:70px; font-size:20px;" ;
    btnLiOther.style = "padding-left:0%; text-align:center; height:70px; font-size:20px;" ;
}

function funMenuOculto () {
    menuNavigation.style = "display:none" ;
}

let i = 0 ;
btnMenuBurger.addEventListener ("click", (onclick) => {
    i = i + 1 ;
    if (i === 1) {
        funMenuDesplegado() ;
        console.log("Menu Desplegado") ;
    } else {
        i = 0 ;
        funMenuOculto() ;
        console.log("Menu Oculto") ;
    }
});