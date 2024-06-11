import { Gender, Species } from "./rick-and-morty-api";

export class ResultRickAndMorty{
    name?:     string;
    species?:  Species;
    gender?:   Gender;
    image?:    string;
    constructor(results:any){
      this.name = results.name;
      this.species = results.species;
      this.gender = results.gender;
      this.image = results.image;
    }

}
