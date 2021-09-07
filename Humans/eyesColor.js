import {getRandomChanges} from "./helperFunctions/helper.js";

export const BROWN_EYES = 'brown';
export const BLUE_EYES = 'blue';
export const GREEN_EYES = 'green';
export const PURPLE_EYES = 'purple';
export const ALLOWED_EYES_COLOR = [GREEN_EYES, BLUE_EYES, BROWN_EYES, PURPLE_EYES];

export function childEyes(eyesArr, fatherEyes, motherEyes) {
  if (Math.random() < 0.4) {
    return fatherEyes;
  }

  if (Math.random() < 0.4) {
    return motherEyes;
  }
        return eyesArr[Math.floor(Math.random() * eyesArr.length)];
}