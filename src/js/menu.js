function funSupermarket () {
    titleMain2.innerHTML = "Supermarket" ;
    elementList1.innerHTML = "Fruits" ;
    elementList2.innerHTML = "Vegetables" ;
    elementList3.inertHTML = "Dairy" ;
    elementList4.inertHTML = "Bread" ;
    elementList5.innerHTML = "Sweets" ;
    elementList6.innerHTML = "Meat" ;
    elementList7.innerHTML = "Clearning" ;
}


function funNavidad () {
    titleMain2.innerHTML = "Navidad" ;
    elementList1.innerHTML = "Mother" ;
    elementList2.innerHTML = "Father" ;
    elementList3.inertHTML = "Brother" ;
    elementList4.inertHTML = "Sister" ;
    elementList5.innerHTML = "Friend" ;
    elementList6.innerHTML = "Wife" ;
    elementList7.innerHTML = "Husbant" ;
}


function funSchool () {
    titleMain2.innerHTML = "School" ;
    elementList1.innerHTML = "Books" ;
    elementList2.innerHTML = "Pencil" ;
    elementList3.inertHTML = "Clothes" ;
    elementList4.inertHTML = "Shoes" ;
    elementList5.innerHTML = "Pencil Case" ;
    elementList6.innerHTML = "Scissors" ;
    elementList7.innerHTML = "Backpack" ;
}


function funOther () {
    titleMain2.innerHTML = "Other" ;
    elementList1.innerHTML = "Birthday" ;
    elementList2.innerHTML = "Sports" ;
    elementList3.inertHTML = "Friends" ;
    elementList4.inertHTML = "Family" ;
    elementList5.innerHTML = "Tasks" ;
    elementList6.innerHTML = "Shopping" ;
    elementList7.innerHTML = "Other List" ;
}


btnLiSupermarket.addEventListener('click', () => {
    funSupermarket () ;
    console.log("Theme SuperMarket") ;
});


btnLiNavidad.addEventListener('click', () => {
    funNavidad () ;
    console.log("Theme Navidad") ;
});


btnLiSchool.addEventListener('click', () => {
    funSchool () ;
    console.log("Theme School") ;
});


btnLiOther.addEventListener('click', () => {
    funOther () ;
    console.log("Other School") ;
});
