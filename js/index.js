let dataGlasses = [
    { id: "G1", src: "./img/g1.jpg", virtualImg: "./img/v1.png", brand: "Armani Exchange", name: "Bamboo wood", color: "Brown", price: 150, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis? " },
    { id: "G2", src: "./img/g2.jpg", virtualImg: "./img/v2.png", brand: "Arnette", name: "American flag", color: "American flag", price: 150, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G3", src: "./img/g3.jpg", virtualImg: "./img/v3.png", brand: "Burberry", name: "Belt of Hippolyte", color: "Blue", price: 100, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G4", src: "./img/g4.jpg", virtualImg: "./img/v4.png", brand: "Coarch", name: "Cretan Bull", color: "Red", price: 100, description: "In assumenda earum eaque doloremque, tempore distinctio." },
    { id: "G5", src: "./img/g5.jpg", virtualImg: "./img/v5.png", brand: "D&G", name: "JOYRIDE", color: "Gold", price: 180, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?" },
    { id: "G6", src: "./img/g6.jpg", virtualImg: "./img/v6.png", brand: "Polo", name: "NATTY ICE", color: "Blue, White", price: 120, description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit." },
    { id: "G7", src: "./img/g7.jpg", virtualImg: "./img/v7.png", brand: "Ralph", name: "TORTOISE", color: "Black, Yellow", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam." },
    { id: "G8", src: "./img/g8.jpg", virtualImg: "./img/v8.png", brand: "Polo", name: "NATTY ICE", color: "Red, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim." },
    { id: "G9", src: "./img/g9.jpg", virtualImg: "./img/v9.png", brand: "Coarch", name: "MIDNIGHT VIXEN REMIX", color: "Blue, Black", price: 120, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet." }
];

import * as helper from './validation.js'
import { ListGlasses } from './glassesList.js'
import { Glasses } from './glasses.js'

let glist = new ListGlasses();


const ShowGlasses = () => {
    var renderSVG = helper.getElm("vglassesList");
    renderSVG.innerHTML = "";
    for (const val of dataGlasses) {
        let gl = new Glasses(val.id, val.src, val.virtualImg, val.brand, val.name, val.color, val.price, val.description);
        glist.addGlasses(gl)
    }
    renderSVG.innerHTML = glist.renderGlasses();
}

const UpdateUI = () => {
    var renderSVG = helper.getElm("vglassesList");
    renderSVG.innerHTML = "";
    renderSVG.innerHTML = glist.renderGlasses();

}

ShowGlasses();

const tryOnGlasses = (event) => {
    // console.log(event.target)
    var data_ID = event.target.getAttribute('data-id');
    // console.log(glist.find_Obj(data_ID).content)
    // console.log(glist.find_Obj(data_ID).stt)
    var elmO = glist.find_Obj(data_ID);
    console.log(elmO)
    UpdateUI();
    showIn4(elmO)

}
window.tryOnGlasses = tryOnGlasses;


const showIn4 = (obj) =>{
   var avt = helper.getElmByClass("vglasses__model",0);
   console.log(obj.content.id)
   avt.innerHTML = `
        <img src="${obj.content.virtualImg}" alt="h">
   `;
}