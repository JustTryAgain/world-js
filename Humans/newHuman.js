import {Man} from "./man.js";
import {Woman} from "./woman.js";
import {getRandomChanges} from "./helperFunctions/helper.js";
import {ALLOWED_EYES_COLOR, childEyes} from "./eyesColor.js";
import {LIST_OF_MAN_NAMES, LIST_OF_WOMAN_NAMES} from "./names.js";
import {GENDER_MAN, GENDER_WOMAN} from "./gender.js";
import {reproductionAge} from "./helperFunctions/consts.js";

export function makeChild(populate) {
  let manArr;
  let womanArr;
  let childrenEyes;
  let child;
  let randomGender = Math.floor(Math.random() * 2);

  for (let i = 0; i < populate.length; i++) {
    manArr = populate.filter(arr => arr.gender === 'm');
    womanArr = populate.filter(arr => arr.gender === 'w');
  }

  for (let i = 0; i < (Math.min(manArr.length, womanArr.length)); i++) {
    if (manArr[i].age < reproductionAge
      || womanArr[i].age < reproductionAge
      || ((manArr[i].age - reproductionAge) % 4 !== 0)
      || ((womanArr[i].age - reproductionAge) % 4 !== 0)
    ) {
      continue;
    }

    if (manArr[i] === womanArr[i]) {
      continue;
    }

    if (manArr[i].gender === womanArr[i].gender) {
      continue;
    }

    childrenEyes = childEyes(ALLOWED_EYES_COLOR, manArr[i].eyesColor, womanArr[i].eyesColor);
    child = randomGender
      ? new Woman(getRandomChanges(LIST_OF_WOMAN_NAMES), childrenEyes, GENDER_WOMAN)
      : new Man(getRandomChanges(LIST_OF_MAN_NAMES), childrenEyes, GENDER_MAN);

    populate.push(child);
  }

  return populate;
}

