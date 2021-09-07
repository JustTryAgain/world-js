
export function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export function getRandomChanges(arr) {
  const res = Math.floor(Math.random() * arr.length);
  return arr[res];
}


