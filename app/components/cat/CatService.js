import Cat from "../../models/Cat.js";


let _cat = new Cat("Mr. Snibbly", "Blue")
let _cat2 = new Cat("Fluffy", "red")


export default class CatService{
  petCat() {
    _cat.petCount += 1
    // console.log("pet cat from service", _cat)
  }

  get Cat(){
    return _cat
  }

  catnip(){
    _cat.petCount = 0
  }

constructor(){
  console.log("Hello from CatService")
}
}
