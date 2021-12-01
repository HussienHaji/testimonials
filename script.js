const userImageEl = document.querySelector(".user-image");
const userStarsEl = document.querySelector(".user-stars");
const userTextEl = document.querySelector(".user-text");
const userNameEl = document.querySelector(".user-name");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// a tracker for change testimonals base on
let currentTestimonial = 0;

// fack testimonials
const usersTrstimonials = [
  {
    name: "Amelia Ma",
    starts: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing  consectetur adipisicing consectetur adipisicing elit. Sunt incidunt beatae itaque deserunt blanditiis impedit illum. Ea ducimus reiciendis voluptatem.",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Minttu Karvonen",
    starts: 3,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt beatae itaque deserunt blanditiis impedit illum  blanditiis impedit illum blanditiis impedit illum blanditiis impedit illum blanditiis impedit illum. Ea ducimus reiciendis voluptatem.",
    image: "https://randomuser.me/api/portraits/women/87.jpg",
  },
  {
    name: "Victor Madsen",
    starts: 4,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.  illum. Ea ducimus reiciendis voluptatem.",
    image: "https://randomuser.me/api/portraits/men/71.jpg",
  },
  {
    name: "Adem Grabow",
    starts: 5,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt beatae itaque deserunt incidunt beatae itaque deserunt blanditiis impedit illum. Ea ducimus reiciendis voluptatem.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
  },
  {
    name: "Yosef Lindhjem",
    starts: 4,
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt incidunt beatae itaque deserunt blanditiis impedit illum. Ea ducimus reiciendis voluptatem.",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

// Generate start by number that bin given
function generateStars(num) {
  const stars = [];
  for (let i = 0; i < num; i++) {
    stars.push(`<i class="fas fa-star"></i>`);
  }
  return stars;
}

// change testimonials base on currentTestimonial value
function changeTestimonial() {
  if (currentTestimonial < 0) currentTestimonial = usersTrstimonials.length - 1;
  if (currentTestimonial > usersTrstimonials.length - 1) currentTestimonial = 0;

  userImageEl.src = usersTrstimonials[currentTestimonial].image;
  userTextEl.textContent = usersTrstimonials[currentTestimonial].text;
  userNameEl.textContent = usersTrstimonials[currentTestimonial].name;
  const stars = generateStars(usersTrstimonials[currentTestimonial].starts);
  userStarsEl.innerHTML = stars.join("");
}

//go to next testimonial
nextBtn.addEventListener("click", () => {
  currentTestimonial ++;
  console.log(currentTestimonial);
  changeTestimonial();
});

//go to previous  testimonial
prevBtn.addEventListener("click", () => {
  currentTestimonial --;
  console.log(currentTestimonial);
  changeTestimonial();
});

// on load
changeTestimonial();
