import {World} from "./world.js";

const a = new World();

setInterval(() => {
  console.log(a.stats());
},10000);
