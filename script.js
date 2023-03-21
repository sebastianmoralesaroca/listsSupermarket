console.log("hola");

const addElementList = document.querySelector("#addElementList") ;
const contElement = document.querySelector("#contElement") ;

addElementList.addEventListener("click", () => {
    console.log("hola");
    const create = document.createElement("p");
    create.innerHTML = "Create";
    document.getElementById("contElement").appendChild(create);
});