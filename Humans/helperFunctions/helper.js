export function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export function getRandomChanges(arr){
  const res = Math.floor(Math.random()*arr.length);
  return arr[res];
}

export function setPopulationId(arr) {
  arr.map((x, i) => {
  x.id = i + 1;
  return x;
});}
