document.addEventListener("mousemove", e => {
  const orb = document.querySelector(".energy-orb");
  orb.style.transform =
    `translate(${e.clientX/70}px, ${e.clientY/60}px)`;
});

const counters = document.querySelectorAll(".metric h3");

const runCounter = counter => {
  const target = +counter.getAttribute("data-count");
  let count = 0;

  const update = () => {
    if (count < target) {
      count += Math.ceil(target / 60);
      counter.innerText = count;
      requestAnimationFrame(update);
    } else {
      counter.innerText = target;
    }
  };

  update();
};

const metricObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      runCounter(entry.target);
      metricObserver.unobserve(entry.target);
    }
  });
}, { threshold: 1.0 });

counters.forEach(c => metricObserver.observe(c));
