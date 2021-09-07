import {ALLOWED_EYES_COLOR} from "./Humans/eyesColor.js";
import {EVE, ADAM} from "./Humans/names.js";
import * as helper from "./Humans/helperFunctions/helper.js";
import {Man} from "./Humans/man.js";
import {Woman} from "./Humans/woman.js";
import {makeChild} from "./Humans/newHuman.js";



export class World {
  population = [];
  deathCounter = 0;
  constructor() {
    this.population.push(new Man(ADAM, helper.getRandomChanges(ALLOWED_EYES_COLOR)));
    this.population.push(new Woman(EVE, helper.getRandomChanges(ALLOWED_EYES_COLOR)));

    this.lifeCycle();
  }

  stats() {
    console.log("lives now: ", this.population.length);
    console.log("transported to another world: ", this.deathCounter);
    return '=====================================================================';
  }

  async lifeCycle() {
    for (let year = 0; year <= 100; year++) {
      await helper.sleep(1000);

      for (let i = this.population.length - 1; i >= 0; i--) {
        const human = this.population[i];
        human.growing();

        if (human.age >= human.lifeTime) {
          this.population.splice(i, 1);
          this.deathCounter++;
        }
      }


      makeChild(this.population);
      console.log('year ' + year);
    }
  }
}

