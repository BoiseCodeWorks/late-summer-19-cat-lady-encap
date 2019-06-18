import CatController from "./components/cat/CatController.js";
import DogController from "./components/dog/DogController.js";

class App{
  constructor(){
    this.controllers = {
      catController: new CatController(),
      dogController: new DogController()
    }
  }
}

window["app"] = new App()