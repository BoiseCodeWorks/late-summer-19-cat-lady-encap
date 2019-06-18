import DogService from "./DogService.js";


let _dogService = new DogService()



export default class DogController {
  constructor(){
    console.log("hello from dog controller")
  }
}