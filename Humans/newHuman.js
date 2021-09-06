import {Man} from "./man.js";
import {Woman} from "./woman.js";
import {getRandomChanges} from "./helperFunctions/helper.js";
import {ALLOWED_EYES_COLOR} from "./eyesColor.js";
import {LIST_OF_MAN_NAMES, LIST_OF_WOMAN_NAMES} from "./names.js";
import {GENDER_MAN, GENDER_WOMAN} from "./gender.js";

export function makeChild(parents) {
  const randomGender = Math.floor(Math.random() * 2);

  for(let i = 0;i<parents.length;i++) {
    let genderCheckMan = parents.filter(arr => arr.gender==='m');
    let genderCheckWoman = parents.filter(arr => arr.gender==='w');
    if(parents[i].gender==='m')


    if(this.age >= 18){

    }
  };

 /* let obj = parents.filter(o => o.eyesColor);*/

  let child = randomGender === 1
    ? new Man(getRandomChanges(LIST_OF_MAN_NAMES), getRandomChanges(ALLOWED_EYES_COLOR), GENDER_MAN, parents)
    : new Woman(getRandomChanges(LIST_OF_WOMAN_NAMES), getRandomChanges(ALLOWED_EYES_COLOR), GENDER_WOMAN, parents);
  return parents;

}