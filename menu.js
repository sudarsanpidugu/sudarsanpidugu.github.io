function initMenuToggle() {
  const sidemenu = document.getElementById("sidemenu");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");

  if (openBtn && closeBtn && sidemenu) {

    openBtn.addEventListener("click", () => {
      sidemenu.classList.add("active");
      document.body.style.overflow = "hidden";
    });

    closeBtn.addEventListener("click", () => {
      sidemenu.classList.remove("active");
      document.body.style.overflow = "auto";
    });

    // Close when clicking links
    sidemenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        sidemenu.classList.remove("active");
        document.body.style.overflow = "auto";
      });
    });
  }
}