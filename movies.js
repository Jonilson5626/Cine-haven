const MoviesData = [
    // --- DESTAQUES (SLIDER) ---
    {
        id: 1, title: "Duna: Parte 2", ano: 2024, genero: ["Ficção", "Aventura"], nota: "8.8", destaque: true,
        poster: "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
        banner: "https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
        sinopse: "Paul Atreides se une a Chani e aos Fremen enquanto busca vingança contra os conspiradores que destruíram sua família."
    },
    {
        id: 2, title: "Godzilla e Kong: O Novo Império", ano: 2024, genero: ["Ação", "Ficção"], nota: "7.0", destaque: true,
        poster: "https://image.tmdb.org/t/p/w500/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
        banner: "https://image.tmdb.org/t/p/original/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
        sinopse: "Uma nova ameaça colossal espreita nas profundezas do planeta, desafiando a própria existência de Godzilla e Kong."
    },
    {
        id: 3, title: "Kung Fu Panda 4", ano: 2024, genero: ["Animação", "Ação"], nota: "7.6", destaque: true,
        poster: "https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg",
        banner: "https://image.tmdb.org/t/p/original/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
        sinopse: "Po é escolhido para se tornar o Líder Espiritual do Vale da Paz e precisa encontrar um novo Dragão Guerreiro."
    },
    {
        id: 4, title: "Oppenheimer", ano: 2023, genero: ["Drama", "História"], nota: "8.1", destaque: true,
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        banner: "https://image.tmdb.org/t/p/original/rLb2cs785pePbIKYQz18IvuNPJh.jpg",
        sinopse: "A história do físico americano J. Robert Oppenheimer e seu papel no desenvolvimento da bomba atômica."
    },
    {
        id: 5, title: "Homem-Aranha: Através do Aranhaverso", ano: 2023, genero: ["Animação", "Ação"], nota: "8.4", destaque: true,
        poster: "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        banner: "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
        sinopse: "Miles Morales é catapultado através do Multiverso, onde encontra uma equipe de Pessoas-Aranha."
    },

    // --- AÇÃO E AVENTURA ---
    {
        id: 6, title: "Guerra Civil", ano: 2024, genero: ["Ação", "Thriller"], nota: "7.4", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/63QG25m4721aB0b54rK69q9.jpg", banner: "",
        sinopse: "Uma jornada através de uma América futurista distópica, seguindo uma equipe de jornalistas militares."
    },
    {
        id: 7, title: "Planeta dos Macacos: O Reinado", ano: 2024, genero: ["Ação", "Ficção"], nota: "7.1", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg", banner: "",
        sinopse: "Várias gerações no futuro após o reinado de César, os macacos são a espécie dominante."
    },
    {
        id: 8, title: "John Wick 4: Baba Yaga", ano: 2023, genero: ["Ação", "Thriller"], nota: "7.8", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", banner: "",
        sinopse: "John Wick descobre um caminho para derrotar a Alta Cúpula."
    },
    {
        id: 9, title: "Furiosa: Uma Saga Mad Max", ano: 2024, genero: ["Ação", "Ficção"], nota: "7.7", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/iADOJ8Zymht2JPMoy3R7xceZprc.jpg", banner: "",
        sinopse: "A origem da guerreira Furiosa antes de encontrar Mad Max."
    },
    {
        id: 10, title: "Top Gun: Maverick", ano: 2022, genero: ["Ação", "Drama"], nota: "8.2", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg", banner: "",
        sinopse: "Maverick retorna para treinar um grupo de graduados Top Gun."
    },
    {
        id: 11, title: "Guardiões da Galáxia Vol. 3", ano: 2023, genero: ["Ação", "Ficção"], nota: "8.0", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg", banner: "",
        sinopse: "Peter Quill deve reunir sua equipe para defender o universo."
    },
    {
        id: 12, title: "Deadpool & Wolverine", ano: 2024, genero: ["Ação", "Comédia"], nota: "8.2", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg", banner: "",
        sinopse: "Wolverine se recupera de seus ferimentos quando cruza com o tagarela Deadpool."
    },
    {
        id: 13, title: "Vingadores: Ultimato", ano: 2019, genero: ["Ação", "Ficção"], nota: "8.4", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg", banner: "",
        sinopse: "Os Vingadores se reúnem mais uma vez para desfazer as ações de Thanos."
    },
    {
        id: 14, title: "Batman: O Cavaleiro das Trevas", ano: 2008, genero: ["Ação", "Crime"], nota: "9.0", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", banner: "",
        sinopse: "Batman luta contra o Coringa, que busca o caos em Gotham."
    },

    // --- TERROR ---
    {
        id: 15, title: "A Freira 2", ano: 2023, genero: ["Terror"], nota: "6.0", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/5gzzkR7y3zdL8NOVDkYe83tO26l.jpg", banner: "",
        sinopse: "Em 1956, na França, um padre é assassinado e um mal está se espalhando."
    },
    {
        id: 16, title: "M3GAN", ano: 2023, genero: ["Terror", "Ficção"], nota: "7.1", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg", banner: "",
        sinopse: "Uma boneca de inteligência artificial desenvolve autoconsciência e se torna hostil."
    },
    {
        id: 17, title: "Pânico 6", ano: 2023, genero: ["Terror", "Mistério"], nota: "7.2", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/wDWAA5QApz5LnnxdWAukuxPCVWp.jpg", banner: "",
        sinopse: "Os sobreviventes dos ataques de Ghostface deixam Woodsboro e tentam começar um novo capítulo."
    },
    {
        id: 18, title: "A Morte do Demônio: A Ascensão", ano: 2023, genero: ["Terror"], nota: "7.0", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/mIBG74mhGEJnBUBxcnm9mjZEWxI.jpg", banner: "",
        sinopse: "O reencontro de duas irmãs é interrompido por demônios devoradores de carne."
    },
    {
        id: 19, title: "Fale Comigo", ano: 2023, genero: ["Terror"], nota: "7.4", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/15g375gX3xZ16g2f9k70d674j.jpg", banner: "",
        sinopse: "Um grupo de amigos descobre como conjurar espíritos usando uma mão embalsamada."
    },

    // --- ANIMAÇÃO ---
    {
        id: 20, title: "Divertida Mente 2", ano: 2024, genero: ["Animação", "Comédia"], nota: "8.5", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/z6b5e15647e3.jpg", banner: "",
        sinopse: "Novas emoções chegam à mente de Riley, agora uma adolescente."
    },
    {
        id: 21, title: "Super Mario Bros. O Filme", ano: 2023, genero: ["Animação", "Aventura"], nota: "7.5", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg", banner: "",
        sinopse: "Mario e Luigi vão parar no reino dos cogumelos e enfrentam Bowser."
    },
    {
        id: 22, title: "Gato de Botas 2", ano: 2022, genero: ["Animação", "Aventura"], nota: "8.3", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/i0sQ9QeZj9S5cE7q6d.jpg", banner: "",
        sinopse: "O Gato de Botas descobre que sua paixão pela aventura cobrou seu preço."
    },
    {
        id: 23, title: "Demon Slayer: To the Hashira Training", ano: 2024, genero: ["Animação", "Ação"], nota: "7.8", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/gKkl37BQuKTanygYQG1pyYgLVgf.jpg", banner: "",
        sinopse: "Tanjiro se prepara para o rigoroso treinamento dos Hashiras."
    },

    // --- SÉRIES ---
    {
        id: 24, title: "The Boys", ano: 2024, genero: ["Série", "Ação"], nota: "8.4", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/7dFZJ2ZJJdcmkp05B9NWlqTJ5tq.jpg", banner: "",
        sinopse: "Um grupo de vigilantes se propõe a derrubar super-heróis corruptos."
    },
    {
        id: 25, title: "Fallout", ano: 2024, genero: ["Série", "Ficção"], nota: "8.5", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/8cO8843AT3435g71t69R733u.jpg", banner: "",
        sinopse: "Em um futuro pós-apocalíptico, os cidadãos devem viver em bunkers subterrâneos."
    },
    {
        id: 26, title: "A Casa do Dragão", ano: 2022, genero: ["Série", "Fantasia"], nota: "8.4", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/t9XkeE7HzOsdQcDDDapqPBfzDlZ.jpg", banner: "",
        sinopse: "A história da Casa Targaryen, 200 anos antes de Game of Thrones."
    },
    {
        id: 27, title: "Stranger Things", ano: 2016, genero: ["Série", "Terror"], nota: "8.6", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/uOVl0hQ99WDe0M33rQXk6I4G2M6.jpg", banner: "",
        sinopse: "Coisas estranhas acontecem em Hawkins após o desaparecimento de um garoto."
    },
    {
        id: 28, title: "The Last of Us", ano: 2023, genero: ["Série", "Drama"], nota: "8.6", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/uKvVjHNqBPlXPleNjEZOHhjqy60.jpg", banner: "",
        sinopse: "Joel e Ellie atravessam os EUA pós-apocalípticos em uma jornada brutal."
    },
    {
        id: 29, title: "X-Men '97", ano: 2024, genero: ["Série", "Animação"], nota: "9.0", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/9Ycz7yYxd99EMopj9IqJH15g00j.jpg", banner: "",
        sinopse: "Os mutantes enfrentam novos desafios nos anos 90."
    },
    {
        id: 30, title: "Shogun", ano: 2024, genero: ["Série", "Drama"], nota: "8.7", destaque: false,
        poster: "https://image.tmdb.org/t/p/w500/7O4iVf5Jl0DmFIdMnvnL5EUyMB.jpg", banner: "",
        sinopse: "No Japão do ano 1600, o Senhor Yoshii Toranaga luta pela vida."
    }
];
