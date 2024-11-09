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

// COVER SECTION
const coverEl = document.querySelector('#cover');
const coverTitle = document.querySelector("#cover .title");
const coverSubtitle = document.querySelector("#cover .subtitle");
const coverCaption = document.querySelector("#cover .caption");
const coverLine = document.querySelector("#cover .line");

coverTitle.classList.add("animate__animated", "animate__fadeInDown", "animate__delay-1s");
coverSubtitle.classList.add("animate__animated", "animate__fadeInUp", "animate__delay-2s")
coverSubtitle.addEventListener('animationend', function(event) {
  event.stopPropagation();
  coverLine.classList.add("active");
}, {once: true});

coverCaption.classList.add("animate__animated", "animate__fadeIn", "animate__delay-3s");
coverCaption.addEventListener('animationend', function(event) {
  event.stopPropagation();
  coverCaption.classList.remove("animate__fadeIn", "animate__delay-3s");
  coverCaption.classList.add("animate__flash", "animate__slower", "animate__infinite");
}, {once: true});

coverEl.addEventListener('animationend', function(event) {
  console.log(event.animationName);
  // if (event.animationName === "fadeOut") {
  //   coverEl.style.display = "none";
  // }
}, { once: true });