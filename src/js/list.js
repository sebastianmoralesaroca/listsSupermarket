
let count = 0 ;
function counter () {
    textCountList2.innerHTML = count ;
};


function addElement () {
    const createDiv = document.createElement("div") ;
    createDiv.id = "newDiv" ;
    const newDiv = document.getElementById("newDiv")
    contElement.appendChild(createDiv) ;
    createDiv.style = "display:grid; grid-template-columns:5% 10% 30% 20% 10% 10% 5%; width:80%; height:70px; border: solid 2px blue; background-color:white; border-radius:15px; margin-bottom:15px; box-shadow: 3px 4px 3px 3px #d1d1d1;" ;
    
    const createAmaunt = document.createElement("h3") ;
    const valueEmaunt = numberList.value ;
    createAmaunt.innerHTML = valueEmaunt ;
    createDiv.appendChild(createAmaunt) ;
    createAmaunt.style = "grid-column:2; font-family:sans-serif; font-size:30px; font-weight:bold; margin:8px; padding-left:25px; padding-top:6px; background-color: whitesmoke; color:blue" ;

    const createElement = document.createElement ("h3") ;
    const valueElement = inputList.value ;
    createElement.innerHTML = valueElement ;
    createDiv.appendChild(createElement) ;
    createElement.style = "grid-column:3; margin-left:20px; font-family:sans-serif; font-size:22px; font-weight:bold; color:black;" ;
    
    const createCheck = document.createElement ("input") ;
    createCheck.type = "checkbox" ;
    createDiv.appendChild(createCheck) ;
    createCheck.style = "grid-column:6; width:20px; height:20px; margin:auto;" ;
    createCheck.addEventListener("click", () => {
        if (createCheck.checked) {
            createDiv.style = "display:grid; grid-template-columns:5% 10% 30% 20% 10% 10% 5%; width:92%; height:70px; border:none; background-color:#d1d1d1; border-radius:15px; margin-bottom:15px; box-shadow: 3px 4px 3px 3px #d1d1d1;" ;
            createAmaunt.style = "grid-column:2; font-family:sans-serif; font-size:30px; font-weight:bold; margin:8px; padding-left:25px; padding-top:6px; background-color:#e5e5e5; color:blue" ;
        } else {
            createDiv.style = "display:grid; grid-template-columns:5% 10% 30% 20% 10% 10% 5%; width:92%; height:70px; border: solid 2px blue; background-color:withe; border-radius:15px; margin-bottom:15px; box-shadow: 3px 4px 3px 3px #d1d1d1;" ;
            createAmaunt.style = "grid-column:2; font-family:sans-serif; font-size:30px; font-weight:bold; margin:8px; padding-left:25px; padding-top:6px; background-color: whitesmoke; color:blue" ;
            console.log("Element True") ;
        }
    });

    const createDelete = document.createElement ("button") ;
    createDelete.type = "reset" ;
    createDiv.appendChild(createDelete) ;
    createDelete.style = "grid-column:7; width:20px; height:20px; background:transparent; border:none; padding:0px; margin:auto;" ;
    createDelete.addEventListener("click", () => {
        contElement.removeChild(createDiv) ;
        count = count - 1 ;
        counter () ;
    });

    const createImg = document.createElement ("img") ;
    createImg.src = "../../public/delete.png" ;
    createDelete.appendChild(createImg) ;
    createImg.style = "width:20px; height:20px";
};




addElementList.addEventListener("click", () => {
    addElement () ;
    count = count + 1 ;
    counter () ;
    console.log("Click Add Element List") ;
});


deleteList.addEventListener("click", () => {
    containerMain.removeChild(contElement) ;
    count = 0 ;
    counter () ;
    console.log("Delete List") ;
});