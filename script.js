// script.js
document.addEventListener("DOMContentLoaded", () => {
  // 1. IDENTIDADE, MENU, RODAPÉ, ROTATOR
  if (typeof SiteConfig !== "undefined") {
    document.title = SiteConfig.identity.title;

    // Logo
    const logoHTML = `
      <span class="material-icons">${SiteConfig.identity.logoIcon}</span>
      ${SiteConfig.identity.logoText}
    `;
    const logoEl = document.getElementById("sidebar-logo");
    if (logoEl) logoEl.innerHTML = logoHTML;

    // Menu
    const menuList = document.getElementById("menu-list");
    if (menuList) {
      SiteConfig.menu.forEach((item) => {
        const activeClass = item.active ? "active" : "";
        menuList.innerHTML += `
          <div class="menu-item ${activeClass}" onclick="window.location.href='${item.link}'">
            <span class="material-icons">${item.icon}</span>
            <span>${item.text}</span>
          </div>
        `;
      });
    }

    // Footer (sidebar)
    const footerCopy = document.getElementById("footer-copy");
    if (footerCopy) footerCopy.innerText = SiteConfig.footer.text;

    const footerLinks = document.getElementById("footer-links");
    if (footerLinks) {
      SiteConfig.footer.links.forEach((l) => {
        footerLinks.innerHTML += `<a href="${l.link}">${l.text}</a>`;
      });
    }

    // Footer desktop
    const footerCopyDesk = document.getElementById("footer-copy-desktop");
    if (footerCopyDesk) footerCopyDesk.innerText = SiteConfig.footer.text;

    const footerLinksDesk = document.getElementById("footer-links-desktop");
    if (footerLinksDesk) {
      SiteConfig.footer.links.forEach((l) => {
        footerLinksDesk.innerHTML += `<a href="${l.link}">${l.text}</a>`;
      });
    }

    // Rotator
    const rotatorInner = document.getElementById("rotator-inner");
    if (rotatorInner) {
      SiteConfig.rotator.forEach((r, i) => {
        rotatorInner.innerHTML += `
          <div class="rotator-item ${i === 0 ? "active" : ""}">
            <span class="material-icons" style="color:#8b5cf6;font-size:2rem">${r.icon}</span>
            <div style="text-align:center">
              <h4>${r.title}</h4>
              <p>${r.text}</p>
            </div>
          </div>
        `;
      });
    }
  }

  // 2. SLIDER HERO
  if (typeof MoviesData !== "undefined") {
    const slider = document.getElementById("hero-slider");
    if (slider) {
      const highlights = MoviesData.filter((m) => m.destaque);
      highlights.forEach((m, i) => {
        const activeClass = i === 0 ? "active" : "";
        slider.innerHTML += `
          <div class="slide ${activeClass}" style="background-image:url('${m.banner || m.poster}')">
            <div class="slide-overlay"></div>
            <div class="hero-content">
              <h1 class="hero-title">${m.title}</h1>
              <p class="hero-desc">${m.sinopse}</p>
              <button class="btn-hero" onclick="window.location.href='filme.html?id=${m.id}'">
                <span class="material-icons">play_arrow</span>
                Assistir agora
              </button>
            </div>
          </div>
        `;
      });

      const slides = document.querySelectorAll(".slide");
      let currentSlide = 0;
      if (slides.length > 0) {
        setInterval(() => {
          slides[currentSlide].classList.remove("active");
          currentSlide = (currentSlide + 1) % slides.length;
          slides[currentSlide].classList.add("active");
        }, 5000);
      }
    }

    // 3. CATEGORIAS
    const catsContainer = document.getElementById("categories-container");
    if (catsContainer && typeof SiteConfig !== "undefined") {
      SiteConfig.categories.forEach((cat) => {
        let movies = [];

        if (cat.filter === "ano") {
          movies = MoviesData.filter((m) => m.ano === cat.value);
        } else if (cat.filter === "nota") {
          movies = MoviesData.filter((m) => parseFloat(m.nota) >= cat.value);
        } else if (cat.filter === "genero") {
          movies = MoviesData.filter((m) =>
            Array.isArray(m.genero)
              ? m.genero.includes(cat.value)
              : String(m.genero).includes(cat.value)
          );
        }

        if (movies.length === 0) return;

        const displayList = movies.length >= 12
          ? movies
          : [...movies, ...movies].slice(0, 12);

        let cardsHTML = "";
        displayList.forEach((m) => {
          cardsHTML += `
            <div class="movie-card" onclick="window.location.href='filme.html?id=${m.id}'">
              <div class="poster">
                <img src="${m.poster}" alt="${m.title}" loading="lazy" />
              </div>
              <div class="movie-name">${m.title}</div>
              <div class="movie-meta">
                <span>${m.ano}</span>
                <span class="movie-rating">
                  <span class="material-icons">star</span> ${m.nota}
                </span>
              </div>
            </div>
          `;
        });

        catsContainer.innerHTML += `
          <section class="cat-section" id="${cat.id}">
            <h3 class="cat-title">${cat.title}</h3>
            <div class="movie-grid">
              ${cardsHTML}
            </div>
          </section>
        `;
      });
    }
  }

  // 4. ROTATOR ANIMAÇÃO
  const rotItems = document.querySelectorAll(".rotator-item");
  let rotIndex = 0;
  if (rotItems.length > 0) {
    setInterval(() => {
      rotItems[rotIndex].classList.remove("active");
      rotIndex = (rotIndex + 1) % rotItems.length;
      rotItems[rotIndex].classList.add("active");
    }, 3000);
  }
});

// menu mobile
window.toggleMenu = function () {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("menu-overlay");
  if (!sidebar || !overlay) return;
  sidebar.classList.toggle("open");
  overlay.classList.toggle("active");
};            if(movies.length > 0) {
                // Truque para preencher visualmente a tela
                const displayList = movies.length < 3 ? [...movies, ...movies] : movies;
                let cardsHTML = "";
                
                displayList.slice(0, 12).forEach(m => {
                    // AQUI ESTÁ O PULO DO GATO: O CLIQUE CERTO
                    cardsHTML += `
                        <div class="movie-card" onclick="window.location.href='filme.html?id=${m.id}'">
                            <div class="poster"><img src="${m.poster}" loading="lazy"></div>
                            <div class="movie-title">${m.title}</div>
                        </div>`;
                });

                catsContainer.innerHTML += `
                    <div class="cat-section">
                        <h3 class="cat-title">${cat.title}</h3>
                        <div class="movie-grid">${cardsHTML}</div>
                    </div>`;
            }
        });
    }
    
    // Animação do Rotator
    const rotItems = document.querySelectorAll('.rotator-item');
    let rotIndex = 0;
    if(rotItems.length > 0) setInterval(() => {
        rotItems[rotIndex].classList.remove('active');
        rotIndex = (rotIndex + 1) % rotItems.length;
        rotItems[rotIndex].classList.add('active');
    }, 3000);

    // Menu Mobile
    window.toggleMenu = function() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.getElementById('menu-overlay');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }
});
