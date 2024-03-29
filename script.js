const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    // console.log(typeof target, target);
    const count = +counter.innerText;

    const increment = target / 200;
    // console.log(increment);

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
