gsap.registerPlugin(ScrollTrigger);

// PROFILE SECTION
gsap.to("#profile > div", {
  transform: "scale(0.5)",
  scrollTrigger: {
    trigger: "#profile",
    start: "top center",
    scrub: true,
    markers: true
  },
})

gsap.to("#profile p", {
  transform: "scale(1.5)",
  scrollTrigger: {
    trigger: "#profile",
    start: "top center",
    scrub: true,
    markers: true
  },
})

// EXPERIENCE SECTION
let isHolding = false;
const experienceWrapper = document.querySelector("#experience");
experienceWrapper.addEventListener("mousedown", function() { isHolding = true; });
experienceWrapper.addEventListener("mouseup", function() { isHolding = false; });

let previousX = 0;
document.addEventListener('mousemove', (event) => {
  const currentX = event.clientX;

  if (isHolding) {
    const diff = currentX - previousX;
    experienceWrapper.scrollLeft -= diff;
  }

  previousX = currentX;
});

let experienceItems = document.querySelectorAll(".experience-item");
experienceItems.forEach(item => {
  item.addEventListener("click", function() {
    item.classList.toggle("active");
  });
});

// REVIEW SECTION
const reviews = gsap.utils.toArray("#review .container > div");
gsap.to(reviews, {
  xPercent: -100 * (reviews.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#review .container",
    scrub: 1,
    start: "top 80%",
    end: () => "+=" + document.querySelector("#review .container").offsetWidth
  }
});