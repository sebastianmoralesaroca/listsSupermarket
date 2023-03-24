function modeNight () {
    menuNavigation.style.backgroundColor = backgroundDarkOscuro ;
    titleNav.style.color = "grey" ;
    contDownload.style.backgroundColor = backgroundDarkClaro ;
    titleDownload.style.color = "grey" ;
    main.style.backgroundColor = backgroundDarkClaro ;
    titleMain.style.color = "grey" ;
    inputList.style.backgroundColor = backgroundDarkOscuro ;
    numberList.style.backgroundColor = backgroundDarkOscuro ;
    body.style.backgroundColor = backgroundDarkOscuro ;
    logoMain.style.backgroundColor = backgroundDarkClaro ;
    elementList1.style.backgroundColor = backgroundDarkOscuro ;
    elementList2.style.backgroundColor = backgroundDarkOscuro ;
    elementList3.style.backgroundColor = backgroundDarkOscuro ;
    elementList4.style.backgroundColor = backgroundDarkOscuro ;
    elementList5.style.backgroundColor = backgroundDarkOscuro ;
    elementList6.style.backgroundColor = backgroundDarkOscuro ;
    elementList7.style.backgroundColor = backgroundDarkOscuro ;
}


function modeDay () {
    menuNavigation.style.backgroundColor = "white"; ;
    titleNav.style.color = "black" ;
    contDownload.style.backgroundColor = "whitesmoke" ;
    titleDownload.style.color = "black" ;
    main.style.backgroundColor = "whitesmoke" ;
    titleMain.style.color = "black" ;
    inputList.style.backgroundColor = "white" ;
    numberList.style.backgroundColor = "white" ;
    body.style.backgroundColor = "white" ;
    logoMain.style.backgroundColor = "whitesmoke" ;
    elementList1.style.backgroundColor = "white" ;
    elementList2.style.backgroundColor = "white" ;
    elementList3.style.backgroundColor = "white" ;
    elementList4.style.backgroundColor = "white" ;
    elementList5.style.backgroundColor = "white" ;
    elementList6.style.backgroundColor = "white" ;
    elementList7.style.backgroundColor = "white" ;
}


btnDay.addEventListener("click", () => {
    modeDay () ;
    console.log("Mode Day") ;
})


btnNight.addEventListener("click", () => {
    modeNight () ;
    console.log("Mode Night") ;
})