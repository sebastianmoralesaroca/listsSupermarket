function funSupermarket () {
    imgDownload.src = "../../public/carritoDownload.png" ;
    mainImg.src = "../../public/imgSupermarket.jpg" ;
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
    imgDownload.src = "../../public/navidadDownload.png"
    mainImg.src = '../../public/imgNavidad.jpg';
    titleMain2.innerHTML = "Navidad" ;
    elementList1.innerHTML = "Mother <img src='../../public/mama.png'>" ;
    elementList2.innerHTML = "Father <img src='../../public/papa.png'>" ;
    elementList3.innerHTML = "Brother <img src='../../public/medio-hermano.png'>" ;
    elementList4.innerHTML = "Sister <img src='../../public/hermana.png'>" ;
    elementList5.innerHTML = "Friend <img src='../../public/amigos.png'>" ;
    elementList6.innerHTML = "Wife <img src='../../public/mujer.png'>" ;
    elementList7.innerHTML = "Husbant <img src='../../public/hombre.png'>" ;
}


function funSchool () {
    imgDownload.src = "../../public/school-bag.png" ;
    mainImg.src = '../../public/imgSchool.jpg' ;
    titleMain2.innerHTML = "School" ;
    elementList1.innerHTML = "Books <img src='../../public/book.png'>" ;
    elementList2.innerHTML = "Pencil <img src='../../public/pencil.png'>" ;
    elementList3.innerHTML = "Clothes <img src='../../public/shirt.png'>" ;
    elementList4.innerHTML = "Shoes <img src='../../public/sneakers.png'>" ;
    elementList5.innerHTML = "Pencil Case <img src='../../public/pencil-case.png'>" ;
    elementList6.innerHTML = "Scissors <img src='../../public/scissors.png'>" ;
    elementList7.innerHTML = "Backpack <img src='../../public/school-bag.png'>" ;
}


function funOther () {
    imgDownload.src = "../../public/listDownload.png" ;
    mainImg.src = '../../public/imgOtherlist.jpg' ;
    titleMain2.innerHTML = "Other" ;
    elementList1.innerHTML = "Birthday <img src='../../public/confetti.png'>" ;
    elementList2.innerHTML = "Sports <img src='../../public/football.png'>" ;
    elementList3.innerHTML = "Friends <img src='../../public/buddy.png'>" ;
    elementList4.innerHTML = "Family <img src='../../public/family.png'>" ;
    elementList5.innerHTML = "Tasks <img src='../../public/checklist.png'>" ;
    elementList6.innerHTML = "Shopping <img src='../../public/online-shopping.png'>" ;
    elementList7.innerHTML = "Other List <img src='../../public/listt.png'>" ;
}

btnLiSupermarket.addEventListener("click", () => {
    funSupermarket () ;
    console.log ("theme Supermarket") ;
})

btnLiNavidad.addEventListener("click", function() {
    funNavidad () ;
    console.log ("Theme Navidad") ;
})



btnLiSchool.addEventListener('click', () => {
    funSchool () ;
    console.log("Theme School") ;
});


btnLiOther.addEventListener('click', () => {
    funOther () ;
    console.log("Other School") ;
});
