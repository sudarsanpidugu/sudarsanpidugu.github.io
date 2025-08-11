function initMenuToggle() {
  const sidemenu = document.getElementById("sidemenu");
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");

  if (openBtn && closeBtn && sidemenu) {
    openBtn.addEventListener("click", () => {
      sidemenu.classList.add("active");
    });

    closeBtn.addEventListener("click", () => {
      sidemenu.classList.remove("active");
    });
  }
}
