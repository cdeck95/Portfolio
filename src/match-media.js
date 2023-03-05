const mq = window.matchMedia('(prefers-color-scheme: dark)');
console.log(`${mq.matches ? 'dark' : 'light'} mode`);

mq.addEventListener('change', function (evt) {
  console.log(`${evt.matches ? 'dark' : 'light'} mode`);
});