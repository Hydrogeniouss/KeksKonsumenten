const blockSize = 16*5;
let arrRollBack = Array.from(document.getElementsByClassName("rollingBack"));
let arrCurRollBack = arrRollBack[arrRollBack.length-1];
function init() {
    genBackStartRow();
    genBackRow();
    genBackRow();
    styleDiv();
}
function baseHandler(){
    if (screenY-100<=arrRollBack[arrRollBack.length-2].screenY){
      //  return;
    }
    genBackRow()
}
function styleDiv(){
        //arrCurRollBack.style.height = `${blockSize}px`;

        const rules = document.styleSheets[0].cssRules;
        rules[0].style = `height: ${blockSize}px`;
        rules[0].style = `background-size: ${blockSize}px;height: ${blockSize}px`;
}

function genBackStartRow(){
    var newDiv = document.createElement("div");
    const parent = document.getElementById("container");

    newDiv.setAttribute("class","rollingStartBack")
    parent.appendChild(newDiv)
}
function genBackRow(){
    var newDiv = document.createElement("div");
    const parent = document.getElementById("container");
    //insert new div
    newDiv.setAttribute("class","rollingBack")
    parent.appendChild(newDiv);

    //Updates the ElementList
    arrRollBack = Array.from(document.getElementsByClassName("rollingBack"));
    arrCurRollBack = arrRollBack[arrRollBack.length-1];

    genIMGBackRow();
}
function genIMGBackRow(){
        // IMG background
        // work in progress
        arrCurRollBack.style.backgroundImage = 'url("../../../../Downloads/Projekt/Media/cobblestone1.png")';
}
document.addEventListener("DOMContentLoaded",init);
document.addEventListener("scroll",baseHandler)
// document.addEventListenerU("scroll",usualHandler);

// https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore

/*
Generator

die Texturen sollen von der Mitte aus generiert werden, dann auf der linken Seite, dann auf der rechten.

Propabillity

wenn falsch, dann fällt tex auf default

prop, dass tex mutiert bei default ...%
prop, auf var bei default ...%
wenn einer der oberen/unteren drei tex ... ist, dann erhöht dies die chance, dass dieser gleiche tex wird um ...%
wenn der waagrecht anliegende tex, dann erhöht dies die chance, dass dieser gleiche tex wird um ...%

wenn einer der oberen/unteren drei tex ... ist, dann erhöht dies die chance, dass dieser gleiche tex wird um ...%
wenn der waagrecht anliegende tex, dann erhöht dies die chance, dass dieser gleiche tex wird um ...%

*/