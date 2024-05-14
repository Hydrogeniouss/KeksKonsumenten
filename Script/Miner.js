const blockSize = 16*5;
let arrRollBack = Array.from(document.getElementsByClassName("rollingBack"));
let CurRollBack = arrRollBack[arrRollBack.length-1];
const boundary = blockSize*2;
const checkUpLine = 3;
let emptySize = 0;
function init() {
    debug();
    document.getElementById("container").style = `margin-top: -${boundary*2}px;`
    for (let i=0; i<15;i++)genDwnBackRow();
    styleDiv();
}
function baseHandler(){
    debugger;
    //if (document.getElementById("container").getBoundingClientRect().top>=0);
    if (arrRollBack[checkUpLine].getBoundingClientRect().bottom<window.screen.height-boundary){rmUpBackRow();genDwnBackRow();addEmpty();}
    else if (arrRollBack[checkLowLine()].getBoundingClientRect().top>boundary){rmDwnBackRow();genUpBackRow();rmEmpty();}
    else genDwnBackRow();
    // console.log(window.screen.height-boundary);
    // console.log(arrRollBack[checkLowLine()].getBoundingClientRect().bottom);
    // console.log(arrRollBack[checkUpLine].getBoundingClientRect().top);
    debugStyleDynamic();
}
function styleDiv(){
        //arrCurRollBack.style.height = `${blockSize}px`;

        const rules = document.styleSheets[0].cssRules;
        rules[0].style = `height: ${blockSize}px`;
        rules[0].style = `background-size: ${blockSize}px;height: ${blockSize}px`;
        debugStyleDynamic();
}

function genDwnBackRow(){
    var newDiv = document.createElement("div");
    const parent = document.getElementById("container");
    //insert new div
    newDiv.setAttribute("class","rollingBack")
    parent.appendChild(newDiv);

    //Updates the ElementList
    // function?
    arrRollBack = Array.from(document.getElementsByClassName("rollingBack"));
    CurRollBack = arrRollBack[arrRollBack.length-1];

    genIMGBackRow();
}
function genUpBackRow(){
    var newDiv = document.createElement("div");
    const parent = document.getElementById("container");
    //insert new div
    newDiv.setAttribute("class","rollingBack")
    parent.insertBefore(newDiv,arrRollBack[0]);

    //Updates the ElementList
    arrRollBack = Array.from(document.getElementsByClassName("rollingBack"));
    CurRollBack = arrRollBack[arrRollBack.length-1];
    // link zu genimgback fehlt
    arrRollBack[0].style.backgroundImage = 'url("../Assets/deepslate.png")'
}
function genIMGBackRow(){
        // IMG background
        // work in progress
        CurRollBack.style.backgroundImage = 'url("../Assets/cobblestone.png")';
}
function rmDwnBackRow(){
    CurRollBack.remove();
    CurRollBack = arrRollBack[arrRollBack.length-1];
}
function rmUpBackRow(){
    arrRollBack[0].remove();
}
//not final function name
function addEmpty(){
    emptySize += blockSize;
    document.getElementById("emptiness").style.height = `${emptySize}px`;
}
function rmEmpty(){
    emptySize -= blockSize;
    document.getElementById("emptiness").style.height = `${emptySize}px`;
}
function checkLowLine(){
    return arrRollBack.length-1-checkUpLine;
}
let arrRollDebug = Array.from(document.getElementsByClassName("debugElem"));
function debug(){
    for (let i = 0;i<4;i++)debugDraw();
    //Updates the ElementList
    arrRollDebug = Array.from(document.getElementsByClassName("debugElem"));
    debugStyleStatic();
}
function debugDraw(){
    var newDiv = document.createElement("div");
    const parent = document.getElementById("debugItems");
    //insert new div
    newDiv.setAttribute("class","debugElem");
    parent.insertBefore(newDiv,document.getElementById("container"));
}
function debugStyleStatic(){
    // first and third elems are the visual boundaries
    // others are the current elements, which get checked
    arrRollDebug[0].style = `height: ${boundary}px; top:0px; background-color: rgba(255, 0, 0, 0.5); position: -webkit-sticky; position: sticky;`;//smart or stupid?
    arrRollDebug[1].style = `height: ${boundary}px; background-color: rgba(255, 0, 0, 0.5); position: -webkit-sticky; position: sticky; top: ${screen.height}px;`; // tried to solve it with a for loop but it wouldnt work, so there you go
}
function debugStyleDynamic(){
    arrRollDebug[2].style = `bottom: ${-arrRollBack[checkUpLine].getBoundingClientRect().bottom}px; background-color: rgba(0,0,255,0.5); position: fixed; height: 10px;`;
    arrRollDebug[3].style = `bottom: ${arrRollBack[checkLowLine()].getBoundingClientRect().bottom}px; background-color: rgba(0,0,255,0.5); position: fixed; height: 10px;`;
    console.log(arrRollBack[checkUpLine].getBoundingClientRect().bottom);
    console.log(arrRollBack[checkLowLine()].getBoundingClientRect().bottom);
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