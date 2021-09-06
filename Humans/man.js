import {Human} from "./human.js";
import {GENDER_MAN} from "./gender.js";

export class Man extends Human {
  height = Math.floor(Math.random() * (60 - 40 + 1) + 40);
  weight = Math.random() * (4.500 - 3.000 + 1.000) + 2.500;

  constructor(name, eyesColor) {
    super(name, eyesColor, GENDER_MAN);
  }

}