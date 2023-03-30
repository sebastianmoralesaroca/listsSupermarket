function funSupermarket () {
    imgDownload.src = "../../public/logoSupermarketDownload.png" ;
    mainImg.src = "../../public/imgSupermarket.jpg" ;
    logoMain.src = "../../public/logoSupermarketMain.png" ;
    titleMain2.innerHTML = "Supermarket" ;
    elementList1.innerHTML = "Fruits <img src='../../public/fruits.png'>" ;
    elementList2.innerHTML = "Vegetables <img src='../../public/vegetables.png'>" ;
    elementList3.innerHTML = "Dairy <img src='../../public/dairy.png'>" ;
    elementList4.innerHTML = "Bread <img src='../../public/bread.png'>" ;
    elementList5.innerHTML = "Sweets <img src='../../public/sweets.png'>" ;
    elementList6.innerHTML = "Meat <img src='../../public/meat.png'>" ;
    elementList7.innerHTML = "Clearning <img src='../../public/cleaning.png'>" ;
}


function funNavidad () {
    imgDownload.src = "../../public/logoNavidadDownload.png"
    mainImg.src = '../../public/imgNavidad.jpg';
    logoMain.src = "../../public/logoNavidadMain.png" ;
    titleMain2.innerHTML = "Navidad" ;
    elementList1.innerHTML = "Mother <img src='../../public/mother.png'>" ;
    elementList2.innerHTML = "Father <img src='../../public/father.png'>" ;
    elementList3.innerHTML = "Brother <img src='../../public/brother.png'>" ;
    elementList4.innerHTML = "Sister <img src='../../public/sister.png'>" ;
    elementList5.innerHTML = "Friend <img src='../../public/friends.png'>" ;
    elementList6.innerHTML = "Wife <img src='../../public/wife.png'>" ;
    elementList7.innerHTML = "Husbant <img src='../../public/husbant.png'>" ;
}


function funSchool () {
    imgDownload.src = "../../public/logoSchoolDownload.png" ;
    mainImg.src = '../../public/imgSchool.jpg' ;
    logoMain.src = "../../public/logoSchoolMain.png" ;
    titleMain2.innerHTML = "School" ;
    elementList1.innerHTML = "Books <img src='../../public/books.png'>" ;
    elementList2.innerHTML = "Pencil <img src='../../public/pencil.png'>" ;
    elementList3.innerHTML = "Clothes <img src='../../public/shirt.png'>" ;
    elementList4.innerHTML = "Shoes <img src='../../public/shoes.png'>" ;
    elementList5.innerHTML = "Pencil Case <img src='../../public/pencil-case.png'>" ;
    elementList6.innerHTML = "Scissors <img src='../../public/tijeras.png'>" ;
    elementList7.innerHTML = "Backpack <img src='../../public/backpack.png'>" ;
}


function funOther () {
    imgDownload.src = "../../public/logoListDownload.png" ;
    mainImg.src = '../../public/imgOtherlist.jpg' ;
    logoMain.src = "../../public/logoListMain.png" ;
    titleMain2.innerHTML = "Other" ;
    elementList1.innerHTML = "Birthday <img src='../../public/bristday.png'>" ;
    elementList2.innerHTML = "Sports <img src='../../public/futbol.png'>" ;
    elementList3.innerHTML = "Friends <img src='../../public/friends.png'>" ;
    elementList4.innerHTML = "Family <img src='../../public/family.png'>" ;
    elementList5.innerHTML = "Tasks <img src='../../public/listVerifications.png'>" ;
    elementList6.innerHTML = "Shopping <img src='../../public/shopping.png'>" ;
    elementList7.innerHTML = "Other List <img src='../../public/lista-de-verificacion.png'>" ;
}

btnLiSupermarket.addEventListener("click", () => {
    funSupermarket () ;
    funDeleteList () ;
    console.log ("theme Supermarket") ;
})

btnLiNavidad.addEventListener("click", function() {
    funNavidad () ;
    funDeleteList () ;
    console.log ("Theme Navidad") ;
})



btnLiSchool.addEventListener('click', () => {
    funSchool () ;
    funDeleteList () ;
    console.log("Theme School") ;
});


btnLiOther.addEventListener('click', () => {
    funOther () ;
    funDeleteList () ;
    console.log("Other School") ;
});
