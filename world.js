import {ALLOWED_EYES_COLOR} from "./Humans/eyesColor.js";
import {EVE,ADAM} from "./Humans/names.js";
import * as helper from "./Humans/helperFunctions/helper.js";
import {Man} from "./Humans/man.js";
import {Woman} from "./Humans/woman.js";
import {makeChild} from "./Humans/newHuman.js";


export class World {
  population = [];

  constructor() {
    this.population.push(new Man(ADAM, helper.getRandomChanges(ALLOWED_EYES_COLOR)));
    this.population.push(new Woman(EVE, helper.getRandomChanges(ALLOWED_EYES_COLOR)));
  }


  async lifeCycle() {
    for (let year = 0; year <= 18; year++) {
      await helper.sleep(1000);
      helper.setPopulationId(this.population);
      /*for(let i = 0;i<this.population.length;i++){
        this.population[i].growing();
      }*/
      console.log(makeChild(this.population));
      /*console.log(this.population);
      console.log('year ' + year);*/
    }
  }

}

