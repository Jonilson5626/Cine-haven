// config.js
const SiteConfig = {
  // 1. IDENTIDADE
  identity: {
    title: "Cine Haven",
    logoText: "Cine Haven",
    logoIcon: "play_circle_filled"
  },

  // 2. MENU LATERAL
  menu: [
    { icon: "home", text: "Início", link: "index.html", active: true },
    { icon: "local_fire_department", text: "Em Alta", link: "#em-alta" },
    { icon: "movie", text: "Filmes", link: "#filmes" },
    { icon: "tv", text: "Séries", link: "#series" },
    { icon: "star", text: "Top IMDb", link: "#top-imdb" }
  ],

  // 3. BANNER GIRATÓRIO (rotator)
  rotator: [
    { icon: "4k", title: "Qualidade 4K", text: "Imagem cristalina em todos os títulos compatíveis." },
    { icon: "speed", title: "Download Turbo", text: "Servidores otimizados para alta velocidade." },
    { icon: "security", title: "100% Seguro", text: "Plataforma verificada e protegida." },
    { icon: "telegram", title: "Grupo Oficial", text: "Faça pedidos e receba novidades em primeira mão." },
    { icon: "devices", title: "Multi-Telas", text: "Assista no PC, TV ou celular." }
  ],

  // 4. CATEGORIAS DA HOME
  categories: [
    { id: "lancamentos", title: "Lançamentos", filter: "ano", value: 2024 },
    { id: "destaques", title: "Destaques da Crítica", filter: "nota", value: 8.0 },
    { id: "acao", title: "Ação Pura", filter: "genero", value: "Ação" },
    { id: "terror", title: "Terror", filter: "genero", value: "Terror" },
    { id: "animacao", title: "Animação", filter: "genero", value: "Animação" }
  ],

  // 5. RODAPÉ
  footer: {
    text: "© 2026 Cine Haven. Todos os direitos reservados.",
    links: [
      { text: "DMCA", link: "#" },
      { text: "Termos", link: "#" },
      { text: "Contato", link: "#" }
    ]
  }
};
