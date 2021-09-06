import {Human} from "./human.js";
import {GENDER_WOMAN} from "./gender.js";

export class Woman extends Human {
  height = Math.floor(Math.random() * (50 - 30 + 1) + 30);
  weight = Math.random() * (3.500 - 2.500 + 1.000) + 2.500;

  constructor(name, eyesColor) {
    super(name, eyesColor, GENDER_WOMAN);
  }
}