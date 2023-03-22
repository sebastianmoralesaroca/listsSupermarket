const addElementList = document.getElementById("addElementList") ;
const inputList = document.getElementById("inputList") ;
const numberList = document.getElementById("numberList") ;
const contElement = document.getElementById("contElement") ;

function addElement () {
    const createDiv = document.createElement("div") ;
    contElement.appendChild(createDiv) ;
    createDiv.style = "display:block; background-color:white; border:2px solid blue; border-radius:15px; margin:10px 8% 0px 0px; height:70px; padding-top:10px;" ;

    const createAmaunt = document.createElement("h3") ;
    const valueEmaunt = numberList.value ;
    createAmaunt.innerHTML = valueEmaunt ;
    createDiv.appendChild(createAmaunt) ;
    createAmaunt.style = "display:inline; font-family:sans-serif; font-size:50px; font-weight:bold; color: blue; background-color: whitesmoke; margin-left:50px; padding:0px 20px 0px 20px;" ;

    const createElement = document.createElement ("h3") ;
    const valueElement = inputList.value ;
    createElement.innerHTML = valueElement ;
    createDiv.appendChild(createElement) ;
    createElement.style = "display:inline; font-family:sans-serif; font-size:30px; font-weight:bold; color:black; margin-left:20px;" ;

    const createCheck = document.createElement ("input") ;
    createCheck.type = "checkbox" ;
    createDiv.appendChild(createCheck) ;
    createCheck.style = "display:inline; width:20px; height:20px; color:red; margin-left:700px;" ;
    createCheck.addEventListener("click", () => {
        if (createCheck.checked) {
            createDiv.style = "display:block; background-color:#d1d1d1; border:0px solid blue; border-radius:15px; margin:10px 8% 0px 0px; height:70px; padding-top:10px;" ;
            createAmaunt.style = "display:inline; font-family:sans-serif; font-size:50px; font-weight:bold; color: blue; background-color:#dbd9d9; margin-left:50px; padding:0px 20px 0px 20px;" ;
            console.log("Element Folse")
        } else {
            createDiv.style = "display:block; background-color:white; border:2px solid blue; border-radius:15px; margin:10px 8% 0px 0px; height:70px; padding-top:10px;" ;
            createAmaunt.style = "display:inline; font-family:sans-serif; font-size:50px; font-weight:bold; color: blue; background-color:whitesmoke; margin-left:50px; padding:0px 20px 0px 20px;" ;
            console.log("Element True") ;
        }
   });

    const createDelete = document.createElement ("button") ;
    createDelete.type = "reset" ;
    createDiv.appendChild(createDelete) ;
    createDelete.style = "margin-left:20px; background:transparent; border:none;" ;
    createDelete.addEventListener("click", () => {
        contElement.removeChild(createDiv) ;
    });

    const createImg = document.createElement ("img") ;
    createImg.src = "../public/delete.png" ;
    createDelete.appendChild(createImg) ;
    createImg.style = "width:20px; height:20px" ;
};



addElementList.addEventListener("click", () => {
    console.log("Click Add Element List");
    addElement () ;
});
