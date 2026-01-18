const SiteConfig = {
    // 1. IDENTIDADE
    identity: {
        title: "Cine Haven",
        logoText: "Cine Haven",
        logoIcon: "play_circle_filled" // Ícone do Google Fonts
    },

    // 2. MENU LATERAL
    menu: [
        { icon: "home", text: "Início", link: "index.html", active: true },
        { icon: "local_fire_department", text: "Em Alta", link: "#" },
        { icon: "movie", text: "Filmes", link: "#" },
        { icon: "tv", text: "Séries", link: "#" },
        { icon: "star", text: "Top IMDb", link: "#" }
    ],

    // 3. BANNER GIRATÓRIO 3D (Textos que ficam passando)
    rotator: [
        { icon: "4k", title: "Qualidade 4K", text: "Imagem Cristalina" },
        { icon: "speed", title: "Download Turbo", text: "Sem Limites" },
        { icon: "security", title: "100% Seguro", text: "Verificado" },
        { icon: "telegram", title: "Grupo Oficial", text: "Faça Pedidos" },
        { icon: "devices", title: "Multi-Telas", text: "PC, TV e Celular" }
    ],

    // 4. CATEGORIAS DA HOME (Onde os filmes aparecem)
    categories: [
        { id: "lancamentos", title: "🔥 Lançamentos", filter: "ano", value: 2024 },
        { id: "destaques", title: "⭐ Destaques da Crítica", filter: "nota", value: 8.0 },
        { id: "acao", title: "💥 Ação Pura", filter: "genero", value: "Ação" },
        { id: "terror", title: "👻 Terror", filter: "genero", value: "Terror" },
        { id: "animacao", title: "🎨 Animação", filter: "genero", value: "Animação" }
    ],

    // 5. RODAPÉ
    footer: {
        copyright: "© 2026 Cine Haven. Todos os direitos reservados.",
        links: [
            { text: "DMCA", link: "#" },
            { text: "Termos", link: "#" },
            { text: "Contato", link: "#" }
        ]
    }
};
