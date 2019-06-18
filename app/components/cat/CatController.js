import CatService from "./CatService.js";

let _catService = new CatService()

function drawCat(){
  let catElem = document.querySelector("#cat")
  let cat = _catService.Cat
  let template = `
    <h1 class="red">${cat.name}</h1>
    <h2>color: ${cat.color}</h2>
    <h3>pet count: ${cat.petCount}</h3>
  `
  catElem.innerHTML = template
  // console.log("draw the cat")
}


export default class CatController{
  constructor(){
    drawCat()
    console.log("Hello from CatController")
  }

  petCat(){
    // console.log("pet cat from controller")
    _catService.petCat()
    drawCat()
  }

  catnip(){

    _catService.catnip()
    drawCat()
  }

}