function initNavbar() {

  const sidemenu =
    document.getElementById(
      "sidemenu"
    );

  const openBtn =
    document.getElementById(
      "openMenu"
    );

  const closeBtn =
    document.getElementById(
      "closeMenu"
    );

  if (
    openBtn &&
    closeBtn &&
    sidemenu
  ) {

    /* OPEN MENU */

    openBtn.addEventListener(
      "click",
      () => {

        sidemenu.classList.add(
          "active"
        );

        document.body.style.overflow =
          "hidden";

      }
    );

    /* CLOSE MENU */

    closeBtn.addEventListener(
      "click",
      () => {

        sidemenu.classList.remove(
          "active"
        );

        document.body.style.overflow =
          "auto";

      }
    );

    /* CLOSE ON LINK CLICK */

    sidemenu
      .querySelectorAll("a")
      .forEach(link => {

        link.addEventListener(
          "click",
          () => {

            sidemenu.classList.remove(
              "active"
            );

            document.body.style.overflow =
              "auto";

          }
        );

      });

  }

}
