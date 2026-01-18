document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CARREGAR MENU LATERAL
    const menuContainer = document.getElementById('menu-list');
    if(SiteConfig.menu) {
        SiteConfig.menu.forEach(item => {
            const activeClass = item.active ? 'active' : '';
            menuContainer.innerHTML += `
                <div class="menu-item ${activeClass}">
                    <span class="material-icons">${item.icon}</span> ${item.text}
                </div>
            `;
        });
    }

    // 2. CARREGAR SLIDER HERO
    const sliderContainer = document.getElementById('hero-slider');
    const destaques = MoviesData.filter(m => m.destaque);
    
    if(sliderContainer && destaques.length > 0) {
        destaques.forEach((filme, index) => {
            const activeClass = index === 0 ? 'active' : '';
            sliderContainer.innerHTML += `
                <div class="slide ${activeClass}" style="background-image: url('${filme.banner}');">
                    <div class="slide-overlay"></div>
                    <div class="hero-content">
                        <h1 class="hero-title">${filme.title}</h1>
                        <p class="hero-desc">${filme.sinopse}</p>
                        <button class="btn-hero">
                            <span class="material-icons">play_arrow</span> Assistir
                        </button>
                    </div>
                </div>
            `;
        });

        // Rotação Automática
        let currentSlide = 0;
        const slides = document.querySelectorAll('.slide');
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);
    }

    // 3. CARREGAR FILMES E CATEGORIAS
    const catsContainer = document.getElementById('categories-container');
    if(SiteConfig.categories) {
        SiteConfig.categories.forEach(cat => {
            let filmes = [];
            if(cat.filter === "ano") filmes = MoviesData.filter(f => f.ano === cat.value);
            else if (cat.filter === "nota") filmes = MoviesData.filter(f => parseFloat(f.nota) >= cat.value);
            else if (cat.filter === "genero") filmes = MoviesData.filter(f => f.genero.includes(cat.value));

            if (filmes.length > 0) {
                // Duplica para preencher se tiver poucos
                const listaFinal = filmes.length < 3 ? [...filmes, ...filmes, ...filmes] : filmes;
                let cardsHTML = "";
                
                listaFinal.slice(0, 9).forEach(f => {
                    cardsHTML += `
                        <div class="movie-card" onclick="alert('Ir para: ${f.title}')">
                            <div class="poster">
                                <img src="${f.poster}" loading="lazy" alt="${f.title}">
                            </div>
                            <h4 class="movie-name">${f.title}</h4>
                        </div>
                    `;
                });

                catsContainer.innerHTML += `
                    <div class="cat-section">
                        <h3 class="cat-title">${cat.title}</h3>
                        <div class="movie-grid">${cardsHTML}</div>
                    </div>
                `;
            }
        });
    }

    // 4. ROTATOR INFO
    const rotatorContainer = document.getElementById('rotator-inner');
    if(SiteConfig.rotator) {
        SiteConfig.rotator.forEach((item, index) => {
            const activeClass = index === 0 ? 'active' : '';
            rotatorContainer.innerHTML += `
                <div class="rotator-item ${activeClass}">
                    <span class="material-icons" style="font-size:2rem; color:#8b5cf6;">${item.icon}</span>
                    <h4>${item.title}</h4>
                    <p style="color:#888; font-size:0.8rem; margin:0;">${item.text}</p>
                </div>
            `;
        });

        const items = document.querySelectorAll('.rotator-item');
        let idx = 0;
        setInterval(() => {
            items[idx].classList.remove('active');
            idx = (idx + 1) % items.length;
            items[idx].classList.add('active');
        }, 3000);
    }

    // 5. RODAPÉ
    document.getElementById('footer-copy').innerText = SiteConfig.footer.copyright;
    const footerLinks = document.getElementById('footer-links');
    SiteConfig.footer.links.forEach(l => {
        footerLinks.innerHTML += `<a href="${l.link}">${l.text}</a>`;
    });

    // 6. MENU MOBILE
    const menuBtn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    if(menuBtn) {
        menuBtn.addEventListener('click', () => {
            sidebar.classList.add('open');
            overlay.style.display = 'block';
        });
    }
    if(overlay) {
        overlay.addEventListener('click', () => {
            sidebar.classList.remove('open');
            overlay.style.display = 'none';
        });
    }
});
              
