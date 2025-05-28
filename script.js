
function toggleDarkMode() {
      document.documentElement.classList.toggle('dark');
    }

const courseData = [
  {
    title: "Introduction to Programming",
    description: "Learn the basics of Python programming.",
    image: "image.png",
  },
  {
    title: "Web Development",
    description: "Build modern websites using HTML, CSS, and JavaScript.",
    image: "web-dev.png",
  },
  {
    title: "Data Structures",
    description: "Understand the core concepts of data structures.",
    image: "ds.png",
  },
  {
    title: "Machine Learning",
    description: "A practical guide to ML with real-world projects.",
    image: "machine-learning.png",
  },
  {
    title: "Artificial Intelligence",
    description: "Learn core AI concepts like machine learning and neural networks to build intelligent systems.",
    image:"ai.png",
  },
  {
    title: "Security",
    description: "Understand cybersecurity principles and learn to protect systems from digital threats.",
    image:"security.png",
  }
];

const coursesContainer = document.getElementById("courses");
const searchInput = document.getElementById("searchInput");
const noCoursesMessage = document.getElementById("noCourses");

function createCourseCard(course) {
  return `
    <div class="bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden transition hover:shadow-lg bg-auto">
      <img src="${course.image}" alt="${course.title}" class="w-35 h-48 items-center object-cover">
      <div class="p-4">
        <h2 class="text-lg font-semibold mb-2 dark:text-white">${course.title}</h2>
        <p class="text-gray-700 dark:text-gray-300 text-sm">${course.description}</p>
      </div>
    </div>
  `;
}

function renderCourses(filteredCourses) {
  coursesContainer.innerHTML = "";

  if (filteredCourses.length === 0) {
    noCoursesMessage.classList.remove("hidden");
  } else {
    noCoursesMessage.classList.add("hidden");
    filteredCourses.forEach(course => {
      coursesContainer.innerHTML += createCourseCard(course);
    });
  }
}

function filterCourses() {
  const query = searchInput.value.toLowerCase();
  const filtered = courseData.filter(course =>
    course.title.toLowerCase().includes(query) ||
    course.description.toLowerCase().includes(query)
  );
  renderCourses(filtered);
}

searchInput.addEventListener("input", filterCourses);

renderCourses(courseData);
