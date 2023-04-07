// * SetInterval

console.log('Script start');

const id = setInterval(() => {
  //   for (let i = 0; i < 1000000; i++) {
  //     console.log('Inside for loop');
  //   }
  //   console.log(Math.random());
}, 500); // this time is not guranteed. It is just minimum delay

console.log('setInterval id: ', id);
// clearInterval(id);

console.log('Script end');

const body = document.body;

const setIntervalId = setInterval(() => {
  const red = Math.floor(Math.random() * 126);
  const green = Math.floor(Math.random() * 126);
  const blue = Math.floor(Math.random() * 126);
  const rgb = `rgb(${red},${green}, ${blue})`;
  body.style.backgroundColor = rgb;
  // console.log(rgb);
}, 1000);

const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  clearInterval(setIntervalId);
  btn.textContent = body.style.backgroundColor;
});
console.log(btn);
