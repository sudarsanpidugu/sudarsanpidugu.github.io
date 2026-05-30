async function loadComponent(id, file) {

  try {

    const response = await fetch(file);

    if (!response.ok) {

      console.error(`Cannot load ${file}`);

      return;

    }

    const data = await response.text();

    document.getElementById(id).innerHTML = data;

  }

  catch (error) {

    console.error(error);

  }

}

/* LOAD WEBSITE */

async function loadWebsite() {

  /* LOAD COMPONENTS */

  await loadComponent(
    'header',
    'assets/components/header.html'
  );

  await loadComponent(
    'hero-component',
    'assets/components/hero.html'
  );

  await loadComponent(
    'about-component',
    'assets/components/about.html'
  );

  await loadComponent(
    'skills-component',
    'assets/components/skills.html'
  );

  await loadComponent(
    'services-component',
    'assets/components/services.html'
  );

  await loadComponent(
    'projects-component',
    'assets/components/projects.html'
  );

  await loadComponent(
    'contact-component',
    'assets/components/contact.html'
  );

  await loadComponent(
    'footer',
    'assets/components/footer.html'
  );

  /* INIT NAVBAR */

  if (typeof initNavbar === "function") {

    initNavbar();

  }

  /* HASH SCROLL FIX */

  scrollToHash();

}

/* HASH SCROLL */

function scrollToHash() {

  const hash = window.location.hash;

  if (!hash) return;

  setTimeout(() => {

    const section =
      document.querySelector(hash);

    if (section) {

      const navbar =
        document.querySelector(".navbar");

      const navHeight =
        navbar ? navbar.offsetHeight : 80;

      const sectionTop =
        section.offsetTop - navHeight;

      window.scrollTo({

        top: sectionTop,

        behavior: "smooth"

      });

    }

  }, 1000);

}

/* START */

window.addEventListener(
  "load",
  loadWebsite
);

