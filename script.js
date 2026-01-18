document.addEventListener("DOMContentLoaded", () => {
    
    // 1. CARREGAR IDENTIDADE E MENU
    if(typeof SiteConfig !== 'undefined') {
        document.title = SiteConfig.identity.title;
        // Logo
        const logoHTML = `<span class="material-icons">${SiteConfig.identity.logoIcon}</span> ${SiteConfig.identity.logoText}`;
        document.getElementById('sidebar-logo').innerHTML = logoHTML;
        
        // Menu
        const menuList = document.getElementById('menu-list');
        SiteConfig.menu.forEach(item => {
            menuList.innerHTML += `
                <div class="menu-item ${item.active?'active':''}">
                    <span class="material-icons">${item.icon}</span> ${item.text}
                </div>
            `;
        });
        
        // Footer e Rotator
        document.getElementById('footer-copy').innerText = SiteConfig.footer.text;
        const footerLinks = document.getElementById('footer-links');
        SiteConfig.footer.links.forEach(l => footerLinks.innerHTML += `<a href="${l.link}">${l.text}</a>`);

        const rotatorInner = document.getElementById('rotator-inner');
        SiteConfig.rotator.forEach((r, i) => {
            rotatorInner.innerHTML += `
                <div class="rotator-item ${i===0?'active':''}">
                    <span class="material-icons" style="color:#8b5cf6; font-size:2rem;">${r.icon}</span>
                    <div style="text-align:center;">
                        <h4 style="color:white; margin:0; font-size:1rem;">${r.title}</h4>
                        <p style="color:#888; margin:0; font-size:0.8rem;">${r.text}</p>
                    </div>
                </div>`;
        });
    }

    // 2. SLIDER HERO
    if(typeof MoviesData !== 'undefined') {
        const slider = document.getElementById('hero-slider');
        const highlights = MoviesData.filter(m => m.destaque);
        
        highlights.forEach((m, i) => {
            const activeClass = i === 0 ? 'active' : '';
            // Botão do banner leva para o filme também
            slider.innerHTML += `
                <div class="slide ${activeClass}" style="background-image:url('${m.banner}')">
                    <div class="slide-overlay"></div>
                    <div class="hero-content">
                        <h1 class="hero-title">${m.title}</h1>
                        <p class="hero-desc">${m.sinopse}</p>
                        <button class="btn-hero" onclick="window.location.href='filme.html?id=${m.id}'">
                            <span class="material-icons">play_arrow</span> Assistir
                        </button>
                    </div>
                </div>`;
        });

        // Animação do Slider
        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;
        if(slides.length > 0) setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 5000);

        // 3. CATEGORIAS DE FILMES
        const catsContainer = document.getElementById('categories-container');
        SiteConfig.categories.forEach(cat => {
            let movies = [];
            // Lógica de filtro compatível com os 30 filmes
            if(cat.filter === 'ano') movies = MoviesData.filter(m => m.ano === cat.value);
            if(cat.filter === 'nota') movies = MoviesData.filter(m => parseFloat(m.nota) >= cat.value);
            if(cat.filter === 'genero') movies = MoviesData.filter(m => m.genero.includes(cat.value));

            if(movies.length > 0) {
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
