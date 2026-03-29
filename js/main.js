// Highlight active nav link
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href").split("/").pop();
    if (href === path) link.classList.add("active");
  });
});
