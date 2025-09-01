let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
const nyroEmail = document.querySelector(".nyro-email");
const emailForm = document.querySelector(".email-form-container");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    // If already active, remove active and return
    if (accordion.classList.contains("active")) {
      accordion.classList.remove("active");
    } else {
      // Remove active from all
      accordions.forEach((acc) => acc.classList.remove("active"));
      // Add active to clicked
      accordion.classList.add("active");
    }
  });
});

nyroEmail.addEventListener("click", () => {
  emailForm.classList.toggle("active");
});

if (window.visualViewport) {
  const form = document.querySelector("form");

  window.visualViewport.addEventListener("resize", () => {
    const offset =
      window.visualViewport.height - form.getBoundingClientRect().bottom;
    if (offset < 0) {
      form.style.transform = `translateY(${offset}px)`;
    } else {
      form.style.transform = "";
    }
  });
}
