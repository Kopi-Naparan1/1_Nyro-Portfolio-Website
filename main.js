let accordions = document.querySelectorAll(".accordion-wrapper .accordion");
const nyroEmail = document.querySelector(".nyro-email");
const emailForm = document.querySelector(".email-form-container");
const closeForm = document.querySelector(".email-form-container .close-form");

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

if (window.visualViewport) {
  const formContainer = document.querySelector(".email-form-container");

  window.visualViewport.addEventListener("resize", () => {
    // Distance from bottom of container to viewport bottom
    const containerRect = formContainer.getBoundingClientRect();
    const offset = window.visualViewport.height - containerRect.bottom;

    if (offset < 0) {
      // Move the whole container up
      formContainer.style.transform = `translateY(${offset}px)`;
    } else {
      // Reset when keyboard is hidden
      formContainer.style.transform = "";
    }
  });

  formContainer.querySelectorAll("input, textarea").forEach((el) => {
    el.addEventListener("focus", () => {
      setTimeout(() => {
        formContainer.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 200);
    });
  });
}

nyroEmail.addEventListener("click", () => {
  emailForm.classList.toggle("active");
});

closeForm.addEventListener("click", () => {
  emailForm.classList.toggle("active");
});
