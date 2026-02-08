const links = document.querySelectorAll("[data-section]");
const sections = document.querySelectorAll(".page-section");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.dataset.section;

    // Active menu
    document.querySelectorAll(".nav-links a").forEach(a =>
      a.classList.toggle("active", a.dataset.section === target)
    );

    // Show section
    sections.forEach(sec =>
      sec.classList.toggle("active-section", sec.id === target)
    );
  });
});
